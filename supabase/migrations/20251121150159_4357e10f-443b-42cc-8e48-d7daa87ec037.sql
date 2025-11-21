-- Add unique constraint on email to prevent duplicate registrations
ALTER TABLE public.attendees
ADD CONSTRAINT attendees_email_unique UNIQUE (email);

-- Add check constraints for data validation
ALTER TABLE public.attendees
ADD CONSTRAINT attendees_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

ALTER TABLE public.attendees
ADD CONSTRAINT attendees_phone_format CHECK (phone ~* '^\+?[0-9\s\-\(\)]{10,20}$');

ALTER TABLE public.attendees
ADD CONSTRAINT attendees_name_length CHECK (length(trim(name)) >= 3 AND length(name) <= 100);

ALTER TABLE public.attendees
ADD CONSTRAINT attendees_class_set_length CHECK (length(trim(class_set)) >= 4 AND length(class_set) <= 50);

ALTER TABLE public.attendees
ADD CONSTRAINT attendees_branch_length CHECK (length(trim(branch)) >= 3 AND length(branch) <= 100);