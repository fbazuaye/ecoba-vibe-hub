-- Create livestream_views table for tracking page visits with location data
CREATE TABLE public.livestream_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  country TEXT,
  region TEXT,
  city TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.livestream_views ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert views (public livestream page)
CREATE POLICY "Anyone can record views"
ON public.livestream_views
FOR INSERT
WITH CHECK (true);

-- Allow anyone to read view statistics
CREATE POLICY "Anyone can view statistics"
ON public.livestream_views
FOR SELECT
USING (true);

-- Create index for faster queries
CREATE INDEX idx_livestream_views_session ON public.livestream_views(session_id);
CREATE INDEX idx_livestream_views_country ON public.livestream_views(country);
CREATE INDEX idx_livestream_views_created ON public.livestream_views(created_at DESC);