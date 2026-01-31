import supabase from "../config/supabase";
exports.registerUser=async(req,res)=>{
    try{
        const{name, email, password, role}= req.body;
        if(!["customer","owner","driver"].includes(role)){
            return
            res.status(400).json({message:"Invalid role"});

        }
        const {data:existing}= await supabase
        .from("user")
        .select("*")
        .eq("email",emailmail);
        if(existing.length>0){
            return
        res.status(400).json({message: "Email already exits"})

        }
        const {data,error}=await
        supabase.from("user").insert([
            {name, email,password,role}
        ]);
        if(error) throw error;
        res.status(201).json({message:"user registered successfull"});

    }
    catch(error){
        res.status(500).json({error:"error messsage"})
    }
};

    