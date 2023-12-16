
$(document).ready(function() {
	'use strict';

  /*--------------------------------------------
  File Input
  --------------------------------------------*/
  function handleChange(inputId) {
    var fileUploader = document.getElementById(inputId);
    var getFile = fileUploader.files

    
    var uploadedFile = getFile[getFile.length - 1];
    readFile(uploadedFile, inputId);
      

  }

  $('.input-file').on('change', function(e) {
    handleChange(e.target.id);
  })

  function readFile(uploadedFile, inputId) {
    if (uploadedFile) {
      var reader = new FileReader();
      reader.onload = () => {
        var parent = document.getElementById('p-' + inputId);
        parent.innerHTML = `<img class="preview-content img-fluid" src=${reader.result} />`;
      };

      reader.readAsDataURL(uploadedFile);
    }
  };

})

// MY OWN CUSTOME 
    var installPay;

     $(function(){
       $("#inputWeek, #inputMonth, #inputUnit").change(function(){
        var unit = parseInt($("#inputUnit").val());
        var displayweek ;
        var week = $("#inputWeek option:selected").text();
        console.log(week);
        if (week === "Nil"){
          displayweek = 0;
        }else{
          displayweek = parseInt(week);
        }
        
        // var unit = parseInt($("#inputUnit").val());
        // console.log(unit);
         var displaymonth =parseInt($("#inputMonth option:selected").text()); 

        //  var displayweek = parseInt($("#inputWeek option:selected").text());
         
         var monthpay = unit * displaymonth;
         var weekpay = (unit / 4)* displayweek;
         var finaldisplay = monthpay + weekpay;
         var amountToPay = "Select Month & Week";
         if (isNaN(finaldisplay)){
          amountToPay = "Select Month & Week";
         }else{
            amountToPay = finaldisplay;
            installPay = finaldisplay;
         }
         $("#inputamount").val("₦ "+ amountToPay.toLocaleString("en-US"));

       });
     });

     $(function(){
      $("#installment").change(function(){
        console.log(installPay);
        var install = $("#installment option:selected").val();
        if(isNaN(installPay)){
          console.log("Nothing");
          $("#insPay").text("Kindly Enter your Amount");
        }else if (install == 100){
          $("#insPay").text(" Complete Payment Made!!!");
          $("#bal").text("");
          
        }else if(install === "NIL"){
          $("#insPay").text("");
         $("#bal").text("No Payment Made!!!");

        }else{
          var firInst = (installPay/100) * install;
          var lastInst = (installPay/100) * (100 - install);
          $("#insPay").text("₦" + firInst.toLocaleString("en-US") + " Has been paid!!!");
          $("#bal").text( "Remaining Balance: "+"₦" + lastInst.toLocaleString("en-US"));
        }
        
        
        // console.log(install);
        // console.log(installPay);
      })
     })
   


    //  AUtocomlete Library
    // $(function() {
    //   var availableTags = [
    //     "ActionScript",
    //     "AppleScript",
    //     "Asp",
    //     "BASIC",
    //     "C",
    //     "C++",
    //     "Clojure",
    //     "COBOL",
    //     "ColdFusion",
    //     "Erlang",
    //     "Fortran",
    //     "Groovy",
    //     "Haskell",
    //     "Java",
    //     "JavaScript",
    //     "Lisp",
    //     "Perl",
    //     "PHP",
    //     "Python",
    //     "Ruby",
    //     "Scala",
    //     "Scheme"
    //   ];
    //   $( "#tags" ).autocomplete({
    //     source: availableTags
    //   });
    // });