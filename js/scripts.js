
// // biz logic
//   function Song(mood, vibe) {
//     this.mood = mood;
//     this.vibe = vibe;
//   }

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

var chillBarRandom = chillBar[Math.floor(Math.random()*chillBar.length)];
var partyBarRandom = partyBar[Math.floor(Math.random()*partyBar.length)];
var chillAloneRandom = chillAlone[Math.floor(Math.random()*chillAlone.length)];
var partyAloneRandom = partyAlone[Math.floor(Math.random()*partyAlone.length)];


var randomSong = function(anyMood, anyVibe) {
  if (anyMood === "chill" && anyVibe === "bar") {
    return ("You should sing " + chillBarRandom + "!");
  } else if (anyMood === "chill" && anyVibe === "alone") {
    return ("You should sing " + chillAloneRandom + "!");
  } else if (anyMood === "party" && anyVibe === "bar") {
    return ("You should sing " + partyBarRandom + "!");
  } else if (anyMood === "party" && anyVibe === "alone") {
    return ("You should sing " + partyAloneRandom + "!");
  } else {
    return("not working");
  }

};

//ui logic
$(document).ready(function() {
  $("button#show").click(function() {
    var moodSelection = $("select#mood").val();
    var vibeSelection = $("select#vibe").val();

    var result = randomSong(moodSelection, vibeSelection)

    $("#song-results").text(result);
  });
});
