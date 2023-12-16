const myModule = require('./index.js');

const app = myModule.main;


const lodash = require('lodash');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('strictQuery', true);
var db = require(__dirname + "/db/connection.js");
var userschema = require(__dirname + '/db/userdb.js');





const uri = "mongodb://127.0.0.1:27017/surreal";
database().catch(err => console.log(err));



async function database() {
    await mongoose.connect(uri);
    // await mongoose.connect('mongodb://127.0.0.1:27017/gitportalDB');
  }





  function appDb(){
    userschema.plugin(uniqueValidator);
    const Userdb = mongoose.model("User",userschema);
      return Userdb;
  }

 



// Initializing app object


app.use(bodyParser.urlencoded({extended: true}));
//setting Plugins for app 

//setting Plugins for app 

function addWeeks(date1, weeks) {
  date1.setDate(date1.getDate() + 7 * 3);
  return date1;
}

function addMonth(date1, months) {
  date1.setMonth(date1.getMonth() + months);
  return date1;
}




app.get("/testme",(req,res)=>{



  // May 20, 2022
  const date = new Date('2022-12-20');
  const newDate = addWeeks(date, 3);
  console.log(newDate);
  // June 10, 2022
  console.log(newDate.toLocaleDateString('en-us', { weekday:"long", 
  year:"numeric", month:"short", day:"numeric"}));

  // console.log(newDate);
  // console.log(newDate.getMonth() + 1 + 3);
  const mm = addMonth(newDate, 3);
  console.log(mm.toLocaleDateString('en-us', { weekday:"long", 
  year:"numeric", month:"short", day:"numeric"}));

})













// module.exports = {
//     main:app,
    
//   }