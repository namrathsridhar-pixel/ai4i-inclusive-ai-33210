
-- Create table for panel discussion registrations
CREATE TABLE public.panel_discussion_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT NOT NULL,
  role TEXT NOT NULL,
  interest_area TEXT NOT NULL,
  opt_in_updates BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.panel_discussion_registrations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public registration form)
CREATE POLICY "Allow anonymous inserts"
ON public.panel_discussion_registrations
FOR INSERT
WITH CHECK (true);

-- Deny all reads (protect PII)
CREATE POLICY "Deny all reads"
ON public.panel_discussion_registrations
FOR SELECT
USING (false);

-- Deny all updates
CREATE POLICY "Deny all updates"
ON public.panel_discussion_registrations
FOR UPDATE
USING (false);

-- Deny all deletes
CREATE POLICY "Deny all deletes"
ON public.panel_discussion_registrations
FOR DELETE
USING (false);
