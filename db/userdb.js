const mongoose = require("mongoose");
var db = require(__dirname + "/connection.js");
const passportLocalMongoose = require("passport-local-mongoose");
mongoose.set('strictQuery', true);


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
// userSchema.plugin(passportLocalMongoose);


module.exports = userSchema;
