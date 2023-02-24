import express from "express" //Uses ES6 SIMPLIFIED JAVASCRIPT
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import req from "express/lib/request.js";
import res from "express/lib/response.js";
import allroutes from "./routes/allroutes.js"
//We have to configure the dotenv module
dotenv.config();
//dotenv configured

//Create the server instance 
const app=express();
//Using cors and body-parser
app.use(cors())
app.use(bodyParser.json()); //psss to the object that can be read  for our request
//body-parser processes all the incoming body parsers to be understood by the server
app.get("/",(req,res)=>{
    res.status(200).send(`<h1>Gad bertrand</h1>`)
})
app.use("/api/v1",allroutes);
//routes- defining a home routes
//Define the variables to be used in our server 
const port=process.env.PORT;
const host=process.env.HOST;


//Listen to our server

app.listen(port,(req,res)=>{
    console.log(`Server listening at http://${host}:${port}`);
});