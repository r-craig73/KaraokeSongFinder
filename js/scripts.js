
// // biz logic
//   function Song(mood, vibe) {
//     this.mood = mood;
//     this.vibe = vibe;
//   }

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

var allSongs = [
  "Song1", "Song2", "Song3", "Song4", "Song5", "Song6", "Song7", "Song8", "Song9", "Song10", "Song11", "Song12",
];

var randomSong = function() {
  chillBar[Math.floor(Math.random()*chillBar.length)];
}

var chillBarRandom = chillBar[Math.floor(Math.random()*chillBar.length)];
var partyBarRandom = partyBar[Math.floor(Math.random()*partyBar.length)];
var chillAloneRandom = chillAlone[Math.floor(Math.random()*chillAlone.length)];
var partyAloneRandom = partyAlone[Math.floor(Math.random()*partyAlone.length)];

var songRecommendation = function(anyMood, anyVibe) {
  if (anyMood === "chill" && anyVibe === "bar") {
    return ("You should sing " + chillBarRandom + "!");
  } else if (anyMood === "chill" && anyVibe === "alone") {
    return ("You should sing " + chillAloneRandom + "!");
  } else if (anyMood === "party" && anyVibe === "bar") {
    return ("You should sing " + partyBarRandom + "!");
  } else if (anyMood === "party" && anyVibe === "alone") {
    return ("You should sing " + partyAloneRandom + "!");
  } else {
    return("Tell us your mood and vibe and try again");
  }
};

//ui logic
$(document).ready(function() {
  $("button#show").click(function() {
    var moodSelection = $("select#mood").val();
    var vibeSelection = $("select#vibe").val();

    var result = songRecommendation(moodSelection, vibeSelection)

    $("#song-results").text(result);

    var reset = function () {
      $("select#mood").val("");
      $("select#vibe").val("");
      // $("#song-results").text();
    }

    reset();
  });

  $("button#random").click(function() {
    var allSongsRandom = allSongs[Math.floor(Math.random()*allSongs.length)];

    $("#song-random").text(allSongsRandom);
  });
});
