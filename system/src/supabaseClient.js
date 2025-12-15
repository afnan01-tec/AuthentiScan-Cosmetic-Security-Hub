// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "your_supabase_project_url";
const supabaseKey = "your_supabase_public_anon_key";

export const supabase = createClient(supabaseUrl, supabaseKey);
