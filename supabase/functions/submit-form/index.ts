import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

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
    console.error('Email configuration missing. Required: SMTP_HOST, SMTP_USER, SMTP_PASS, FROM_EMAIL');
    return { success: false, error: 'Email configuration incomplete' };
  }

  const displayName = name?.trim() || 'there';

  const htmlBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f6f9; font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f6f9; padding: 32px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
              
              <!-- Header with branding -->
              <tr>
                <td style="background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%); padding: 32px 40px; text-align: center;">
                  <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px;">AI4Inclusion</h1>
                  <p style="margin: 6px 0 0 0; font-size: 12px; color: rgba(255,255,255,0.6); letter-spacing: 1.5px; text-transform: uppercase;">Inclusive Language AI for All</p>
                </td>
              </tr>

              <!-- Subtle accent bar -->
              <tr>
                <td style="height: 3px; background: linear-gradient(90deg, #1e3a5f 0%, #e87722 50%, #138808 100%);"></td>
              </tr>

              <!-- Body content -->
              <tr>
                <td style="padding: 36px 40px 20px 40px;">
                  <p style="margin: 0 0 20px 0; font-size: 16px; color: #1a1a2e; line-height: 1.6;">Hi ${displayName},</p>

                  <p style="margin: 0 0 18px 0; font-size: 15px; color: #333344; line-height: 1.7;">Thank you for showing interest in <strong style="color: #1e3a5f;">AI4Inclusion</strong>.</p>

                  <p style="margin: 0 0 18px 0; font-size: 15px; color: #333344; line-height: 1.7;">We've received your details and truly appreciate your interest in our mission to build inclusive language AI infrastructure that enables governance, public services, and citizen-scale impact.</p>

                  <p style="margin: 0 0 18px 0; font-size: 15px; color: #333344; line-height: 1.7;">Our team will get in touch with you shortly regarding your query or comment, along with relevant next steps based on your area of interest.</p>

                  <p style="margin: 0 0 18px 0; font-size: 15px; color: #333344; line-height: 1.7;">In the meantime, if you have any questions or would like to share additional information, feel free to reply to this email.</p>

                  <p style="margin: 0 0 24px 0; font-size: 15px; color: #333344; line-height: 1.7;">We look forward to connecting with you.</p>
                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="padding: 0 40px;">
                  <hr style="border: none; border-top: 1px solid #e8ecf1; margin: 0;" />
                </td>
              </tr>

              <!-- Signature / Footer -->
              <tr>
                <td style="padding: 24px 40px 32px 40px;">
                  <p style="margin: 0 0 4px 0; font-size: 15px; color: #333344;">Warm regards,</p>
                  <p style="margin: 0 0 12px 0; font-size: 15px; font-weight: 600; color: #1e3a5f;">AI4I Team</p>
                  <p style="margin: 0; font-size: 13px; line-height: 1.8;">
                    <a href="https://ai4inclusion.org/" style="color: #1e3a5f; text-decoration: none;">ai4inclusion.org</a><br/>
                    <a href="mailto:info@ai4inclusion.org" style="color: #1e3a5f; text-decoration: none;">info@ai4inclusion.org</a>
                  </p>
                </td>
              </tr>

              <!-- Bottom footer -->
              <tr>
                <td style="background-color: #f8f9fb; padding: 16px 40px; text-align: center; border-top: 1px solid #e8ecf1;">
                  <p style="margin: 0; font-size: 11px; color: #9ca3af; line-height: 1.6;">AI4Inclusion — A Digital Public Good Initiative</p>
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
      from: `"AI4I Team" <${fromEmail}>`,
      to: email,
      subject: "Thank you for reaching out to AI4Inclusion Team",
      html: htmlBody,
    });

    console.log(`Confirmation email sent successfully to ${email}`);
    return { success: true };
  } catch (error) {
    console.error(`Failed to send email to ${email}:`, error);
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
          <td style="padding: 10px 12px; font-weight: bold; color: #374151; vertical-align: top;">Message / Query</td>
          <td style="padding: 10px 12px; color: #111827; white-space: pre-wrap;">${message || '<em style="color: #9ca3af;">Not provided</em>'}</td>
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
      from: `"AI4I Website" <${fromEmail}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New Contact Form: ${name || email}`,
      html: htmlBody,
    });

    console.log(`Admin notification email sent successfully to ${adminEmail}`);
    return { success: true };
  } catch (error) {
    console.error(`Failed to send admin notification email:`, error);
    return { success: false, error: error.message };
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
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

    // Validate required fields
    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim().toLowerCase();
    if (!emailRegex.test(trimmedEmail)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate field lengths
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

    // Rate limiting
    if (isRateLimited(trimmedEmail)) {
      console.warn(`Rate limit exceeded for email: ${trimmedEmail}`);
      return new Response(
        JSON.stringify({ error: 'Too many submissions. Please try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client with service role for DB access
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Save to database
    console.log('Saving submission to database:', { name: trimmedName, email: trimmedEmail, organization: trimmedOrg });

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

    // Send confirmation email to user and admin notification in parallel
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
      // Return success even if email fails — submission is saved
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Your submission has been received. There was an issue sending the confirmation email, but our team will get back to you soon.',
          email_sent: false,
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Full submission flow completed successfully for:', trimmedEmail);

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
