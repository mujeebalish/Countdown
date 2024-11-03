var sellDate = new Date(2024,10,11,12,00,00,999).getTime();
var currentDate = new Date().getTime();
var reamaningTime = sellDate-currentDate;
var getDays = Math.floor(reamaningTime/(1000*60*60*24));
var gethours = Math.floor((reamaningTime%(1000*60*60*24))/(1000*60*60));
var getminutes = Math.floor((reamaningTime%(1000*60*60))/(1000*60));
var getseconds = Math.floor((reamaningTime%(1000*60))/(1000));

document.getElementById("days-box").innerHTML =  "0" + getDays + "<br>" + "DAYS";
document.getElementById("hours-box").innerHTML =  gethours + "<br>" + "HOURS";
document.getElementById("minutes-box").innerHTML = getminutes + "<br>" + "MINUTES";
document.getElementById("second-box").innerHTML =  getseconds + "<br>" + "SECONDS";

console.log(getDays);





