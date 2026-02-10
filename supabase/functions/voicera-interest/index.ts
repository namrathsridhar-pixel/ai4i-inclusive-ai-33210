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

function getSmtpConfig() {
  const smtpHost = Deno.env.get('SMTP_HOST');
  const smtpPort = Deno.env.get('SMTP_PORT') || '587';
  const smtpUser = Deno.env.get('SMTP_USER');
  const smtpPass = Deno.env.get('SMTP_PASS');
  if (!smtpHost || !smtpUser || !smtpPass) return null;
  return { smtpHost, smtpPort, smtpUser, smtpPass };
}

async function sendConfirmationEmail(name: string, email: string): Promise<{ success: boolean; error?: string }> {
  const smtp = getSmtpConfig();
  const fromEmail = Deno.env.get('FROM_EMAIL');
  if (!smtp || !fromEmail) {
    console.error('Email configuration missing');
    return { success: false, error: 'Email configuration incomplete' };
  }

  const displayName = name?.trim() || 'there';

  const plainText = `Hi ${displayName},

Thank you for showing interest in VoicERA, a Voice AI initiative under the AI4Inclusion (AI4I) ecosystem.

VoicERA focuses on enabling inclusive, intelligent, and real-world voice experiences across sectors such as education, public services, enterprises, and accessibility-driven solutions.

We've successfully received your details. Our team will review your interest and the context you've shared to understand how VoicERA can best align with your voice AI use case. If there's a relevant next step — such as a product walkthrough, demo, or discussion — someone from our team will reach out.

If you'd like to share additional details or have any questions, feel free to reply to this email.

Warm regards,
AI4Inclusion Team
on behalf of VoicERA

Website: https://ai4inclusion.org
Email: info@ai4inclusion.org`;

  const htmlBody = `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="x-apple-disable-message-reformatting" />
      <title>VoicERA</title>
      <!--[if mso]>
      <noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
      <![endif]-->
      <style>
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; }
      </style>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f6f9; font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; mso-line-height-rule: exactly;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f6f9; padding: 32px 0;">
        <tr>
          <td align="center" valign="top">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden;">

              <!-- Header -->
              <tr>
                <td align="center" style="background-color: #0f2440; padding: 32px 40px; text-align: center;">
                  <!--[if mso]>
                  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:90px;">
                    <v:fill type="gradient" color="#0a1628" color2="#1e3a5f" angle="135" />
                    <v:textbox inset="0,0,0,0" style="mso-fit-shape-to-text:true">
                  <![endif]-->
                  <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Segoe UI', Arial, sans-serif;">VoicERA</h1>
                  <p style="margin: 6px 0 0 0; font-size: 12px; color: #8899bb; letter-spacing: 1.5px; text-transform: uppercase; font-family: 'Segoe UI', Arial, sans-serif;">India's Sovereign Voice Operating System</p>
                  <!--[if mso]>
                    </v:textbox>
                  </v:rect>
                  <![endif]-->
                </td>
              </tr>

              <!-- Accent bar -->
              <tr>
                <td style="padding: 0; font-size: 0; line-height: 0;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td width="33%" style="height: 3px; background-color: #1e3a5f; font-size: 0; line-height: 0;">&nbsp;</td>
                      <td width="34%" style="height: 3px; background-color: #e87722; font-size: 0; line-height: 0;">&nbsp;</td>
                      <td width="33%" style="height: 3px; background-color: #138808; font-size: 0; line-height: 0;">&nbsp;</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding: 36px 40px 20px 40px;">
                  <p style="margin: 0 0 20px 0; font-size: 16px; color: #1a1a2e; line-height: 24px;">Hi ${displayName},</p>

                  <p style="margin: 0 0 18px 0; font-size: 15px; color: #333344; line-height: 26px;">Thank you for showing interest in <strong style="color: #1e3a5f;">VoicERA</strong>, a Voice AI initiative under the <strong style="color: #1e3a5f;">AI4Inclusion (AI4I)</strong> ecosystem.</p>

                  <p style="margin: 0 0 18px 0; font-size: 15px; color: #333344; line-height: 26px;">VoicERA focuses on enabling inclusive, intelligent, and real-world voice experiences across sectors such as education, public services, enterprises, and accessibility-driven solutions.</p>

                  <p style="margin: 0 0 18px 0; font-size: 15px; color: #333344; line-height: 26px;">We've successfully received your details. Our team will review your interest and the context you've shared to understand how VoicERA can best align with your voice AI use case. If there's a relevant next step — such as a product walkthrough, demo, or discussion — someone from our team will reach out.</p>

                  <p style="margin: 0 0 24px 0; font-size: 15px; color: #333344; line-height: 26px;">If you'd like to share additional details or have any questions, feel free to reply to this email.</p>
                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="padding: 0 40px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr><td style="border-top: 1px solid #e8ecf1; font-size: 0; line-height: 0; height: 1px;">&nbsp;</td></tr>
                  </table>
                </td>
              </tr>

              <!-- Signature -->
              <tr>
                <td style="padding: 24px 40px 32px 40px;">
                  <p style="margin: 0 0 4px 0; font-size: 15px; color: #333344;">Warm regards,</p>
                  <p style="margin: 0 0 2px 0; font-size: 15px; font-weight: 600; color: #1e3a5f;">AI4Inclusion Team</p>
                  <p style="margin: 0 0 12px 0; font-size: 13px; color: #6b7280; font-style: italic;">on behalf of VoicERA</p>
                  <p style="margin: 0; font-size: 13px; line-height: 24px;">
                    <a href="https://ai4inclusion.org/" style="color: #1e3a5f; text-decoration: none;">ai4inclusion.org</a><br/>
                    <a href="mailto:info@ai4inclusion.org" style="color: #1e3a5f; text-decoration: none;">info@ai4inclusion.org</a>
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f9fb; padding: 16px 40px; text-align: center; border-top: 1px solid #e8ecf1;">
                  <p style="margin: 0; font-size: 11px; color: #9ca3af; line-height: 18px;">AI4Inclusion &#8212; A Digital Public Good Initiative</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    const nodemailer = (await import("npm:nodemailer@6.9.12")).default;
    const transporter = nodemailer.createTransport({
      host: smtp.smtpHost,
      port: parseInt(smtp.smtpPort, 10),
      secure: parseInt(smtp.smtpPort, 10) === 465,
      auth: { user: smtp.smtpUser, pass: smtp.smtpPass },
    });

    await transporter.sendMail({
      from: `"AI4Inclusion Team" <${fromEmail}>`,
      to: email,
      subject: "Thanks for your interest in VoicERA",
      text: plainText,
      html: htmlBody,
      headers: {
        'X-Mailer': 'AI4Inclusion Mailer',
        'X-Priority': '3',
        'Precedence': 'bulk',
      },
    });

    console.log(`VoicERA confirmation email sent to ${email}`);
    return { success: true };
  } catch (error) {
    console.error(`Failed to send VoicERA email to ${email}:`, error);
    return { success: false, error: error.message };
  }
}

async function sendAdminNotificationEmail(
  name: string, email: string, organization: string, useCase: string, submittedAt: string
): Promise<{ success: boolean; error?: string }> {
  const smtp = getSmtpConfig();
  const fromEmail = Deno.env.get('FROM_EMAIL');
  const adminEmail = 'info@ai4inclusion.org';
  if (!smtp || !fromEmail) return { success: false, error: 'Email configuration incomplete' };

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <h2 style="color: #1e40af; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New VoicERA Interest Submission</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 10px 12px; font-weight: bold; color: #374151; width: 160px; vertical-align: top;">Name</td>
          <td style="padding: 10px 12px; color: #111827;">${name || '<em style="color: #9ca3af;">Not provided</em>'}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
          <td style="padding: 10px 12px; font-weight: bold; color: #374151; vertical-align: top;">Email</td>
          <td style="padding: 10px 12px; color: #111827;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 10px 12px; font-weight: bold; color: #374151; vertical-align: top;">Organization</td>
          <td style="padding: 10px 12px; color: #111827;">${organization || '<em style="color: #9ca3af;">Not provided</em>'}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
          <td style="padding: 10px 12px; font-weight: bold; color: #374151; vertical-align: top;">Use Case</td>
          <td style="padding: 10px 12px; color: #111827; white-space: pre-wrap;">${useCase || '<em style="color: #9ca3af;">Not provided</em>'}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: bold; color: #374151; vertical-align: top;">Submitted At</td>
          <td style="padding: 10px 12px; color: #6b7280; font-size: 13px;">${new Date(submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td>
        </tr>
      </table>
      <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">This is an automated notification from the AI4Inclusion VoicERA interest form.</p>
    </div>
  `;

  try {
    const nodemailer = (await import("npm:nodemailer@6.9.12")).default;
    const transporter = nodemailer.createTransport({
      host: smtp.smtpHost,
      port: parseInt(smtp.smtpPort, 10),
      secure: parseInt(smtp.smtpPort, 10) === 465,
      auth: { user: smtp.smtpUser, pass: smtp.smtpPass },
    });

    await transporter.sendMail({
      from: `"AI4I Website" <${fromEmail}>`,
      to: adminEmail,
      replyTo: email,
      subject: `VoicERA Interest: ${name || email}`,
      html: htmlBody,
    });

    console.log(`VoicERA admin notification sent to ${adminEmail}`);
    return { success: true };
  } catch (error) {
    console.error(`Failed to send VoicERA admin notification:`, error);
    return { success: false, error: error.message };
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    const { full_name, email, organization_name, use_case } = body;

    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim().toLowerCase();
    if (!emailRegex.test(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const trimmedName = (full_name || '').trim();
    const trimmedOrg = (organization_name || '').trim();
    const trimmedUseCase = (use_case || '').trim();

    if (trimmedName.length > 100) {
      return new Response(JSON.stringify({ error: 'Name must be less than 100 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    if (trimmedOrg.length > 200) {
      return new Response(JSON.stringify({ error: 'Organization name must be less than 200 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    if (trimmedUseCase.length > 2000) {
      return new Response(JSON.stringify({ error: 'Use case must be less than 2000 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    if (isRateLimited(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: 'Too many submissions. Please try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: insertedRecord, error: dbError } = await supabase
      .from('voicera_interest_leads')
      .insert({
        full_name: trimmedName || null,
        email: trimmedEmail,
        organization_name: trimmedOrg || null,
        use_case: trimmedUseCase || null,
        source: 'VoicERA Website',
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database insertion error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save your submission. Please try again.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send emails in parallel
    const [emailResult, adminResult] = await Promise.all([
      sendConfirmationEmail(trimmedName, trimmedEmail),
      sendAdminNotificationEmail(trimmedName, trimmedEmail, trimmedOrg, trimmedUseCase, insertedRecord?.submitted_at || new Date().toISOString()),
    ]);

    if (!emailResult.success) {
      console.warn('User confirmation email failed:', emailResult.error);
    }
    if (!adminResult.success) {
      console.warn('Admin notification email failed:', adminResult.error);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Interest registered successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred. Please try again.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
