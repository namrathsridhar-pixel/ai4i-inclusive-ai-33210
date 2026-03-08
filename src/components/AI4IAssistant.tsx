import { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, X, Send, Loader2, ChevronRight, User, Bot, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ReactMarkdown from "react-markdown";
import { useToast } from "@/hooks/use-toast";

type Role = "user" | "assistant";
interface Msg { role: Role; content: string }

interface InquiryFormData {
  name: string;
  organization: string;
  email: string;
  country: string;
  category: string;
  message: string;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai4i-chat`;
const INQUIRY_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai4i-inquiry`;

const EXPLORATION_CARDS = [
  {
    title: "Explore AI4I",
    description: "Understand the purpose and vision of AI4I.",
    prompt: "What is AI4I? Explain its purpose, vision, and the role it plays in enabling language AI as digital public goods.",
  },
  {
    title: "Understand the Ecosystem",
    description: "Learn how the AI4I ecosystem is structured.",
    prompt: "Explain how the AI4I ecosystem works, the role of the building blocks, and how they support the AI infrastructure.",
  },
  {
    title: "Learn about VoicERA",
    description: "Discover how AI4I enables real-time multilingual voice AI.",
    prompt: "Tell me about AI4I-VoicERA. What is it, what does it enable, and what is its role in the ecosystem?",
  },
  {
    title: "See how Components Connect",
    description: "Understand how AI4I building blocks work together.",
    prompt: "Explain how VoicERA, Orchestrate, Observe, and Contribute interact and collectively support the AI4I ecosystem.",
  },
];

const SUGGESTED_QUESTIONS = [
  "What is AI4I?",
  "What are the AI4I building blocks?",
  "Tell me about VoicERA",
  "How does the AI4I ecosystem work?",
  "What role does Orchestrate play?",
];

const CATEGORIES = [
  "Partnership",
  "Ecosystem Participation",
  "Research Collaboration",
  "Media",
  "General Inquiry",
];

const WELCOME_MESSAGE = "Hello. I am the AI4I Assistant.\nI can help you explore AI4I and its ecosystem.";

async function streamChatRequest({
  messages,
  onDelta,
  onDone,
  signal,
}: {
  messages: Msg[];
  onDelta: (t: string) => void;
  onDone: () => void;
  signal?: AbortSignal;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
    signal,
  });

  if (!resp.ok || !resp.body) {
    if (resp.status === 429) throw new Error("Rate limit exceeded. Please try again shortly.");
    if (resp.status === 402) throw new Error("Service temporarily unavailable.");
    throw new Error("Failed to connect to AI service.");
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let streamDone = false;

  while (!streamDone) {
    const { done: rd, value } = await reader.read();
    if (rd) break;
    buf += decoder.decode(value, { stream: true });

    let idx: number;
    while ((idx = buf.indexOf("\n")) !== -1) {
      let line = buf.slice(0, idx);
      buf = buf.slice(idx + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (!line.startsWith("data: ")) continue;
      const json = line.slice(6).trim();
      if (json === "[DONE]") { streamDone = true; break; }
      try {
        const parsed = JSON.parse(json);
        const c = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (c) onDelta(c);
      } catch {
        buf = line + "\n" + buf;
        break;
      }
    }
  }

  if (buf.trim()) {
    for (let raw of buf.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (!raw.startsWith("data: ")) continue;
      const json = raw.slice(6).trim();
      if (json === "[DONE]") continue;
      try {
        const parsed = JSON.parse(json);
        const c = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (c) onDelta(c);
      } catch { /* ignore */ }
    }
  }
  onDone();
}

function getFollowUps(content: string): string[] {
  const lower = content.toLowerCase();
  const suggestions: string[] = [];

  if (lower.includes("ai4i") && !lower.includes("orchestrate") && !lower.includes("voicera")) {
    suggestions.push("What are the AI4I building blocks?", "How does the ecosystem work?");
  }
  if (lower.includes("orchestrate")) {
    suggestions.push("How does Observe work?", "Tell me about Contribute");
  }
  if (lower.includes("voicera") || lower.includes("voice")) {
    suggestions.push("What role does Orchestrate play?", "How do the components connect?");
  }
  if (lower.includes("observe")) {
    suggestions.push("Tell me about Contribute", "What is VoicERA?");
  }
  if (lower.includes("contribute")) {
    suggestions.push("Tell me about Observe", "What is VoicERA?");
  }
  if (lower.includes("ecosystem")) {
    suggestions.push("Tell me about VoicERA", "What role does Orchestrate play?");
  }
  if (suggestions.length === 0) {
    suggestions.push("Tell me about VoicERA", "What are the AI4I building blocks?");
  }
  return [...new Set(suggestions)].slice(0, 3);
}

function InquiryFormInline({ onSubmitted }: { onSubmitted: () => void }) {
  const [form, setForm] = useState<InquiryFormData>({
    name: "", organization: "", email: "", country: "", category: "General Inquiry", message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handle = (k: keyof InquiryFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async () => {
    setError("");
    const { name, organization, email, country, message } = form;
    if (!name.trim() || !organization.trim() || !email.trim() || !country.trim() || !message.trim()) {
      setError("All fields are required."); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address."); return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(INQUIRY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ name: name.trim(), organization: organization.trim(), email: email.trim(), country: country.trim(), category: form.category, message: message.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed.");
      toast({ title: "Inquiry submitted", description: "The AI4I team will respond to your inquiry." });
      onSubmitted();
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-3 py-2 text-sm rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <div className="space-y-3 p-3 rounded-lg border border-border bg-muted/30">
      <p className="text-xs font-medium text-muted-foreground">Submit your inquiry</p>
      <input className={inputClass} placeholder="Full Name *" value={form.name} onChange={handle("name")} />
      <input className={inputClass} placeholder="Organization *" value={form.organization} onChange={handle("organization")} />
      <input className={inputClass} placeholder="Work Email *" type="email" value={form.email} onChange={handle("email")} />
      <input className={inputClass} placeholder="Country *" value={form.country} onChange={handle("country")} />
      <select className={inputClass} value={form.category} onChange={handle("category")}>
        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <textarea className={`${inputClass} min-h-[60px] resize-none`} placeholder="Your message *" value={form.message} onChange={handle("message")} rows={3} />
      {error && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{error}</p>}
      <Button size="sm" onClick={submit} disabled={submitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Inquiry"}
      </Button>
    </div>
  );
}

const AI4IAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);
  const [followUps, setFollowUps] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, 50);
  }, []);

  useEffect(() => { if (open) { scrollToBottom(); inputRef.current?.focus(); } }, [open, scrollToBottom]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;
    setShowInquiry(false);
    setFollowUps([]);
    const userMsg: Msg = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    scrollToBottom();

    let assistantContent = "";
    const controller = new AbortController();

    const upsert = (chunk: string) => {
      assistantContent += chunk;
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantContent } : m);
        }
        return [...prev, { role: "assistant", content: assistantContent }];
      });
      scrollToBottom();
    };

    try {
      await streamChatRequest({
        messages: newMessages,
        onDelta: (chunk) => {
          if ((assistantContent + chunk).includes("INQUIRY_NEEDED")) {
            assistantContent = "I do not have that information available on the website. If you would like, you can submit your inquiry and the AI4I team will respond.";
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant") {
                return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantContent } : m);
              }
              return [...prev, { role: "assistant", content: assistantContent }];
            });
            setShowInquiry(true);
            return;
          }
          upsert(chunk);
        },
        onDone: () => {
          setLoading(false);
          if (!assistantContent.includes("INQUIRY_NEEDED")) {
            setFollowUps(getFollowUps(assistantContent));
          }
          scrollToBottom();
        },
        signal: controller.signal,
      });
    } catch (err: any) {
      if (err.name !== "AbortError") {
        upsert("\n\nI encountered an error. Please try again.");
      }
      setLoading(false);
    }
  }, [messages, loading, scrollToBottom]);

  const hasConversation = messages.length > 0;

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          aria-label="Open AI4I Assistant"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-sm font-medium hidden sm:inline">AI4I Assistant</span>
        </button>
      )}

      {open && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[420px] h-[100dvh] sm:h-[600px] sm:max-h-[80vh] flex flex-col rounded-none sm:rounded-2xl border border-border bg-background shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-primary text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">AI4I Assistant</h3>
                <p className="text-[11px] opacity-80">Knowledge guide for AI4I ecosystem</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1.5 rounded-full hover:bg-primary-foreground/20 transition-colors" aria-label="Close">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {/* Welcome */}
            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bot className="w-3.5 h-3.5 text-primary" />
              </div>
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p className="text-sm text-foreground whitespace-pre-line">{WELCOME_MESSAGE}</p>
              </div>
            </div>

            {!hasConversation && (
              <div className="space-y-3 pt-1">
                <p className="text-xs font-medium text-muted-foreground px-1">Explore AI4I</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {EXPLORATION_CARDS.map((card) => (
                    <button
                      key={card.title}
                      onClick={() => sendMessage(card.prompt)}
                      className="text-left p-3 rounded-xl border border-border bg-card hover:bg-accent hover:border-primary/30 transition-all duration-200 group"
                    >
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{card.title}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{card.description}</p>
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <p className="text-xs font-medium text-muted-foreground px-1 mb-2">Suggested questions</p>
                  <div className="flex flex-wrap gap-1.5">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-xs px-3 py-1.5 rounded-full border border-border bg-card hover:bg-accent hover:border-primary/30 text-foreground transition-all duration-200"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : ""}`}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-primary" />
                  </div>
                )}
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                    : "bg-muted text-foreground rounded-tl-sm"
                }`}>
                  {msg.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none text-foreground [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:mt-1 [&_ol]:mt-1 [&_li]:mb-0.5 [&_strong]:text-foreground [&_h1]:text-base [&_h2]:text-sm [&_h3]:text-sm [&_a]:text-primary">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5 text-secondary" />
                  </div>
                )}
              </div>
            ))}

            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            {showInquiry && (
              <InquiryFormInline onSubmitted={() => { setShowInquiry(false); scrollToBottom(); }} />
            )}

            {!loading && followUps.length > 0 && !showInquiry && (
              <div className="flex flex-wrap gap-1.5 pl-9">
                {followUps.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border bg-card hover:bg-accent hover:border-primary/30 text-foreground transition-all duration-200 flex items-center gap-1"
                  >
                    {q}
                    <ChevronRight className="w-3 h-3 text-muted-foreground" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-border bg-background">
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
              className="flex items-center gap-2"
            >
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI4I..."
                disabled={loading}
                className="flex-1 rounded-full border-border bg-muted/50 text-sm h-10"
              />
              <Button
                type="submit"
                size="icon"
                disabled={loading || !input.trim()}
                className="rounded-full w-10 h-10 bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </Button>
            </form>
            <p className="text-[10px] text-muted-foreground text-center mt-2">AI4I Assistant answers using website content only.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AI4IAssistant;
