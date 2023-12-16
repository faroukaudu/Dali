const myapp = require("./index.js");
const passport = require("passport");
const session = require("express-session");
const sendingMail = require("./nodemailer.js");
const bodyParser = require("body-parser");



app = myapp.main;
app.use(bodyParser.json());
User = myapp.operators;

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


  app.get("/add-user", (req,res)=>{
    
    if(req.isAuthenticated()){
        res.render("ui-pages/add-user");
    }else{
        res.redirect("login");
    }

    
  })

  app.get("/trol",(req,res)=>{
    res.redirect("/login")
  })
