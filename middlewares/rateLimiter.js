const requestMap={};
const rateLimited =(req,res,next)=>{
    const ip =req.ip;
    const currentTime=Date.now();

    if (!requestMap[ip]){
        requestMap[ip]=[]
    }
    requestMap[ip]=requestMap[ip].filter(
        time=>currentTime-time<5
    );
    if (requestMap[ip].length>=3){
        return res.status(429).json({
            message:"Two Many Request. Try Again"

        })
        
    }
    requestMap[ip].push(currentTime);
    next;

}
module.export=rateLimited;