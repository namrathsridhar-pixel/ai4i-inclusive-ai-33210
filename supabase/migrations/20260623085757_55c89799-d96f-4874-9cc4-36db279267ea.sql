
-- ai4i_website_inquiries
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.ai4i_website_inquiries;
CREATE POLICY "Allow anonymous inserts" ON public.ai4i_website_inquiries
FOR INSERT TO anon, authenticated
WITH CHECK (
  email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(email) <= 254
  AND char_length(name) BETWEEN 1 AND 200
  AND char_length(organization) BETWEEN 1 AND 200
  AND char_length(country) BETWEEN 1 AND 100
  AND char_length(category) BETWEEN 1 AND 100
  AND char_length(message) BETWEEN 1 AND 5000
);

-- get_in_touch_requests
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.get_in_touch_requests;
CREATE POLICY "Allow anonymous inserts" ON public.get_in_touch_requests
FOR INSERT TO anon, authenticated
WITH CHECK (
  email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(email) <= 254
  AND (name IS NULL OR char_length(name) <= 200)
  AND (organization_name IS NULL OR char_length(organization_name) <= 200)
  AND (message IS NULL OR char_length(message) <= 5000)
);

-- panel_discussion_registrations
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.panel_discussion_registrations;
CREATE POLICY "Allow anonymous inserts" ON public.panel_discussion_registrations
FOR INSERT TO anon, authenticated
WITH CHECK (
  email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(email) <= 254
  AND (full_name IS NULL OR char_length(full_name) <= 200)
  AND (organization IS NULL OR char_length(organization) <= 200)
  AND (role IS NULL OR char_length(role) <= 200)
  AND (interest_area IS NULL OR char_length(interest_area) <= 200)
  AND (question IS NULL OR char_length(question) <= 2000)
);

-- voicera_interest_leads
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.voicera_interest_leads;
CREATE POLICY "Allow anonymous inserts" ON public.voicera_interest_leads
FOR INSERT TO anon, authenticated
WITH CHECK (
  email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(email) <= 254
  AND (full_name IS NULL OR char_length(full_name) <= 200)
  AND (organization_name IS NULL OR char_length(organization_name) <= 200)
  AND (use_case IS NULL OR char_length(use_case) <= 2000)
);
