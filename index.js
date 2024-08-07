import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import axios from "axios";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", async(req,res)=>{
  try{
    const response= await axios.get("https://bored-api.appbrewery.com/random");
    console.log("response",response.data);
    let data=response.data;
    res.render("index.ejs", {activities : data});
  }catch(error){
    console.error("Error : ",error.message);
    res.render("index.ejs",{error : "Too many requests, please try again later."})
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  const type=req.body.type;
  const participants=req.body.participants;
  try{
    const response= await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
    console.log(response.data);
    let data=response.data;
    res.render("index.ejs",{activities : data[Math.floor(Math.random() * data.length)]})
  }catch(error){
    console.error("Error : ",error.message);
    res.render("index.ejs",{error : "No activities that match your criteria."})
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
