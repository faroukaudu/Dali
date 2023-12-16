const { result } = require("lodash");
const myapp = require("./index.js");


app = myapp.main;
CampDB = myapp.Campaign;


app.get("/update", (req,res)=>{
    res.send("getting now");
})

app.post("/update", async (req,res)=>{
    console.log(req.body.camp_id);
    var updateInfo = 
    {client_camp:req.body.cClient,
    amount_paid:req.body.amount,
    unit:req.body.unit,
    state:req.body.state,
    structure:req.body.structure,
    address: req.body.address,
    };

await CampDB.findOneAndUpdate({_id:req.body.camp_id}, updateInfo).then((camp)=>{
    

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
        
    }).catch((err)=>{
        res.send("this is an error" + err);
    })
})






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