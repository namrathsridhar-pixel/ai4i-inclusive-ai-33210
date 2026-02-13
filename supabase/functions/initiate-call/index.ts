import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LITWIZLABS_API_KEY = Deno.env.get("LITWIZLABS_API_KEY");
    if (!LITWIZLABS_API_KEY) {
      throw new Error("LITWIZLABS_API_KEY is not configured");
    }

    const LITWIZLABS_CALLER_ID = Deno.env.get("LITWIZLABS_CALLER_ID");
    if (!LITWIZLABS_CALLER_ID) {
      throw new Error("LITWIZLABS_CALLER_ID is not configured");
    }

    const { phone } = await req.json();

    // Validate phone number (10 digits, India)
    if (!phone || !/^\d{10}$/.test(phone)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid phone number. Please provide a 10-digit mobile number." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const fullPhone = `+91${phone}`;

    const response = await fetch("https://api.litwizlabs.com/v1/calls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LITWIZLABS_API_KEY}`,
      },
      body: JSON.stringify({
        to: fullPhone,
        from: LITWIZLABS_CALLER_ID,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Litwizlabs API error:", response.status, JSON.stringify(data));
      return new Response(
        JSON.stringify({ success: false, error: "Failed to initiate call. Please try again." }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

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
