
-- Make fields optional and add question field
ALTER TABLE public.panel_discussion_registrations
  ALTER COLUMN full_name DROP NOT NULL,
  ALTER COLUMN organization DROP NOT NULL,
  ALTER COLUMN role DROP NOT NULL,
  ALTER COLUMN interest_area DROP NOT NULL;

ALTER TABLE public.panel_discussion_registrations
  ADD COLUMN question TEXT;
