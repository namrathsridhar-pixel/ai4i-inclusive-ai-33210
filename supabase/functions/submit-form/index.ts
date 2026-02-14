import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const allowedOrigins = [
  'https://ai4inclusion.org',
  'https://www.ai4inclusion.org',
  'https://ai4i-inclusive-ai-33210.lovable.app',
  'http://localhost:5173',
  'http://localhost:8080',
];

function isAllowedOrigin(origin: string): boolean {
  if (allowedOrigins.includes(origin)) return true;
  if (/^https:\/\/[a-z0-9-]+\.lovableproject\.com$/.test(origin)) return true;
  if (/^https:\/\/[a-z0-9-]+\.lovable\.app$/.test(origin)) return true;
  if (/^https:\/\/id-preview--[a-z0-9-]+\.lovable\.app$/.test(origin)) return true;
  return false;
}

function getCorsHeaders(req: Request) {
  const origin = req.headers.get('origin') || '';
  return {
    'Access-Control-Allow-Origin': isAllowedOrigin(origin) ? origin : allowedOrigins[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
    'Vary': 'Origin',
  };
}

function maskEmail(email: string): string {
  const [local, domain] = email.split('@');
  return (local.length > 2 ? local.substring(0, 2) + '***' : '***') + '@' + domain;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// Simple in-memory rate limiting (per isolate instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // max 5 submissions per email per hour

function isRateLimited(email: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(email);
  
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(email, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  entry.count++;
  return false;
}

function getSmtpTransporter() {
  const smtpHost = Deno.env.get('SMTP_HOST');
  const smtpPort = Deno.env.get('SMTP_PORT') || '587';
  const smtpUser = Deno.env.get('SMTP_USER');
  const smtpPass = Deno.env.get('SMTP_PASS');

  if (!smtpHost || !smtpUser || !smtpPass) {
    return null;
  }

  return { smtpHost, smtpPort, smtpUser, smtpPass };
}

async function sendConfirmationEmail(name: string, email: string): Promise<{ success: boolean; error?: string }> {
  const smtp = getSmtpTransporter();
  const fromEmail = Deno.env.get('FROM_EMAIL');

  if (!smtp || !fromEmail) {
    console.error('Email configuration missing');
    return { success: false, error: 'Email configuration incomplete' };
  }

  const displayName = name?.trim() || 'there';

  const plainText = `Hi ${displayName},

Thank you for showing interest in AI4Inclusion.

We've received your details and truly appreciate your interest in our mission to build Inclusive, Policy-Governed Language AI as Digital Public Good at Population Scale.

Our team will get in touch with you shortly regarding your query or comment, along with relevant next steps based on your area of interest.

In the meantime, if you have any questions or would like to share additional information, feel free to reply to this email.

We look forward to connecting with you.

Warm regards,
AI4I Team
ai4inclusion.org
info@ai4inclusion.org

AI4Inclusion — A Digital Public Good Initiative`;

  const htmlBody = `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="x-apple-disable-message-reformatting" />
      <title>AI4Inclusion</title>
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
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
              
              <!-- Header with branding -->
              <tr>
                <td align="center" style="background-color: #0f2440; padding: 32px 40px; text-align: center;">
                  <!--[if mso]>
                  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:90px;">
                    <v:fill type="gradient" color="#0a1628" color2="#1e3a5f" angle="135" />
                    <v:textbox inset="0,0,0,0" style="mso-fit-shape-to-text:true">
                  <![endif]-->
                  <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; font-family: 'Segoe UI', Arial, sans-serif;">AI4Inclusion</h1>
                  <p style="margin: 6px 0 0 0; font-size: 12px; color: #8899bb; letter-spacing: 1.5px; text-transform: uppercase; font-family: 'Segoe UI', Arial, sans-serif;">Inclusive Language AI for All</p>
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

              <!-- Body content -->
              <tr>
                <td style="padding: 36px 40px 20px 40px;">
                  <p style="margin: 0 0 20px 0; font-size: 16px; color: #1a1a2e; line-height: 24px; font-family: 'Segoe UI', Arial, sans-serif;">Hi ${escapeHtml(displayName)},</p>

                  <p style="margin: 0 0 18px 0; font-size: 15px; color: #333344; line-height: 26px; font-family: 'Segoe UI', Arial, sans-serif;">Thank you for showing interest in <strong style="color: #1e3a5f;">AI4Inclusion</strong>.</p>

                  <p style="margin: 0 0 18px 0; font-size: 15px; color: #333344; line-height: 26px; font-family: 'Segoe UI', Arial, sans-serif;">We've received your details and truly appreciate your interest in our mission to build Inclusive, Policy-Governed Language AI as Digital Public Good at Population Scale.</p>

                  <p style="margin: 0 0 18px 0; font-size: 15px; color: #333344; line-height: 26px; font-family: 'Segoe UI', Arial, sans-serif;">Our team will get in touch with you shortly regarding your query or comment, along with relevant next steps based on your area of interest.</p>

                  <p style="margin: 0 0 18px 0; font-size: 15px; color: #333344; line-height: 26px; font-family: 'Segoe UI', Arial, sans-serif;">In the meantime, if you have any questions or would like to share additional information, feel free to reply to this email.</p>

                  <p style="margin: 0 0 24px 0; font-size: 15px; color: #333344; line-height: 26px; font-family: 'Segoe UI', Arial, sans-serif;">We look forward to connecting with you.</p>
                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="padding: 0 40px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="border-top: 1px solid #e8ecf1; font-size: 0; line-height: 0; height: 1px;">&nbsp;</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Signature -->
              <tr>
                <td style="padding: 24px 40px 32px 40px;">
                  <p style="margin: 0 0 4px 0; font-size: 15px; color: #333344; font-family: 'Segoe UI', Arial, sans-serif;">Warm regards,</p>
                  <p style="margin: 0 0 12px 0; font-size: 15px; font-weight: 600; color: #1e3a5f; font-family: 'Segoe UI', Arial, sans-serif;">AI4I Team</p>
                  <p style="margin: 0; font-size: 13px; line-height: 24px; font-family: 'Segoe UI', Arial, sans-serif;">
                    <a href="https://ai4inclusion.org/" style="color: #1e3a5f; text-decoration: none;">ai4inclusion.org</a><br/>
                    <a href="mailto:info@ai4inclusion.org" style="color: #1e3a5f; text-decoration: none;">info@ai4inclusion.org</a>
                  </p>
                </td>
              </tr>

              <!-- Bottom footer -->
              <tr>
                <td style="background-color: #f8f9fb; padding: 16px 40px; text-align: center; border-top: 1px solid #e8ecf1;">
                  <p style="margin: 0; font-size: 11px; color: #9ca3af; line-height: 18px; font-family: 'Segoe UI', Arial, sans-serif;">AI4Inclusion &#8212; A Digital Public Good Initiative</p>
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
      auth: {
        user: smtp.smtpUser,
        pass: smtp.smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"AI4Inclusion Team" <${fromEmail}>`,
      to: email,
      subject: "Thank you for reaching out to AI4Inclusion Team",
      text: plainText,
      html: htmlBody,
      headers: {
        'X-Mailer': 'AI4Inclusion Mailer',
        'X-Priority': '3',
        'Precedence': 'bulk',
      },
    });

    console.log('Confirmation email sent successfully');
    return { success: true };
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    return { success: false, error: error.message };
  }
}

