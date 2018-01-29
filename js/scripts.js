
// // biz logic
//   function Song(mood, vibe) {
//     this.mood = mood;
//     this.vibe = vibe;
//   }

//mood
var chillBar = [
  "Drake: Hotline Bling",
  "Dolly Parton: 9 to 5",
  "Carrie Underwood: Before He Cheats",
];

var chillAlone = [
  "Jason Mraz: I'm Yours",
  "Frank Sinatra: My Way",
  "Fleetwood Mac: Go Your Own Way",
];

var partyBar = [
  "The Commodores: Brickhouse",
  "Young MC: Bust A Move",
  "Miley Cyrus: Party in the USA",
];

var partyAlone = [
  "Sia: Chandelier",
  "Don McLean: American Pie",
  "Frank Sinatra: My Way",
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
