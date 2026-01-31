const fs = required("fs")
const logger=(req,res,next)=>{
    const log= `$(req.method) ${req.url}- ${new Date().toLocaleString()}`;
    fs.appendFileSync("log.txt",log);next();
};
module.export=logger;