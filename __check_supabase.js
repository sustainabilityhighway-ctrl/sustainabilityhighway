import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://wwsktlepebphvzeafhsx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3c2t0bGVwZWJwaHZ6ZWFmaHN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2OTI2MzgsImV4cCI6MjA4NTI2ODYzOH0.6dCZ6AsjnlhC2ye5ZLyIrxwrDSeAIK3OvgBDR-uoF6c"
);
(async () => {
  const { data, error } = await supabase.from("Blog").select("id, title, slug, meta_title, updated_at").eq("slug", "leed-certification-saudi-arabia-complete-guide");
  console.log("error", JSON.stringify(error));
  console.log("data", JSON.stringify(data, null, 2));
})();
