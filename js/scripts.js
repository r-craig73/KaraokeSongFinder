
// biz logic
  function Song(mood, vibe) {
    this.mood = mood;
    this.vibe = vibe;
  }

//mood
var chillBar = [
  "Song 1",
  "Song 2",
  "Song 3",
];

var chillAlone = [
  "Song 4",
  "Song 5",
  "Song 6",
];

var partyBar = [
  "Song 7",
  "Song 8",
  "Song 9",
];

var partyAlone = [
  "Song 10",
  "Song 11",
  "Song 12",
];

var chillBar = chillBar[Math.floor(Math.random()*chillBar.length)];
var partyBar = partyBar[Math.floor(Math.random()*partyBar.length)];
var chillAlone = chillAlone[Math.floor(Math.random()*chillAlone.length)];
var partyAlone = partyAlone[Math.floor(Math.random()*partyAlone.length)];

var randomSong = function() {
  if ("input#mood" === chill && "input#vibe" === bar) {
    return ("You should sing " + chillBar + "!");
  } else if ("input#mood" === chill && "input#vibe" === alone) {
    return ("You should sing " + chillAlone + "!");
  } else if ("input#mood" === party && "input#vibe" === bar) {
    return ("You should sing " + partyBar + "!");
  } else if ("input#mood" === party && "input#vibe" === alone) {
    return ("You should sing " + partyAlone + "!");
    else {
  }
}

//ui logic
$(document).ready(function() {
  

