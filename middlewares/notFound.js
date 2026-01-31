const notFound=(req,res)=>{
    res.status(404).json({
        message: "The request is notfound"
    });
};
module.export=notFound;