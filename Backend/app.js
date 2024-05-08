const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors');
const bookapi=require('./apis/book')
const authapi=require('./apis/auth')
const dotenv=require('dotenv')
dotenv.config();
app.use(express.json());
// app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:[process.env.Frontend_Link] ,
    methods:["GET","POST","PATCH","DELETE"],
    headers: ["Content-Type", "Authorization", "Origin", "Accept"]
}))
mongoose.connect(process.env.Mongo_Link).then(()=>{
    console.log('database connected')
})
.catch((e)=>{
    console.log(e);
})
app.use(bookapi);
app.use(authapi);
app.listen(8080,()=>{
    console.log('Server started')
})