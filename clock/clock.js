console.log("clock");

function updateClock() {
  //date function
  let time = new Date();
  //console.log(time);

  //fetching hour min and sec from date function
  let currentHour = time.getHours();
  let currentMin = time.getMinutes();
  let currentSec = time.getSeconds();
  // console.log(currentHour, currentMin, currentSec);

  //// Pad 0 if minute or second is less than 10 (single digit)
  currentHour = (currentHour < 10 ? "0" : "") + currentHour;
  currentMin = (currentMin < 10 ? "0" : "") + currentMin;

  currentSec = (currentSec < 10 ? "0" : "") + currentSec;

  //setting Am/PM as per time of the day
  let timeOfDay = currentHour < 12 ? "AM" : "PM";

  //converting 24hr format to 12 hr format
  currentHour = currentHour > 12 ? currentHour - 12 : currentHour;

  currentHour = currentHour == 0 ? 12 : currentHour;

  let clockTime =
    currentHour + ":" + currentMin + ":" + currentSec + " " + timeOfDay;

  //Insert Time into html dom
  document.getElementById("time").innerHTML = clockTime;
}
