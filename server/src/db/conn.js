const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://deepak_bairwa:Deep%40k102001@cluster0.5ohh0.mongodb.net/studentData').then(()=>{
    console.log('db conected');
}
).catch((e)=>{
    console.log(e);
})