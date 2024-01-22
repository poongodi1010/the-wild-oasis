import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nuqfdupklkxdsmznganw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51cWZkdXBrbGt4ZHNtem5nYW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyMTA4ODgsImV4cCI6MjAxOTc4Njg4OH0.SJCH9dL1bFPkX5kJp2APhSgJNSaL_XDJnXQQodmiwJA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
