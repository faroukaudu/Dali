const mongoose = require("mongoose");
var db = require(__dirname + "/connection.js");
mongoose.set('strictQuery', true);

// const uri = "mongodb://127.0.0.1:27017/surreal";
// async function database() {
//   await mongoose.connect(uri);
// }
//database().catch(err => console.log(err));

const locationSchema = new mongoose.Schema({
address: String,
latitude:String,
longitude:String,
structure:String,
state:String,
vacant:Boolean,
// Adding Sides
side1:String,
side2:String,
side3:String,

},
{timestamps: true}
)


module.exports = locationSchema;
