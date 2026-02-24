import { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, X, Send, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai4i-chat`;
const INQUIRY_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai4i-inquiry`;

const CATEGORIES = [
  "Partnership",
  "Ecosystem Participation",
  "Research Collaboration",
  "Media",
  "General Inquiry",
];

const InquiryForm = ({ onSubmit, isSubmitting }: { onSubmit: (data: any) => void; isSubmitting: boolean }) => {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    country: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.organization || !form.email || !form.country || !form.category || !form.message) return;
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-3 bg-[#0d1d35] rounded-lg border border-white/10">
      <p className="text-xs text-white/60 mb-2">Please provide your details and our team will connect with you.</p>
      <Input
        placeholder="Full Name *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 text-sm h-9"
      />
      <Input
        placeholder="Organization *"
        value={form.organization}
        onChange={(e) => setForm({ ...form, organization: e.target.value })}
        required
        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 text-sm h-9"
      />
      <Input
        type="email"
        placeholder="Work Email *"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 text-sm h-9"
      />
      <Input
        placeholder="Country *"
        value={form.country}
        onChange={(e) => setForm({ ...form, country: e.target.value })}
        required
        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 text-sm h-9"
      />
      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
        className="w-full h-9 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-white appearance-none"
      >
        <option value="" disabled className="bg-[#0a1628] text-white/50">
          Inquiry Category *
        </option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c} className="bg-[#0a1628] text-white">
            {c}
          </option>
        ))}
      </select>
      <Textarea
        placeholder="Your message *"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
        rows={3}
        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 text-sm min-h-[60px]"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm h-9"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-3 h-3 mr-1 animate-spin" /> Submitting...
          </>
        ) : (
          <>
            Submit Inquiry <ArrowRight className="w-3 h-3 ml-1" />
          </>
        )}
      </Button>
    </form>
  );
};

const AI4IAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hello. I'm the AI4I Assistant. I can help you explore our ecosystem and building blocks." },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showInquiryForm]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const streamChat = useCallback(async (userMessages: Msg[]) => {
    setIsLoading(true);
    let assistantSoFar = "";
    let inquiryNeeded = false;

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: userMessages }),
      });

      if (!resp.ok) {
        const errData = await resp.json().catch(() => ({}));
        throw new Error(errData.error || `Request failed (${resp.status})`);
      }

      if (!resp.body) throw new Error("No response stream");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") { streamDone = true; break; }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantSoFar += content;
              // Check if the AI signals inquiry needed
              if (assistantSoFar.trim() === "INQUIRY_NEEDED" || assistantSoFar.includes("INQUIRY_NEEDED")) {
                inquiryNeeded = true;
                streamDone = true;
                break;
              }
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant" && prev.length > 1 && last.content !== messages[0].content) {
                  return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
                }
                return [...prev, { role: "assistant", content: assistantSoFar }];
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      if (inquiryNeeded) {
        const inquiryMsg = "I do not have that information available on the website. Let me connect you with the AI4I team.";
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant" && last.content.includes("INQUIRY")) {
            return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: inquiryMsg } : m));
          }
          return [...prev, { role: "assistant", content: inquiryMsg }];
        });
        setShowInquiryForm(true);
      }
    } catch (e) {
      console.error("Chat error:", e);
      toast({
        title: "Error",
        description: e instanceof Error ? e.message : "Failed to get response",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [messages, toast]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setShowInquiryForm(false);
    const userMsg: Msg = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const allMsgs = [...messages.filter((m) => m !== messages[0]), userMsg];
    await streamChat(allMsgs);
  };

  const handleInquirySubmit = async (data: any) => {
    setIsSubmittingInquiry(true);
    try {
      const resp = await fetch(INQUIRY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        const errData = await resp.json().catch(() => ({}));
        throw new Error(errData.error || "Submission failed");
      }

      setShowInquiryForm(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Thank you. Your inquiry has been submitted. The AI4I team will review and respond to your inquiry.",
        },
      ]);
    } catch (e) {
      toast({
        title: "Submission Error",
        description: e instanceof Error ? e.message : "Failed to submit inquiry",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingInquiry(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
          aria-label="Open AI4I Assistant"
        >
          <MessageSquare size={22} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-6rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a1628]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#0a1628] to-[#1a3a5c] border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <MessageSquare size={14} className="text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white leading-none">AI4I Assistant</h3>
                <p className="text-[10px] text-white/50 mt-0.5">AI4Inclusion Knowledge Base</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Close assistant"
            >
              <X size={14} className="text-white/60" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-white/5 text-white/90 border border-white/5 rounded-bl-sm"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div
                      className="prose prose-sm prose-invert max-w-none [&_p]:my-1 [&_ul]:my-1 [&_li]:my-0.5 [&_h1]:text-base [&_h2]:text-sm [&_h3]:text-sm [&_strong]:text-white [&_a]:text-primary"
                      dangerouslySetInnerHTML={{
                        __html: msg.content
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                          .replace(/\*(.*?)\*/g, "<em>$1</em>")
                          .replace(/^### (.*$)/gm, "<h3>$1</h3>")
                          .replace(/^## (.*$)/gm, "<h2>$1</h2>")
                          .replace(/^# (.*$)/gm, "<h1>$1</h1>")
                          .replace(/^- (.*$)/gm, "<li>$1</li>")
                          .replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>")
                          .replace(/\n/g, "<br/>"),
                      }}
                    />
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/5 rounded-xl rounded-bl-sm px-3 py-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            {showInquiryForm && (
              <InquiryForm onSubmit={handleInquirySubmit} isSubmitting={isSubmittingInquiry} />
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-2 border-t border-white/10 bg-[#0a1628]">
            <div className="flex items-center gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about AI4Inclusion..."
                disabled={isLoading}
                className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/30 text-sm h-9 focus-visible:ring-primary/30"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="w-9 h-9 bg-primary hover:bg-primary/90 shrink-0"
              >
                <Send size={14} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AI4IAssistant;
