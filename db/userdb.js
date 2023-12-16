const mongoose = require("mongoose");
var db = require(__dirname + "/connection.js");
const passportLocalMongoose = require("passport-local-mongoose");
mongoose.set('strictQuery', true);
// const uri = "mongodb+srv://fancy98com:E6eoFBqkfDsweSKB@cluster0.rom3xsn.mongodb.net/flyboy";
const uri = "mongodb://127.0.0.1:27017/surreal";
async function database() {
  await mongoose.connect(uri);
}
//database().catch(err => console.log(err));

const userSchema = new mongoose.Schema({
// fullname:String,
username:String,
fullname:String,
email:String,
password:String,
isAdmin: Boolean,
active:Boolean,

},
{timestamps: true}
);

userSchema.plugin(passportLocalMongoose , {selectFields: "username password"});


module.exports = userSchema;
