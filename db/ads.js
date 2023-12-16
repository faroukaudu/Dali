const mongoose = require("mongoose");
var db = require(__dirname + "/connection.js");
mongoose.set('strictQuery', true);
// const uri = "mongodb+srv://fancy98com:E6eoFBqkfDsweSKB@cluster0.rom3xsn.mongodb.net/flyboy";
const uri = "mongodb://127.0.0.1:27017/surreal";
async function database() {
  await mongoose.connect(uri);
}
//database().catch(err => console.log(err));

const campSchema = new mongoose.Schema({
operator_name:String,
startdate:String,
unit:Number,
dur_month:Number,
dur_week:Number,
amount_paid:Number,
ispaid:Number,
client_camp:String,
state:String,
address:String,
structure:String,
payment_status:Boolean,
ads_status:String,
remark:String,
end_date:String,
end_date_count:String,
cut:Number,





},
{timestamps: true}
)


module.exports = campSchema;
