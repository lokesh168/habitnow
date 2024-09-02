import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hfuexomyohlcompsfygi.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmdWV4b215b2hsY29tcHNmeWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyNjI4MDgsImV4cCI6MjAyMTgzODgwOH0.RrXiEM0CVJzm3M9cP8fgA5UX9i0AAJK21I_w5sgMM0M';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// $WQ3gVq2xbmgi-k
