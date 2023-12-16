const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
console.log("I am in connection session");



var conn = mongoose.connection;

conn.on('connected', function(){
  console.log("database connected successfully!!");
});

conn.on('disconnected', function(){
  console.log("database disconnected successfully!!");
});

conn.on('error', console.error.bind(console, 'connection error'));

module.exports = conn;
