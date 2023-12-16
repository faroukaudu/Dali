

function endDate(date1, weeks, months){

  function myWeek(){
    date1.setDate(date1.getDate() + (7 * weeks));
    var normWeek = date1;
    console.log(normWeek);
    var weekDate = date1.toLocaleDateString('en-us', { weekday:"long", 
    year:"numeric", month:"short", day:"numeric"});
      return normWeek;
  
  }
  

  
  function addMonth(date2,) {
    date2.setMonth(date2.getMonth() + months);
    console.log(date2);
    return date2;
  }
  
  var newWeek = addMonth(myWeek())
  console.log("This is plain date" + newWeek);
  console.log(newWeek.toLocaleDateString('en-us', { weekday:"long", 
  year:"numeric", month:"short", day:"numeric"}));

  // return ;
  return newWeek
}

module.exports =  {endDate};


//module.exports = myDate;
