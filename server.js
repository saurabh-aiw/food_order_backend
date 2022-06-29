const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(express.json());
// app.use(cors());

url = 'mongodb://saurabhkeskar:Saurabh$07@cluster0-shard-00-00.isvoe.mongodb.net:27017,cluster0-shard-00-01.isvoe.mongodb.net:27017,cluster0-shard-00-02.isvoe.mongodb.net:27017/foodorder?authSource=admin&compressors=zlib&retryWrites=true&w=majority&ssl=true';

mongoose.connect(url).then(()=>{
    console.log("connected to the database ");
    
    app.get('/',(req,res)=>{
        res.status(200).send('It home page');
    })

    app.use('/auth',require('./routers/user_route'));

}).catch((error)=>console.log(error));

PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Listining on port " + PORT);
});