async function sendAdminNotificationEmail(
  name: string,
  email: string,
  organization: string,
  message: string,
  submittedAt: string
): Promise<{ success: boolean; error?: string }> {
  const smtp = getSmtpTransporter();
  const fromEmail = Deno.env.get('FROM_EMAIL');
  const adminEmail = 'info@ai4inclusion.org';

  if (!smtp || !fromEmail) {
    console.error('Email configuration missing for admin notification');
    return { success: false, error: 'Email configuration incomplete' };
  }

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <h2 style="color: #1e40af; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 10px 12px; font-weight: bold; color: #374151; width: 160px; vertical-align: top;">Name</td>
          <td style="padding: 10px 12px; color: #111827;">${escapeHtml(name || 'Not provided')}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
          <td style="padding: 10px 12px; font-weight: bold; color: #374151; vertical-align: top;">Email</td>
          <td style="padding: 10px 12px; color: #111827;"><a href="mailto:${escapeHtml(email)}" style="color: #2563eb;">${escapeHtml(email)}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 10px 12px; font-weight: bold; color: #374151; vertical-align: top;">Organization</td>
          <td style="padding: 10px 12px; color: #111827;">${escapeHtml(organization || 'Not provided')}</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background-color: #f9fafb;">
          <td style="padding: 10px 12px; font-weight: bold; color: #374151; vertical-align: top;">Message / Query</td>
          <td style="padding: 10px 12px; color: #111827; white-space: pre-wrap;">${escapeHtml(message || 'Not provided')}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: bold; color: #374151; vertical-align: top;">Submitted At</td>
          <td style="padding: 10px 12px; color: #6b7280; font-size: 13px;">${new Date(submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td>
        </tr>
      </table>
      <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">This is an automated notification from the AI4Inclusion website contact form.</p>
    </div>
  `;

  try {
    const nodemailer = (await import("npm:nodemailer@6.9.12")).default;

    const transporter = nodemailer.createTransport({
      host: smtp.smtpHost,
      port: parseInt(smtp.smtpPort, 10),
      secure: parseInt(smtp.smtpPort, 10) === 465,
      auth: {
        user: smtp.smtpUser,
        pass: smtp.smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"AI4Inclusion Team" <${fromEmail}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New Contact Form: ${escapeHtml(name || 'Anonymous')}`,
      html: htmlBody,
    });

    console.log('Admin notification email sent successfully');
    return { success: true };
  } catch (error) {
    console.error('Failed to send admin notification email:', error);
    return { success: false, error: error.message };
  }
}

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

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
    const { name, email, organization, specific_question } = body;

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

    const trimmedName = (name || '').trim();
    const trimmedOrg = (organization || '').trim();
    const trimmedMessage = (specific_question || '').trim();

    if (trimmedName.length > 100) {
      return new Response(
        JSON.stringify({ error: 'Name must be less than 100 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    if (trimmedOrg.length > 200) {
      return new Response(
        JSON.stringify({ error: 'Organization name must be less than 200 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    if (trimmedMessage.length > 2000) {
      return new Response(
        JSON.stringify({ error: 'Message must be less than 2000 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (isRateLimited(trimmedEmail)) {
      console.warn(`Rate limit exceeded for: ${maskEmail(trimmedEmail)}`);
      return new Response(
        JSON.stringify({ error: 'Too many submissions. Please try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('Saving submission to database:', { email: maskEmail(trimmedEmail), hasName: !!trimmedName, hasOrg: !!trimmedOrg });

    const { data: insertedRecord, error: dbError } = await supabase
      .from('get_in_touch_requests')
      .insert({
        name: trimmedName || null,
        email: trimmedEmail,
        organization_name: trimmedOrg || null,
        message: trimmedMessage || null,
        source: 'get_in_touch',
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

    console.log('Submission saved successfully, ID:', insertedRecord?.id);

    const [emailResult, adminResult] = await Promise.all([
      sendConfirmationEmail(trimmedName, trimmedEmail),
      sendAdminNotificationEmail(
        trimmedName,
        trimmedEmail,
        trimmedOrg,
        trimmedMessage,
        insertedRecord?.submitted_at || new Date().toISOString()
      ),
    ]);

    if (!adminResult.success) {
      console.error('Admin notification email failed:', adminResult.error);
    }

    if (!emailResult.success) {
      console.error('Email sending failed but submission was saved:', emailResult.error);
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Your submission has been received. There was an issue sending the confirmation email, but our team will get back to you soon.',
          email_sent: false,
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Full submission flow completed successfully');

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for getting in touch. We\'ve sent a confirmation email to your email address.',
        email_sent: true,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in submit-form function:', error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
