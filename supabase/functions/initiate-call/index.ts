import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const allowedOrigins = [
  'https://ai4inclusion.org',
  'https://www.ai4inclusion.org',
  'https://ai4i-inclusive-ai-33210.lovable.app',
  'http://localhost:5173',
  'http://localhost:8080',
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get('origin') || '';
  return {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
    'Vary': 'Origin',
  };
}

function maskPhone(phone: string): string {
  if (phone.length < 4) return '***';
  return '***' + phone.slice(-4);
}

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LITWIZLABS_API_KEY = Deno.env.get("LITWIZLABS_API_KEY");
    if (!LITWIZLABS_API_KEY) {
      throw new Error("LITWIZLABS_API_KEY is not configured");
    }

    const LITWIZLABS_AGENT_ID = Deno.env.get("LITWIZLABS_AGENT_ID");
    if (!LITWIZLABS_AGENT_ID) {
      throw new Error("LITWIZLABS_AGENT_ID is not configured");
    }

    const LITWIZLABS_CALLER_ID = Deno.env.get("LITWIZLABS_CALLER_ID");

    const { phone } = await req.json();

    // Validate phone number (10 digits, India)
    if (!phone || !/^\d{10}$/.test(phone)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid phone number. Please provide a 10-digit mobile number." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const body: Record<string, unknown> = {
      agent_id: LITWIZLABS_AGENT_ID,
      to_number: phone,
      country_code: "91",
      timezone: "Asia/Kolkata",
      agent_args: {
        time_now: now.toISOString(),
        day_of_week: days[now.getDay()],
      },
    };

    if (LITWIZLABS_CALLER_ID) {
      body.out_did = LITWIZLABS_CALLER_ID;
    }

    console.log("Initiating call to:", maskPhone(phone));

    const response = await fetch("https://v1.getraya.app/api/call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": LITWIZLABS_API_KEY,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Litwizlabs API error:", response.status, JSON.stringify(data));
      return new Response(
        JSON.stringify({ success: false, error: data.message || "Failed to initiate call." }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Call initiated successfully");
    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error initiating call:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
