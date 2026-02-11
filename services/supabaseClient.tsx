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

const finalSupabaseUrl = isValidUrl(supabaseUrl) ? supabaseUrl : 'https://wwsktlepebphvzeafhsx.supabase.co';
const finalSupabaseKey = supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3c2t0bGVwZWJwaHZ6ZWFmaHN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2OTI2MzgsImV4cCI6MjA4NTI2ODYzOH0.6dCZ6AsjnlhC2ye5ZLyIrxwrDSeAIK3OvgBDR-uoF6c';

// Fallback to prevent crash if keys are missing
export const supabase = createClient(
    finalSupabaseUrl as string,
    finalSupabaseKey
);
