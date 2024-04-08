const { result } = require("lodash");
const myapp = require("./index.js");
// var locationschema = require(__dirname + '/db/locations.js');
// var adschema = require(__dirname + '/db/ads.js');



app = myapp.main;
CampDB = myapp.Campaign;
LocationDb = myapp.LocationDb;
freeBoard = myapp.freeUpBoard;


app.get("/update", (req,res)=>{res
    res.send("getting now");
})

app.post("/update", async (req,res)=>{
    // var topup;
    var newIsPaid;
    var newCut;
    await CampDB.findById({_id:req.body.camp_id}).then((amount)=>{
        console.log(amount.amount_paid);
        
        newIsPaid = Number(req.body.outstanding) + amount.ispaid;
        newCut = (newIsPaid / amount.amount_paid) * 100;
        console.log(typeof amount.ispaid);
        console.log(typeof Number(req.body.outstanding));
        console.log(typeof amount.amount_paid);
        // topup = amount.amount_paid + req.body.address;
        // console.log(topup);
    })
    console.log(newCut);
    console.log(newIsPaid);
    console.log(req.body.camp_id);
    var updateInfo = 
    {client_camp:req.body.cClient,
    amount_paid:req.body.amount,
    unit:req.body.unit,
    state:req.body.state,
    structure:req.body.structure,
    address: req.body.address,
    cut:newCut,
    ispaid:newIsPaid,
    startdate:req.body.start,
    end_date:req.body.end,
    dur_week:req.body.dWeek,
    dur_month:req.body.dMonth,


    
    };

 CampDB.findOneAndUpdate({_id:req.body.camp_id}, updateInfo).then((camp)=>{
    

    // updateInfo.save();
    res.redirect("/table");
}).catch((err)=>{
    res.send(err);
})
});

app.get("/delete", (req,res)=>{
    res.render("animation/delete")
})

app.post("/delete", async (req,res)=>{
    
    await CampDB.findByIdAndRemove({_id:req.body.delete_camp}).then((result)=>{
        res.render("animation/delete");
        freeBoard(result.locationID);
        
    }).catch((err)=>{
        res.send("this is an error" + err);
    })
})

function vacantBoard (){
    console.log("Vacant board sections");
    // CampDB.find({}).then((result))
}






module.exports = {vacantBoard};




// operator_name:req.body.oName,
//         startdate:req.body.sDate,
//         unit:parseInt(req.body.unit),
//         dur_month:parseInt(req.body.dMonth),
//         dur_week:parseInt(req.body.dWeek),
//         amount_paid:convert(req.body.amount),
//         ispaid:ispaid(req.body.amount, req.body.userPaid),
//         client_camp:req.body.cClient,
//         state:req.body.state,
//         address:req.body.addr,
//         structure:req.body.structure,
//         ads_status:req.body.status,
//         payment_status:true,
//         remark:"Going well",
//         end_date:enddate