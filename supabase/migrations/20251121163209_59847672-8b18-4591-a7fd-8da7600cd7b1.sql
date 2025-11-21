-- Drop the existing authenticated-only policy
DROP POLICY IF EXISTS "Authenticated users can view attendees" ON public.attendees;

-- Create a new policy that allows anyone to view attendees
CREATE POLICY "Anyone can view attendees"
ON public.attendees
FOR SELECT
USING (true);