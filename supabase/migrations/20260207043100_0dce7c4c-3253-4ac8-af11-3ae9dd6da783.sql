
-- Create the get_in_touch_requests table
CREATE TABLE public.get_in_touch_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT NOT NULL,
  organization_name TEXT,
  message TEXT,
  source TEXT NOT NULL DEFAULT 'get_in_touch',
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.get_in_touch_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form, no auth required)
CREATE POLICY "Allow anonymous inserts"
ON public.get_in_touch_requests
FOR INSERT
TO anon
WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies for anon - data is write-only from the frontend
-- Service role (used by edge functions) bypasses RLS and can read/write freely

-- Create index on email for rate limiting queries
CREATE INDEX idx_get_in_touch_email ON public.get_in_touch_requests (email, submitted_at DESC);

-- Create index on submitted_at for monitoring/debugging
CREATE INDEX idx_get_in_touch_submitted_at ON public.get_in_touch_requests (submitted_at DESC);
