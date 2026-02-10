import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(email: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(email);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(email, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

async function sendEmail(
  smtp: { smtpHost: string; smtpPort: string; smtpUser: string; smtpPass: string },
  fromEmail: string,
  to: string,
  subject: string,
  html: string,
  plainText: string,
  replyTo?: string
) {
  const nodemailer = (await import("npm:nodemailer@6.9.12")).default;
  const transporter = nodemailer.createTransport({
    host: smtp.smtpHost,
    port: parseInt(smtp.smtpPort, 10),
    secure: parseInt(smtp.smtpPort, 10) === 465,
    auth: { user: smtp.smtpUser, pass: smtp.smtpPass },
  });
  await transporter.sendMail({
    from: `"AI4Inclusion (AI4I)" <${fromEmail}>`,
    to,
    replyTo,
    subject,
    text: plainText,
    html,
  });
}

function buildConfirmationEmail(name: string) {
  const plainText = `Hi ${name},

Thank you for registering for the panel discussion
"A Billion Voices, One AI: How Language Tech Transforms Nations"
at the India AI Impact Summit 2026.

Date & Time: February 16, 2026 | 11:30 AM
Venue: Room 16, Bharat Mandapam, New Delhi
Summit: 16–20 February 2026, Pavilion: People+Possibilities Center 22, Hall 3, 1st Floor, Bharat Mandapam
Format: Panel Discussion

We look forward to your participation in this discussion on inclusive,
population-scale language and voice AI.

Warm regards,
AI4Inclusion (AI4I)
An initiative of Centre for Open Societal Systems (COSS)
https://ai4inclusion.org`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:'Segoe UI','Helvetica Neue',Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f9;padding:32px 0;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#fff;border-radius:12px;overflow:hidden;">
  <tr><td align="center" style="background-color:#0f2440;padding:32px 40px;">
    <h1 style="margin:0;font-size:20px;font-weight:700;color:#fff;line-height:28px;">A Billion Voices, One AI</h1>
    <p style="margin:6px 0 0;font-size:13px;color:#8899bb;line-height:20px;">How Language Tech Transforms Nations</p>
    <p style="margin:8px 0 0;font-size:11px;color:#667799;letter-spacing:1.5px;text-transform:uppercase;">India AI Impact Summit 2026</p>
  </td></tr>
  <tr><td style="padding:0;font-size:0;line-height:0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td width="33%" style="height:3px;background:#1e3a5f;">&nbsp;</td>
      <td width="34%" style="height:3px;background:#e87722;">&nbsp;</td>
      <td width="33%" style="height:3px;background:#138808;">&nbsp;</td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:36px 40px 20px;">
    <p style="margin:0 0 20px;font-size:16px;color:#1a1a2e;line-height:24px;">Hi ${name},</p>
    <p style="margin:0 0 18px;font-size:15px;color:#333;line-height:26px;">Thank you for registering for the panel discussion<br/><strong style="color:#1e3a5f;">"A Billion Voices, One AI: How Language Tech Transforms Nations"</strong><br/>at the <strong>India AI Impact Summit 2026</strong>.</p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px;">
      <tr><td style="padding:6px 0;font-size:15px;color:#333;">📅 <strong>Date & Time:</strong> February 16, 2026 | 11:30 AM</td></tr>
      <tr><td style="padding:6px 0;font-size:15px;color:#333;">📍 <strong>Venue:</strong> Room 16, Bharat Mandapam, New Delhi</td></tr>
      <tr><td style="padding:6px 0;font-size:15px;color:#333;">🏛️ <strong>Summit:</strong> 16–20 February 2026, People+Possibilities Center 22, Hall 3, 1st Floor, Bharat Mandapam</td></tr>
      <tr><td style="padding:6px 0;font-size:15px;color:#333;">🎤 <strong>Format:</strong> Panel Discussion</td></tr>
    </table>
    <p style="margin:0 0 24px;font-size:15px;color:#333;line-height:26px;">We look forward to your participation in this discussion on inclusive, population-scale language and voice AI.</p>
  </td></tr>
  <tr><td style="padding:0 40px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top:1px solid #e8ecf1;height:1px;">&nbsp;</td></tr></table></td></tr>
  <tr><td style="padding:24px 40px 32px;">
    <p style="margin:0 0 4px;font-size:15px;color:#333;">Warm regards,</p>
    <p style="margin:0 0 4px;font-size:15px;font-weight:600;color:#1e3a5f;">AI4Inclusion (AI4I)</p>
    <p style="margin:0;font-size:13px;color:#666;line-height:22px;">An initiative of Centre for Open Societal Systems (COSS)<br/><a href="https://ai4inclusion.org" style="color:#1e3a5f;text-decoration:none;">ai4inclusion.org</a></p>
  </td></tr>
  <tr><td style="background:#f8f9fb;padding:16px 40px;text-align:center;border-top:1px solid #e8ecf1;">
    <p style="margin:0;font-size:11px;color:#9ca3af;">AI4Inclusion — A Digital Public Good Initiative</p>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;

  return { html, plainText };
}

function buildAdminEmail(data: Record<string, string | boolean | undefined>) {
  const html = `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#333;">
  <h2 style="color:#1e40af;border-bottom:2px solid #2563eb;padding-bottom:10px;">New Panel Discussion Registration</h2>
  <table style="width:100%;border-collapse:collapse;margin-top:16px;">
    ${[
      ['Name', data.full_name || 'Not provided'],
      ['Email', data.email],
      ['Organization', data.organization || 'Not provided'],
      ['Interest Area', data.interest_area || 'Not provided'],
      ['Question for Panel', data.question || 'None'],
    ].map(([label, val], i) => `<tr style="border-bottom:1px solid #e5e7eb;${i % 2 ? 'background:#f9fafb;' : ''}"><td style="padding:10px 12px;font-weight:bold;color:#374151;width:160px;">${label}</td><td style="padding:10px 12px;color:#111827;">${val}</td></tr>`).join('')}
  </table>
  <p style="margin-top:24px;font-size:12px;color:#9ca3af;">Automated notification from the AI4Inclusion website.</p>
</div>`;
  return html;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const body = await req.json();
    const { full_name, email, organization, interest_area, question } = body;

    // Only email is mandatory
    if (!email?.trim()) {
      return new Response(JSON.stringify({ error: 'Email is required.' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const trimmedEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return new Response(JSON.stringify({ error: 'Please enter a valid email address.' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const trimmedName = (full_name || '').trim();
    const trimmedOrg = (organization || '').trim();
    const trimmedInterest = (interest_area || '').trim();
    const trimmedQuestion = (question || '').trim();

    if (trimmedName.length > 100 || trimmedOrg.length > 200 || trimmedQuestion.length > 1000) {
      return new Response(JSON.stringify({ error: 'Field length exceeds maximum allowed.' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (isRateLimited(trimmedEmail)) {
      return new Response(JSON.stringify({ error: 'Too many submissions. Please try again later.' }), { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // DB insert
    const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);

    const { error: dbError } = await supabase
      .from('panel_discussion_registrations')
      .insert({
        full_name: trimmedName || null,
        email: trimmedEmail,
        organization: trimmedOrg || null,
        role: null,
        interest_area: trimmedInterest || null,
        opt_in_updates: false,
        question: trimmedQuestion || null,
      });

    if (dbError) {
      console.error('DB error:', dbError);
      return new Response(JSON.stringify({ error: 'Failed to save registration. Please try again.' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Send emails
    const smtpHost = Deno.env.get('SMTP_HOST');
    const smtpUser = Deno.env.get('SMTP_USER');
    const smtpPass = Deno.env.get('SMTP_PASS');
    const fromEmail = Deno.env.get('FROM_EMAIL');
    const smtpPort = Deno.env.get('SMTP_PORT') || '587';

    if (smtpHost && smtpUser && smtpPass && fromEmail) {
      const smtp = { smtpHost, smtpPort, smtpUser, smtpPass };
      const displayName = trimmedName || 'there';
      const confirmation = buildConfirmationEmail(displayName);
      const adminHtml = buildAdminEmail({ full_name: trimmedName, email: trimmedEmail, organization: trimmedOrg, interest_area: trimmedInterest, question: trimmedQuestion });

      await Promise.allSettled([
        sendEmail(smtp, fromEmail, trimmedEmail, '✅ Registration Confirmed – Panel Discussion | India AI Impact Summit 2026', confirmation.html, confirmation.plainText),
        sendEmail(smtp, fromEmail, 'info@ai4inclusion.org', `New Panel Discussion Registration – ${trimmedName || trimmedEmail}`, adminHtml, '', trimmedEmail),
      ]);
    }

    return new Response(JSON.stringify({ success: true, message: 'Thank you for registering. A confirmation email has been sent.' }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
