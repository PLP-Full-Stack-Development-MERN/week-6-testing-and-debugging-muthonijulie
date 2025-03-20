require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const port=process.env.PORT||3000
const app=express();
app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
    console.error("Error Middleware:", err.message);
    res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.use('/test',require(`./routes/bugRoutes`));


if (process.env.NODE_ENV !=='test'){
    app.listen(port,()=>console.log(`PLP Server is running via http://localhost:${port}`));

}
module.exports=app;