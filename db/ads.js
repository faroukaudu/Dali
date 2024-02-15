const mongoose = require("mongoose");
var db = require(__dirname + "/connection.js");
mongoose.set('strictQuery', true);



const campSchema = new mongoose.Schema({
operator_name:String,
campEmail:String,
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
