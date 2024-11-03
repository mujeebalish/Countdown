function countdowntimer() {
var sellDate = new Date(2024,10,11,12,11,11,999).getTime();
var currentDate = new Date().getTime();
var reamaningTime = sellDate-currentDate;
var getDays = Math.floor(reamaningTime/(1000*60*60*24));
var gethours = Math.floor((reamaningTime%(1000*60*60*24))/(1000*60*60));
var getminutes = Math.floor((reamaningTime%(1000*60*60))/(1000*60));
var getseconds = Math.floor((reamaningTime%(1000*60))/(1000));
document.getElementById("day-box").innerHTML = getDays + "<br>" + "DAYS";
document.getElementById("hour-box").innerHTML =  gethours + "<br>" + "HOURS";
document.getElementById("minute-box").innerHTML = getminutes + "<br>" + "MINUTES";
document.getElementById("second-box").innerHTML =  getseconds + "<br>" + "SECONDS";
}
countdowntimer()
setInterval(countdowntimer,1000);







