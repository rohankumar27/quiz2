const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express')
const app = express();
const port =  7000;

app.use(cors());
app.use(express.json());
const uri = "mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exam";
// const uri="mongodb+srv://rkkumar0115:123@cluster0.6ngzwqy.mongodb.net/test"
// const uri="mongodb+srv://rkkumar0115:rkkumar0115@cluster0.6ngzwqy.mongodb.net/test"
// const uri="mongodb+srv://rkkumar0115:rkkumar0115@cluster0.6ngzwqy.mongodb.net/test";

mongoose.connect(uri, {useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology:true
});


// Create a Schema object
const activitySchema = new mongoose.Schema({
    name: String,
    sId:String
   });

   
// This Activitry creates the collection called activitimodels
const newUser = mongoose.model('quizes', activitySchema);

const task1 = new newUser({
name: 'Rohan kumar',
sId: '300346126'
});


const connection = mongoose.connection;
connection.once('open',() => {
    console.log("Connection established successfully")
})



app.get('/', async(req, res) => {

    try{
        let myUser = await task1.save();
        res.send(myUser);
    }catch(e){
        console.error(e)
        res.status(500).send("Error")
    }
    })
    
    app.listen(port, () => {
    console.log("Server is running on port:" + port);
    });