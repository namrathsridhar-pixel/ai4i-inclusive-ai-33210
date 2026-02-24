
-- Create table for AI4I website inquiries from the chatbot
CREATE TABLE public.ai4i_website_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  organization TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  category TEXT NOT NULL,
  message TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'AI4I Website Assistant',
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.ai4i_website_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (chatbot submissions)
CREATE POLICY "Allow anonymous inserts"
ON public.ai4i_website_inquiries
FOR INSERT
WITH CHECK (true);

-- Deny reads
CREATE POLICY "Deny all reads"
ON public.ai4i_website_inquiries
FOR SELECT
USING (false);

-- Deny updates
CREATE POLICY "Deny all updates"
ON public.ai4i_website_inquiries
FOR UPDATE
USING (false);

-- Deny deletes
CREATE POLICY "Deny all deletes"
ON public.ai4i_website_inquiries
FOR DELETE
USING (false);
