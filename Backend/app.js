const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors');
const bookapi=require('./apis/book')
const authapi=require('./apis/auth')
app.use(express.json());
// app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:['http://localhost:5173'] ,
    methods:["GET","POST","PATCH","DELETE"],
    headers: ["Content-Type", "Authorization", "Origin", "Accept"]
}))
mongoose.connect('mongodb+srv://developerking692:BookBound@cluster0.ibohb09.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
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