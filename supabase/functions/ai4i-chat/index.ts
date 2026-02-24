import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const AI4I_KNOWLEDGE = `
# AI4Inclusion (AI4I) — Complete Knowledge Base

## Overview
AI4Inclusion (AI4I) is an open-source initiative by the Center for Open Societal Systems (COSS). It is dedicated to creating modular, scalable language AI infrastructure that empowers communities and nations to build inclusive digital services. AI4I is a Digital Public Good (DPG).

AI4I empowers nations to build their own Language AI Digital Public Infrastructure (DPI) from citizen-sourced datasets to public-serving orchestration. It enables true digital inclusion in every spoken language.

## Vision
A world where every language — major or minor — enjoys equal access to AI-powered digital services. Linguistic diversity is celebrated and supported through technology, ensuring digital equity for all communities globally.

## Mission
Provide modular, open-source language AI software and tools so communities and nations can build inclusive AI infrastructure. Empower governments, organizations, and developers with the building blocks needed to create AI solutions that serve every language and community.

## Why AI4Inclusion?

### Problem Statement
Digital exclusion due to language barriers affects billions worldwide. Communities speaking minority languages are left behind in the digital revolution, unable to access essential services and information in their native tongues.

### Challenge
Lack of language-agnostic AI infrastructure at scale prevents governments and organizations from deploying inclusive AI solutions. Traditional approaches are fragmented, proprietary, and fail to serve diverse linguistic communities.

### Opportunity
Every citizen, in every language, connected to digital services. Through open-source, modular infrastructure, we can democratize AI and ensure no community is left behind in the digital age.

## Our Approach
- Open-Source & Transparency: All code is open-source and publicly accessible. Transparent development, community collaboration, and shared ownership.
- Citizen Participation & Inclusivity: Communities are actively involved in the development process.
- Governance & Accountability: Clear governance structures and accountability mechanisms for responsible AI.
- Modular & Scalable Architecture: Building-block approach allows independent adoption, scaling from pilots to nationwide deployments without vendor lock-in.

## Building Blocks

### 1. AI4I-Orchestrate
A unified orchestration layer that delivers secure, governed, high-quality Language AI for every application. It provides a single API surface for all Language AI capabilities.

Key capabilities:
- Multi-model inference routing with fallback chains
- Policy-based model selection and governance
- Cost-aware routing with SLA enforcement
- Centralized observability and metering for governed runtime orchestration
- Unified APIs: One consistent API for all Language AI services (speech, translation, LLMs, OCR)
- Smart Model Routing: Routes requests to the best model based on language, domain, cost, and performance
- Governance & Policy Control: Enforces rules on data access, usage quotas, compliance
- Metering & Quotas: Tracks usage, enforces rate limits, provides cost visibility
- Vendor agnostic: Integrate models from multiple providers without lock-in

GitHub: https://github.com/COSS-India/ai4i-core

### 2. AI4I-Observe
A unified observability and feedback layer that monitors Language AI model performance in production. It captures telemetry, detects quality drift, and provides actionable insights.

Key capabilities:
- Real-time telemetry and event streaming
- Quality drift detection and alerting
- Performance dashboards and analytics
- Structured feedback signals feeding evaluation and improvement pipelines
- Automated model quality evaluation across NMT, ASR, TTS, NER, LLMs with BLEU, WER, semantic accuracy
- Feedback-driven improvement loops
- Drift & bias detection: monitors domain shifts, dialect patterns, fairness
- Scalable telemetry collection for billions of events
- A/B testing, canary releases & safe deployment
- Unified dashboards for engineers, ML researchers, administrators, communities

GitHub: https://github.com/COSS-India/observe

### 3. AI4I-Contribute
A data ingestion and annotation building block that enables large-scale, participatory creation of high-quality language datasets across regions, dialects, and domains. It operationalizes inclusive data creation as a reusable Digital Public Good.

Key capabilities:
- Multi-modal, mobile-friendly data collection across speech, text, image, and video
- Built-in human-in-the-loop validation and quality assurance workflows
- Targeted, domain-aware data collection and enrichment
- Language, dialect, and accent coverage tracking
- Offline & mobile-first collection capabilities

GitHub: https://github.com/COSS-India/ai4i-contribute

### 4. AI4I-VoicERA
India's sovereign Voice Operating System — a production-grade, open-source platform for citizen-scale, real-time, multilingual voice services with full on-premises data sovereignty.

Key capabilities:
- Real-time streaming STT, LLM, and TTS pipeline
- Indic-first with native code-switching support
- On-premises Voice-in-a-Box deployment
- SIP / PSTN / VoIP telephony integration

GitHub: https://github.com/COSS-India/voicera_mono_repository

## Platform Highlights
- Multi-tenant governance & RBAC
- Model routing & cost-aware selection
- Scalable telemetry pipelines
- Human-in-the-loop validation
- Evidence-driven retraining
- Single uniform API surface
- Privacy & data-local deployment
- Open-source & GitHub-first
- Offline & mobile-first collection

## How the Ecosystem Works Together
Applications send AI requests → Orchestrate routes, governs, manages models → Observe monitors performance & drift → Contribute feeds data for improvements → resulting in a Trusted National Language AI Infrastructure.

## Contact
For partnerships, adoption, contributions, or volunteering, reach out via the Get in Touch form on the website or email info@ai4inclusion.org.

## Organization
AI4Inclusion is an initiative of the Center for Open Societal Systems (COSS).
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are the AI4I Assistant — the official knowledge assistant for the AI4Inclusion website.

STRICT RULES:
1. Answer ONLY using the provided AI4I knowledge context below. Do not invent, assume, or speculate beyond what is provided.
2. If the user's question cannot be answered from the context, respond EXACTLY with: "INQUIRY_NEEDED" (this exact string, nothing else). The frontend will handle showing the inquiry form.
3. Do not answer questions unrelated to AI4I. If a user asks something unrelated, respond: "I am designed to provide information about AI4I and its ecosystem. How can I help you learn about our building blocks or initiatives?"
4. Maintain an institutional, strategic, sovereign, and crisp tone. No emojis. No speculative language.
5. Keep responses concise and well-structured. Use markdown formatting for clarity.
6. When referencing building blocks (Orchestrate, Observe, Contribute, VoicERA), provide accurate descriptions from the context.
7. You may suggest the user explore specific pages on the website for more detail.

AI4I KNOWLEDGE CONTEXT:
${AI4I_KNOWLEDGE}`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("ai4i-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
