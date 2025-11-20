-- Create attendees table for registration
CREATE TABLE public.attendees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  class_set text NOT NULL,
  branch text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  attendance_type text NOT NULL CHECK (attendance_type IN ('Voting Delegate', 'Observer')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.attendees ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public registration)
CREATE POLICY "Anyone can register attendance"
  ON public.attendees
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to read (for delegates directory)
CREATE POLICY "Anyone can view attendees"
  ON public.attendees
  FOR SELECT
  USING (true);