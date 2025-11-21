-- Drop the existing public SELECT policy
DROP POLICY IF EXISTS "Anyone can view attendees" ON public.attendees;

-- Create a new policy that only allows authenticated users to view attendees
CREATE POLICY "Authenticated users can view attendees"
ON public.attendees
FOR SELECT
TO authenticated
USING (true);

-- Keep the public INSERT policy for registration
-- (Already exists: "Anyone can register attendance")