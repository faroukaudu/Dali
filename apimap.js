const myModule = require('./index.js');
var https = require('https');
const app = myModule.main;
const lodash = require('lodash');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const { response } = require('express');
mongoose.set('strictQuery', true);
var db = require(__dirname + "/db/connection.js");
var locationschema = require(__dirname + '/db/locations.js');

const LocationDB = mongoose.model("Location",locationschema);



app.post("/locate", (req,res)=>{
    console.log(req.body.state);

    // const url = "https://maps.googleapis.com/maps/api/geocode/json?address=DAKATA+Kano+State&key="+process.env.APIKEY;
    
    const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+req.body.latitude+","+req.body.longitude+"&key="+process.env.APIKEY;

    const request = https.request(url, (response)=>{
        let data = '';
        response.on('data', (chunk)=>{
            data = data + chunk.toString();
        });
        response.on('end', ()=>{
            const body = JSON.parse(data);
            // console.log(body);
            // res.send(body);
            res.render("ui-pages/add-site",{locations:body.results, phyAdd:req.body.phyAddress,
                structure:req.body.structure, state:req.body.state, vacant:true});
            // console.log(body.results);
        });


    })
    request.on('error', (error)=>{
        console.log("An Error", error);
    });
    request.end();
    

})


app.post("/mapshow", (req,res)=>{

    console.log(req.body.phyadd);
    console.log(req.body.structure);
    console.log(req.body.state);



    res.render("ui-pages/singlemap", {address:req.body.address, lat:parseFloat(req.body.lat), lng:parseFloat(req.body.lng),
    phyAddress:req.body.phyadd, structure:req.body.structure, state:req.body.state});
})


app.post("/savelocation", (req,res)=>{
    console.log(req.body.state);
    LocationDB.create({
        state:req.body.state,
        address:req.body.phyadd,
        structure:req.body.structure,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        vacant:true,
    }).then((save)=>{

            res.render("animation/save-location");
        }).catch((err)=>{
            res.send(err);
        })

});


app.get('/add-site',(req,res)=>{
    res.render("ui-pages/add-site", {locations:[]});
})



app.get("/vr", async(req,res)=>{
    await LocationDB.find({}).then((locations)=>{
        console.log(locations);
        res.render("ui-pages/vr", {locationInfo:locations});
    }).catch((err)=>{
        res.send(err);
    })

    
  })


  app.post("/delete-loc", (req,res)=>{
    console.log("I am here");
    console.log(req.body.loc_id);
    LocationDB.findByIdAndDelete({_id:req.body.loc_id}).then((done)=>{
        res.redirect("list-location");
    }).catch((err)=>{
        res.send(err);
    })
  })


  app.post("/filter-location", (req,res)=>{
    console.log(req.body.structure);
    if(req.body.structure === "none"){
        LocationDB.find({state:req.body.state}).then((locFilter)=>{
            var details = req.body.state;
            res.render("ui-pages/filter-loc", {locations:locFilter, detail:details})
    
        }).catch((err)=>{
            res.send(err);
        })

    }else{
        LocationDB.find({state:req.body.state, structure:req.body.structure}).then((locFilter)=>{
            var details = req.body.state+ " > " +req.body.structure;
            res.render("ui-pages/filter-loc", {locations:locFilter, detail:details});
    
        }).catch((err)=>{
            res.send(err);
        })

    }

  })