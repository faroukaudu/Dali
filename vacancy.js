const myapp = require("./index.js");

CampDB = myapp.Campaign;
LocationDb = myapp.LocationDb;

function vacancyBoard (){
    console.log("Vacancy Board");
}


exports.vacancyBoard = vacancyBoard;


