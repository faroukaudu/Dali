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
state:String

},
{timestamps: true}
)


module.exports = locationSchema;
