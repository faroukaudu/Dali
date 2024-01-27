const express = require("express");
require('dotenv').config();
const ejs = require("ejs");
const lodash = require('lodash');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('strictQuery', true);
var db = require(__dirname + "/db/connection.js");
var userschema = require(__dirname + '/db/userdb.js');
var adschema = require(__dirname + '/db/ads.js');
var locationschema = require(__dirname + '/db/locations.js');
const dates = require("./date");
const passport = require("passport");
const session = require("express-session");
const passportLocalMongoose = require("passport-local-mongoose");
require('dotenv').config();




// Initializing app object
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
//setting Plugins for app 
app.set('view engine', 'ejs');

app.use(express.static("public"));
//setting Plugins for app 


app.use(session({
  secret: process.env.SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: { 
      //Expire Session after 1min.
      maxAge: 60000000,
   }
}));

app.use(passport.initialize());
app.use(passport.session());






// const uri = "mongodb://127.0.0.1:27017/surreal";
const uri = "mongodb+srv://fadeelahfancy98com:"+process.env.DBPASSWORD+"@dali.qnwfc9y.mongodb.net/surreal";
database().catch(err => console.log(err));



async function database() {
    await mongoose.connect(uri);
    // await mongoose.connect('mongodb://127.0.0.1:27017/gitportalDB');
  }

  function appDb(){
    // userschema.plugin(uniqueValidator);
    const Admindb = mongoose.model("User",userschema);
    passport.use(Admindb.createStrategy());
  
    passport.serializeUser(function(user, cb) {
      console.log("serializing user uwuss:" + JSON.stringify(user))
      process.nextTick(function() {
        console.log(user.id);
          return cb(null, user.id)
      })
  })
  
  passport.deserializeUser(function (id, cb) {
    console.log("trying to GET" + id);
      console.log("deserializing user owo:" + JSON.stringify(id))
      Admindb.findById({_id:id}).then((user)=>{
        console.log("GETTING");
        return cb(null, user);
      }).catch((err)=>{
        return cb(err);
      });   
  });
     return Admindb;
  }



  // function appDb(){
  //   userschema.plugin(uniqueValidator);
  //   const Userdb = mongoose.model("User",userschema);
  //     return Userdb;
  // }

  function adsDb(){
    adschema.plugin(uniqueValidator);
    const Campaign = mongoose.model("Camp",adschema);
      return Campaign;
  }
  
  const User = appDb();
  const Campdb = adsDb();

  const LocationDB = mongoose.model("Location",locationschema);






app.get("/login", function(req,res){
  // var showdate  = new dates.endDate(new Date('2023-6-20'), 1, 0).toLocaleDateString('en-us', { weekday:"long", 
  // year:"numeric", month:"short", day:"numeric"});
  // console.log("shoing mana");
  // console.log(showdate);
    res.render("ui-pages/sign-in");
});

app.post("/login", (req,res)=>{
  var userLogin = new User({username:req.body.username, 
    password:req.body.password});
    req.login(userLogin, function(err){
      if (!err) {
        passport.authenticate("local", {
          failureRedirect: '/login',
          failureMessage: true
        })(req, res, function () {
          console.log(req.user);
          // res.redirect("/landing");
          User.findOne({email:req.body.username}).then((foundUser)=>{
            // if(foundUser.isAdmin ===true){
              res.redirect("/dashboard");
            // }else{
              // res.redirect("/welcome");
              // res.send("Not Logged in");
            // }
          })
        });
      } else {
        console.log(err);
      }

    })
    


});

app.get("/logout", (req,res)=>{
  req.logout(function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect("/login");
    }
  })
});




app.get("/form", async function(req,res){
  // if(req.isAuthenticated()){
    mylist = ["farouk","musa","fadila"];
    await Campdb.find({})
    .then((result) => {
      LocationDB.find({}).then((loc)=>{
        var inAddress =[];
        loc.forEach(function(locs){
          console.log(locs.address);
          var formatAddress = locs.state +" | "+locs.address+ " | 📋 "+locs.structure + " 📍" + locs.latitude +" - " +locs.longitude;
          
          inAddress.push(formatAddress)
         
          
        });
        // var newme = inAddress.splice(",");
        // console.log(newme);
        var arrjoin = inAddress.join("+");



        // console.log(loc[0]);
        res.render("form", {clients:result, user:{fullname:mylist}, location:arrjoin});
      })
      // console.log(result[0].client_camp);
      
    })
  // }else{
  //   res.redirect("/login")
  // }
})

