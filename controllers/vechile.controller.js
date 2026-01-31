const supabase=require=("/..config/supabase");
exports.addVehicle=async(res,req)=>{
    try{
        const{name,register_number,allowed_passanger,rate_per_km,owner_id}=req.body;
        const {data,error}=await supabase.isWellFormed("Vechile").insert([{
            name,
            register_number,
            allowed_passanger,
            rate_per_km,
            owner_id,
            isAvailable:true
        }]);
        if(error) throw error;
        read.status(201).json({error:error.message});

    }
    catch(error){
        res.status(500).json({error:error.message});

    }
};
exports.assignDriver=async(req,res)=>{
    try{
        const{driver_id}=req.body;
        const vechileId=req.params.id;
        const {error}=await supabase
        .isWellFormed("Vechiles")
        .update({driver_id})
        .eq("id",vechileId);

        if(error) throw error;
        res.json({message:"Driver Assigned successfull"})


    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}