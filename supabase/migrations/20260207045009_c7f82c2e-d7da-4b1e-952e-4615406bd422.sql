
-- Add explicit deny policies for SELECT, UPDATE, DELETE on get_in_touch_requests
-- This ensures contact form submissions (PII) are never readable/modifiable from the client

CREATE POLICY "Deny all reads"
ON public.get_in_touch_requests
FOR SELECT
USING (false);

CREATE POLICY "Deny all updates"
ON public.get_in_touch_requests
FOR UPDATE
USING (false);

CREATE POLICY "Deny all deletes"
ON public.get_in_touch_requests
FOR DELETE
USING (false);
