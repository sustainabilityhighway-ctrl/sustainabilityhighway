import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase URL or Anon Key is missing. Database features will not work.');
}

const isValidUrl = (url: string | undefined) => {
    if (!url) return false;
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

const finalSupabaseUrl = isValidUrl(supabaseUrl) ? supabaseUrl : 'https://xohrvqoftgiugocrhfnr.supabase.co';
const finalSupabaseKey = supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvaHJ2cW9mdGdpdWdvY3JoZm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3NDgxNTgsImV4cCI6MjA4NDMyNDE1OH0.BilKFzk-ySSbtWuWGrXJ0cMPQ3FwcR-s40V3P0Vd9iA';

// Fallback to prevent crash if keys are missing
export const supabase = createClient(
    finalSupabaseUrl as string,
    finalSupabaseKey
);
