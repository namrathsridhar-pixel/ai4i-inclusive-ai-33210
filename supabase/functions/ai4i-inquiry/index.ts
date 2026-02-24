import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import nodemailer from "nodemailer";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!domain) return "***@***";
  return `${local.slice(0, 2)}***@${domain}`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, organization, email, country, category, message } = await req.json();

    // Validate required fields
    if (!name?.trim() || !organization?.trim() || !email?.trim() || !country?.trim() || !category?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Valid categories
    const validCategories = ["Partnership", "Ecosystem Participation", "Research Collaboration", "Media", "General Inquiry"];
    if (!validCategories.includes(category)) {
      return new Response(
        JSON.stringify({ error: "Invalid inquiry category." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Insert into database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("ai4i_website_inquiries").insert({
      name: name.trim(),
      organization: organization.trim(),
      email: email.trim(),
      country: country.trim(),
      category,
      message: message.trim(),
      source: "AI4I Website Assistant",
      status: "new",
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save inquiry." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send emails
    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpPort = parseInt(Deno.env.get("SMTP_PORT") || "587");
    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPass = Deno.env.get("SMTP_PASS");
    const fromEmail = Deno.env.get("FROM_EMAIL") || "noreply@ai4inclusion.org";

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });

      const timestamp = new Date().toISOString();
      const safeName = escapeHtml(name.trim());
      const safeOrg = escapeHtml(organization.trim());
      const safeCountry = escapeHtml(country.trim());
      const safeMessage = escapeHtml(message.trim());

      // Admin notification
      await transporter.sendMail({
        from: `"AI4I Website Assistant" <${fromEmail}>`,
        to: "info@ai4inclusion.org",
        replyTo: email.trim(),
        subject: `New AI4I Website Inquiry – ${category}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #0a1628, #1a3a5c); padding: 24px 32px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New AI4I Website Inquiry</h1>
              <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px;">Via AI4I Website Assistant</p>
            </div>
            <div style="padding: 32px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: 600; color: #374151; width: 120px;">Name</td><td style="padding: 8px 0; color: #111827;">${safeName}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Organization</td><td style="padding: 8px 0; color: #111827;">${safeOrg}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Email</td><td style="padding: 8px 0; color: #111827;">${escapeHtml(email.trim())}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Country</td><td style="padding: 8px 0; color: #111827;">${safeCountry}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: 600; color: #374151;">Category</td><td style="padding: 8px 0; color: #111827;">${escapeHtml(category)}</td></tr>
              </table>
              <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 6px; border-left: 3px solid #3b82f6;">
                <p style="font-weight: 600; color: #374151; margin: 0 0 8px;">Message</p>
                <p style="color: #111827; margin: 0; line-height: 1.6;">${safeMessage}</p>
              </div>
              <p style="margin-top: 16px; font-size: 12px; color: #9ca3af;">Submitted at: ${timestamp}</p>
            </div>
          </div>
        `,
        text: `New AI4I Website Inquiry – ${category}\n\nName: ${name.trim()}\nOrganization: ${organization.trim()}\nEmail: ${email.trim()}\nCountry: ${country.trim()}\nCategory: ${category}\nMessage: ${message.trim()}\nTimestamp: ${timestamp}`,
      });

      // User confirmation
      await transporter.sendMail({
        from: `"AI4Inclusion" <${fromEmail}>`,
        to: email.trim(),
        subject: "Thank you for contacting AI4Inclusion",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #0a1628, #1a3a5c); padding: 24px 32px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Thank You for Reaching Out</h1>
            </div>
            <div style="padding: 32px;">
              <p style="color: #374151; line-height: 1.6;">Dear ${safeName},</p>
              <p style="color: #374151; line-height: 1.6;">Thank you for your interest in AI4Inclusion. Our team will review your inquiry and respond accordingly.</p>
              <p style="color: #374151; line-height: 1.6;">We are committed to building inclusive, policy-governed Language AI as a Digital Public Good at population scale.</p>
              <p style="color: #9ca3af; font-size: 13px; margin-top: 24px;">This is an automated confirmation. Please do not reply to this email.</p>
            </div>
          </div>
        `,
        text: `Dear ${name.trim()},\n\nThank you for your interest in AI4Inclusion. Our team will review your inquiry and respond accordingly.\n\nWe are committed to building inclusive, policy-governed Language AI as a Digital Public Good at population scale.`,
      });

      console.log(`Inquiry emails sent for ${maskEmail(email.trim())}`);
    } else {
      console.warn("SMTP not configured — skipping email notifications");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("ai4i-inquiry error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
