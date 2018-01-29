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

var chillBar = chill[Math.floor(Math.random()*chill.length)];
var bar = bar[Math.floor(Math.random()*bar.length)];

var randomSong = function() {
  if ("input#mood" === chill && "input#vibe" === bar) {
    return ("You should sing " + chillBar + "!");
  }
}

//ui logic
$(document).ready(function() {
