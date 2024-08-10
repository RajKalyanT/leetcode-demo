import { createBrowserClient } from "@supabase/ssr";

const createClient = () =>
  createBrowserClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
  );

export default createClient;