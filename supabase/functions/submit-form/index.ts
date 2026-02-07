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

async function sendConfirmationEmail(name: string, email: string): Promise<{ success: boolean; error?: string }> {
  const smtpHost = Deno.env.get('SMTP_HOST');
  const smtpPort = Deno.env.get('SMTP_PORT') || '587';
  const smtpUser = Deno.env.get('SMTP_USER');
  const smtpPass = Deno.env.get('SMTP_PASS');
  const fromEmail = Deno.env.get('FROM_EMAIL');

  if (!smtpHost || !smtpUser || !smtpPass || !fromEmail) {
    console.error('Email configuration missing. Required: SMTP_HOST, SMTP_USER, SMTP_PASS, FROM_EMAIL');
    return { success: false, error: 'Email configuration incomplete' };
  }

  const displayName = name?.trim() || 'there';

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <p>Hi ${displayName},</p>
      <p>Thank you for showing interest in <strong>AI4Inclusion</strong>.</p>
      <p>We've received your details and truly appreciate your interest in our mission to build India-first, inclusive language AI infrastructure that enables governance, public services, and citizen-scale impact.</p>
      <p>Our team will review your submission and get in touch with you shortly regarding next steps or relevant updates based on your area of interest.</p>
      <p>In the meantime, if you have any questions or would like to share additional information, feel free to reply to this email.</p>
      <p>We look forward to connecting with you.</p>
      <br/>
      <p>Warm regards,<br/><strong>AI4I Team</strong><br/>
      <a href="https://ai4inclusion.org/" style="color: #2563eb;">https://ai4inclusion.org/</a><br/>
      <a href="mailto:info@ai4inclusion.org" style="color: #2563eb;">info@ai4inclusion.org</a></p>
    </div>
  `;

  try {
    const nodemailer = (await import("npm:nodemailer@6.9.12")).default;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"AI4I Team" <${fromEmail}>`,
      to: email,
      subject: "Thank you for reaching out to AI4Inclusion",
      html: htmlBody,
    });

    console.log(`Confirmation email sent successfully to ${email}`);
    return { success: true };
  } catch (error) {
    console.error(`Failed to send email to ${email}:`, error);
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

    // Send confirmation email (after successful DB save)
    const emailResult = await sendConfirmationEmail(trimmedName, trimmedEmail);

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
