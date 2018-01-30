// biz logic
  function Song(name, artist, album, score) {
    this.songName = name;
    this.artist = artist;
    this.album = album;
    this.score = score;
  }

// var chillBar = [];

// var chillBar = [
//   "Drake: Hotline Bling",
//   "Dolly Parton: 9 to 5",
//   "Carrie Underwood: Before He Cheats",
// ];
//
// var chillAlone = [
//   "Jason Mraz: I'm Yours",
//   "Frank Sinatra: My Way",
//   "Fleetwood Mac: Go Your Own Way",
// ];
//
// var partyBar = [
//   "The Commodores: Brickhouse",
//   "Young MC: Bust A Move",
//   "Miley Cyrus: Party in the USA",
// ];
//
// var partyAlone = [
//   "Sia: Chandelier",
//   "Don McLean: American Pie",
//   "Frank Sinatra: My Way",
// ];


// var allSongs = [
//   "Song1", "Song2", "Song3", "Song4", "Song5", "Song6", "Song7", "Song8", "Song9", "Song10", "Song11", "Song12",
// ];
//
// var chillBarRandom = chillBar[Math.floor(Math.random()*chillBar.length)];
// var partyBarRandom = partyBar[Math.floor(Math.random()*partyBar.length)];
// var chillAloneRandom = chillAlone[Math.floor(Math.random()*chillAlone.length)];
// var partyAloneRandom = partyAlone[Math.floor(Math.random()*partyAlone.length)];

Song.prototype.songRecommendation = function(score) {
  if (this.score < 5) {
    alert(this.score);
    return ("You should sing!");
  } else if (this.score > 5) {
    return ("Sing!");
  } else if (this.score >= 10) {
    return ("Please sing!");
  } else {
    return("Tell us your mood and vibe and try again.");
  }
};



//ui logic
$(document).ready(function() {
  $("button#show").click(function() {
    var moodSelection = parseInt($("select#mood").val());
    var vibeSelection = parseInt($("select#vibe").val());
    console.log(vibeSelection);
    var drunkSelection = parseInt($("select#intox").val());

    var newScore = (moodSelection + vibeSelection + drunkSelection);
    console.log(newScore);

    var newSong = new Song(moodSelection, vibeSelection, drunkSelection, newScore);
    console.log(newSong);

    var result = newSong.songRecommendation(newScore);
    console.log(result);
    $("#song-results").text(result);

    var reset = function() {
      $("select#mood").val("");
      $("select#vibe").val("");
      $("select#intox").val("");
    }

    reset();
  });

  $("button#random").click(function() {
    var allSongsRandom = allSongs[Math.floor(Math.random()*allSongs.length)];

    $("#song-random").text(allSongsRandom);
  });

});
