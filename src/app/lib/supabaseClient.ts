import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://aasmttsibsovngwdtyqe.supabase.co"; // Replace with your Supabase project URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhc210dHNpYnNvdm5nd2R0eXFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MDMzNTcsImV4cCI6MjA1ODA3OTM1N30.mHzdNIVWawLZX__jGvjH0tlHTftALoyDxI7nFmrOU6Y"; // Replace with your Supabase anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

