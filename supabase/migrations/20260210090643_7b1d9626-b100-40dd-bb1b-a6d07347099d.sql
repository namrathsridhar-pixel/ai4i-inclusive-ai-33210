
-- Create table for VoicERA interest leads
CREATE TABLE public.voicera_interest_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT,
  email TEXT NOT NULL,
  organization_name TEXT,
  use_case TEXT,
  source TEXT NOT NULL DEFAULT 'VoicERA Website',
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.voicera_interest_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form)
CREATE POLICY "Allow anonymous inserts"
ON public.voicera_interest_leads
FOR INSERT
WITH CHECK (true);

-- Deny all reads
CREATE POLICY "Deny all reads"
ON public.voicera_interest_leads
FOR SELECT
USING (false);

-- Deny all updates
CREATE POLICY "Deny all updates"
ON public.voicera_interest_leads
FOR UPDATE
USING (false);

-- Deny all deletes
CREATE POLICY "Deny all deletes"
ON public.voicera_interest_leads
FOR DELETE
USING (false);
