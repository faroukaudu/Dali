const myModule = require('./index.js');
const myModule2 = require('./users.js');
const appadmin = require('./update.js');
const appadmin2 = require('./adduser.js');

const apiMap = require('./apimap.js');
// const front = require('./front.js');

const app = myModule.main;



app.listen(4000, function(req,res){
  console.log("server is now starting @ 4000!");
});

// app.use(function(req, res, next){
//   res.status(404).render("dashboard/errors/error404");
// })