function convert(money){
  
  var mon1 = money.slice(1, 10);
  var mon2 = mon1.replace(",","");
  var cash = parseInt(mon2);
  // console.log("cash is " + cash);
  return cash;


}
// TODO: I WILL START HERE TOMOROW.
function ispaid(total, cut){
  console.log("totoal" + total);
  tmoney = convert(total);
  console.log(tta);
  var tta = (tmoney/100) * parseInt(cut);
  console.log("totalmo" + tta);
  var pending = (tmoney - tta);
  return tta;

}

app.post("/form", function(req,res){
    // oName,sDate,unit,dMonth,dWeek,amount,cCleint,
    // state,addr,structure,isPaid,status
    // console.log(convert(req.body.amount));
    console.log("what user paid" + req.body.userPaid);
    var startdate = req.body.sDate;
    var numMonth = parseInt(req.body.dMonth);
    var numWeek = parseInt(req.body.dWeek);
    var enddate  = new dates.endDate(new Date(startdate), numWeek, numMonth).toLocaleDateString('en-us', { weekday:"short", 
  year:"numeric", month:"short", day:"numeric"});

    Campdb.create({operator_name:req.body.oName,
        startdate:req.body.sDate,
        unit:parseInt(req.body.unit),
        dur_month:parseInt(req.body.dMonth),
        dur_week:parseInt(req.body.dWeek),
        amount_paid:convert(req.body.amount),
        ispaid:ispaid(req.body.amount, req.body.userPaid),
        client_camp:req.body.cClient,
        state:req.body.state,
        address:req.body.addr,
        structure:req.body.structure,
        ads_status:req.body.status,
        cut:req.body.userPaid, //This is for the percentage number cut, The one "ispaid"about has been process via func. 
        payment_status:true,
        remark:"Going well",
        end_date:enddate})
        .then((result) => {
            // res.send({ kq: 1, msg: 'data sent' })
            res.render("complete");
          })
          .catch((err) => {
            res.send({ kq: 0, msg: err })
          })
    
    
})

app.get("/cal", function(req,res){
    res.render("index");
})


app.get("/table", function(req, res){
  if(req.isAuthenticated()){
    Campdb.find()
    .then((foundItem) => {
        res.render("ui-pages/tables", {items:foundItem, userInfo:req.user});
    }).catch((err) => {
        res.send(err);
    })
  }else{
    res.redirect("/login");
  }
})

app.get("/", (req,res)=>{
  res.render("ui-pages/sign-in");
})

app.get("/dashboard", (req,res)=>{
  if(req.isAuthenticated()){
    console.log(req.user);
    Campdb.find().then((campaign)=>{
      res.render("ui-pages/dashboard", {dash_info:campaign, userInfo:req.user});
    }).catch((err)=>{
      res.send(err);
    })
  }else{
    res.redirect("/login");
  }

  
});


// app.get("/table1", (req,res)=>{
//   res.render("ui-pages/tables");
// });

app.get("/bill", (req,res)=>{
  res.render("ui-pages/billing");
});

app.post("/edit", async (req,res)=>{
console.log(req.body.ads_id);
if(req.isAuthenticated()){
  await Campdb.findById(req.body.ads_id).then((result)=>{
    res.render("ui-pages/billing", {info:result, userInfo:req.user});
  }).catch((err)=>{
  console.log(err);
  })
}else{
  res.redirect("/login");
}
});

app.get('/view-type', (req,res)=>{
  res.render("ui-pages/view-type")
})

app.get('/list-location', (req,res)=>{
  LocationDB.find({}).then((sites)=>{
    res.render("ui-pages/list-view", {site:sites});
  })
})

app.post("/viewmap", async (req,res)=>{
  console.log(req.body.lat);
  await res.render("ui-pages/singlemapview",{lat:req.body.maplat, long:req.body.maplong});
})


app.get("/all-users", async (req,res)=>{
  await User.find({}).then((found)=>{
    res.render("ui-pages/all-users", {userfound:found});
  })
})


var countriesout = ["Mtn","Glo","Indomie","Etisalat", "Airtel","GTBank","Jumia"];
module.exports = countriesout;


module.exports = {
    main:app,
    operators:User,
    Campaign:Campdb,
    listings:countriesout,
  }
