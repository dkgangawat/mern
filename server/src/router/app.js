const express = require('express');
// const async = require('hbs/lib/async');
const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("../db/conn");
app.set('view engine', 'hbs');
const setData = require('../models/schema');
app.get('/data/:email', async (req, res) =>{
    // const sdata = await setData.find({email})
    console.log(req)
    res.send("deepak");
})
app.post('/data', async(req, res) => {
    try {
        const username = req.body.username;
        const pass = req.body.pass;
        const email= req.body.email;
        const datas = setData({
            email,
            username,   
            pass
        })
        const datasen = await datas.save()
        console.log(datasen);
        res.status(200).send();
    } catch (err) {
        res.status(404).send()
        console.log(err)
    }

})
app.post('/login',async (req,res)=>{
    try{
        const email = req.body.email
    const pass = req.body.pass
    const rdata = await setData.findOne({email});
    console.log(pass)
    console.log(rdata.pass)
    console.log(rdata)
    if(rdata.pass==pass){
        res.status(200).send("logged in successful")
    }
    else{
        res.status(404).send("password is incorrect")
        console.log("password is incorrect")
    }
    }catch(err){
       console.log(err)
    }
    
})

app.get("/", async(req,res)=>{
  const ren = await setData.findOne({email:"bairwaek@gamil.com"})
    res.render('index',{ren});
})
 
app.listen(port);