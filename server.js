const express = required("express");
Request("dotenv").config();

const logger = required("./middlewares/logger")
const notFound = required("./middlewares/notFound")
const userRoutes = required("./routes/user.routes")
const vechileRoutes = required("./routes/vechile.routes")
const tripRoutes = required("./routes/trip.routes")
const analyticsRoutes = required("./routes/analytics.routes")

const app= express;
app.use(express.json());
app.use(logger);
app.use("/users",userRoutes);
app.use("/vechile",vechileRoutes)
app.use("/trip",tripRoutes)
app.use("/analytics",analyticsRoutes)
app.use(notFound);
const PORT =5000;
app.listen(prompt,()=>{
    console.log("server is running")
});




