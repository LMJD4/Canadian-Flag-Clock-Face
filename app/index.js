import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import { HeartRateSensor } from "heart-rate";
import { today, goals } from "user-activity";
import * as messaging from  "messaging";


function zeroPad(i) {
   if (i < 10) {
    i = "0" + i;
  }
  return i;
}






// Update the clock every minute
clock.granularity = "seconds";






// Get a handle on the <text> element
const timeLabel = document.getElementById("time");
const secondsLabel = document.getElementById("seconds");
const date = document.getElementById("date");
const heartrate = document.getElementById("heartrate");
const steps = document.getElementById("steps");
const calories = document.getElementById("calories");

const blueFlag = document.getElementById("blueFlag");
const greenFlag = document.getElementById("greenFlag");
const orangeFlag = document.getElementById("orangeFlag");
const redFlag = document.getElementById("redFlag");
const whiteFlag = document.getElementById("whiteFlag");
const purpleFlag = document.getElementById("purpleFlag");







//Inititalizations
heartrate.text = "--";







// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let DayInfo = evt.date;
  
  //time
  let hours = DayInfo.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = zeroPad(hours);
  }
  let mins = zeroPad(DayInfo.getMinutes());
  timeLabel.text = `${hours}:${mins}`;
  
  //seconds
  let seconds = DayInfo.getSeconds();
  seconds = zeroPad(seconds);
  secondsLabel.text = seconds;
  
  
  
  
  
  
  
  //date
  let monthnum = DayInfo.getMonth();
  let wdaynum = DayInfo.getDay();
  let daynum = DayInfo.getDate();
  
  let monthArr = new Array();
  monthArr[0] = "Jan";
  monthArr[1] = "Feb";
  monthArr[2] = "Mar";
  monthArr[3] = "Apr";
  monthArr[4] = "May";
  monthArr[5] = "Jun";
  monthArr[6] = "Jul";
  monthArr[7] = "Aug";
  monthArr[8] = "Sep";
  monthArr[9] = "Oct";
  monthArr[10] = "Nov";
  monthArr[11] = "Dec";
  let month = monthArr[monthnum];
  
  let wdays = new Array(); 
  wdays[0] = "Sun";
  wdays[1] = "Mon";
  wdays[2] = "Tue";
  wdays[3] = "Wed";
  wdays[4] = "Thu";
  wdays[5] = "Fri";
  wdays[6] = "Sat";
  let wday = wdays[wdaynum];
  
  let day = zeroPad(daynum);
  
  date.text = wday + "/" + month + "/" + day;
  
  steps.text = today.adjusted.steps;
  calories.text = today.adjusted.calories;
  
}






//heartrate
var hrs = new HeartRateSensor();

hrs.onreading = function() {
  heartrate.text = hrs.heartRate;
}


hrs.start();




//settings
messaging.peerSocket.addEventListener("message", (evt) => {
  if (evt && evt.data && evt.data.key === "textColor") {
    timeLabel.style.fill = evt.data.value;
    secondsLabel.style.fill = evt.data.value;
    date.style.fill = evt.data.value;
    heartrate.style.fill = evt.data.value;
    steps.style.fill = evt.data.value;
    calories.style.fill = evt.data.value;
  }
  else if (evt && evt.data && evt.data.key === "flagColor") {
    switch(evt.data.value) {
      case "deepskyblue":
        blueFlag.style.visibility = "visible";
        greenFlag.style.visibility = "hidden";
        orangeFlag.style.visibility = "hidden";
        redFlag.style.visibility = "hidden";
        whiteFlag.style.visibility = "hidden";
        purpleFlag.style.visibility = "hidden";
        console.log("Flag colour changed to " + evt.data.value);
        break;
      case "green":
        greenFlag.style.visibility = "visible";
        blueFlag.style.visibility = "hidden";
        orangeFlag.style.visibility = "hidden";
        redFlag.style.visibility = "hidden";
        whiteFlag.style.visibility = "hidden";
        purpleFlag.style.visibility = "hidden";
        console.log("Flag colour changed to " + evt.data.value);
        break;
      case "orange":
        orangeFlag.style.visibility = "visible";
        greenFlag.style.visibility = "hidden";
        blueFlag.style.visibility = "hidden";
        redFlag.style.visibility = "hidden";
        whiteFlag.style.visibility = "hidden";
        purpleFlag.style.visibility = "hidden";
        console.log("Flag colour changed to " + evt.data.value);
        break;
      case "red":
        redFlag.style.visibility = "visible";
        greenFlag.style.visibility = "hidden";
        orangeFlag.style.visibility = "hidden";
        blueFlag.style.visibility = "hidden";
        whiteFlag.style.visibility = "hidden";
        purpleFlag.style.visibility = "hidden";
        console.log("Flag colour changed to " + evt.data.value);
        break;
      case "white":
        whiteFlag.style.visibility = "visible";
        greenFlag.style.visibility = "hidden";
        orangeFlag.style.visibility = "hidden";
        redFlag.style.visibility = "hidden";
        blueFlag.style.visibility = "hidden";
        purpleFlag.style.visibility = "hidden";
        console.log("Flag colour changed to " + evt.data.value);
        break;
      case "mediumblue":
        purpleFlag.style.visibility = "visible";
        greenFlag.style.visibility = "hidden";
        orangeFlag.style.visibility = "hidden";
        redFlag.style.visibility = "hidden";
        blueFlag.style.visibility = "hidden";
        whiteFlag.style.visibility = "hidden";
        console.log("Flag colour changed to " + evt.data.value);
        break;
    }
      
    
  }
  
});
