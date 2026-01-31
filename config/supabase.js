const { createClient }=
require("@supabase/supabase.js");
require("dotenv").config();
const supabase=createClient(
    process.env.https://zdcgpbllrahdzreciykc.supabase.co,
    process.env.sb_publishable_JJCx-rrhFnZcc78MtJzhDw_jMCVneqF
);
module.exports=supabase;