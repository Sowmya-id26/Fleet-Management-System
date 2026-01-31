const { createClient }=
require("@supabase/supabase.js");
require("dotenv").config();
const supabase=createClient(
    process.env.url,
    process.env.key
);
module.exports=supabase;