const myapp = require("./index.js");
const passport = require("passport");
const session = require("express-session");
const sendingMail = require("./nodemailer.js");
const bodyParser = require("body-parser");
const emailRoute = require("./emailsend.js");
const reminderEmail = emailRoute.reminderMail;



app = myapp.main;
app.use(bodyParser.json());
User = myapp.operators;
CampDb = myapp.Campaign;

function generatePassword(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}


app.post("/addUser",(req, res) => {
  var password = generatePassword(10);
  console.log(password);

    console.log(req.body.username);

    console.log(req.body.position);
    let am_i_admin ;
    if(req.body.role==="Admin"){
      am_i_admin = true;
    }else{
      am_i_admin = false;
    }

      User.register(new User({
      username: req.body.username,
      fullname:req.body.fullname,
      email: req.body.username,
      isAdmin:am_i_admin,
      active:true,
    }), password, function (err, user){

      if (!err) {
        console.log(req.body.username);
        // Delay
        sendingMail.emailSent({sendTo:req.body.username, title:"You've been added",message:" Hello "+ req.body.fullname +" Login in with your email and this password 👉 "+ password});
         
        
        passport.authenticate("local", {
          failureRedirect: '/login',
          failureMessage: true
        })(req, res, function () {
          console.log("this is where it should redirect");
           
          
          res.redirect("/dashboard");         
        });
      } else {
        res.send(err);
        console.log(err);
      }

    })
  });


  app.get("/add-users", (req,res)=>{
   
    // res.render("ui-pages/add-user");
    if(req.isAuthenticated()){
      console.log(req.user.isAdmin);
      if(req.user.isAdmin == true){
        res.render("ui-pages/add-user");
      }else{
        res.send("Only Admin can add new users");
      }
        
    }else{
        res.redirect("login");
    }

    
  })

  app.get("/onlythedevelopercanaddadmin", (req,res)=>{
   
    res.render("ui-pages/add-user");

    
  })

  app.get("/trol",(req,res)=>{
    res.redirect("/login")
  })

  app.get("/headadmin", (req,res)=>{

  })


  app.post("/block", (req,res)=>{
    User.findById(req.body.blockId).then((userB)=>{
      if(userB.active == true){
        userB.active = false;
        userB.save();

      }else{
        userB.active = true;
      userB.save();

      }
      res.redirect("/all-users")
    })
  })

  app.get("/send-reminder/:campID", async (req,res)=>{
    // console.log("id is"+ req.params.campID);
     await CampDb.findById({_id:req.params.campID}).then((campaignFound)=>{
      // console.log(campaignFound);
      try {
        reminderEmail({username:campaignFound.client_camp,email:campaignFound.campEmail,
          endDate:campaignFound.end_date});
          res.render("animation/remindersent");
      } catch (err){
        res.send("Mail Not Sent! "+ err)
      }
      
        
      // console.log(campaignFound);
      // sendingMail.emailSent({sendTo:"fagzy98@gmail.com", 
      // title:"Signboard Advertisement Expiry on "+campaignFound.end_date ,
      // message:" Dear "+ campaignFound.client_camp +" Kindly note that the current agreement for your signboard space is set to expire on 👉"+
      //  campaignFound.end_date +"If you wish to continue showcasing your brand with us, we would be delighted to assist you in renewing the arrangement."});
    }).catch((err)=>{
      res.send("Error is "+err);
    })
    
  })

  app.get("/sent",(req,res)=>{
    res.render("animation/remindersent");
  })
