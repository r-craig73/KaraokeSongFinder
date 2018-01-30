// biz logic
  function Song(name, artist, album, score) {
    this.songName = name;
    this.artist = artist;
    this.album = album;
    this.score = score;
  }


var chill = [
  "Drake: Hotline Bling",
  "Dolly Parton: 9 to 5",
  "Carrie Underwood: Before He Cheats",
  "Fleetwood Mac: Landslide",
  "Celine Dion: My Heart Will Go On",
  "Aretha Franklin: Respect",
  "The B-52S: Love Shack",
  "Backstreet Boys: I Want It That Way",
  "Bonnie Tyler: Total Eclipse Of The Heart",
  "Eurythmics: Sweet Dreams (Are Made Of This)",
  "Neil Diamond: Sweet Caroline",
  "Journey: Don’t Stop Believin’",
  "Queen: Bohemian Rhapsody",
  "Oasis: Wonderwall",
  "R.E.M.: Losing My Religion",
  "Sinead O'Connor: Nothing Compares 2 U",
];

var party = [
  "Jason Mraz: I'm Yours",
  "Frank Sinatra: My Way",
  "Fleetwood Mac: Go Your Own Way",
  "Alanis Morissette: You Oughta Know",
  "No Doubt: Just a Girl",
  "'N Sync: Bye, Bye, Bye",
  "Nelly Furtado: I'm Like A Bird",
  "Madonna: Like A Prayer",
  "Destiny's Child: Say My Name",
  "Justin Timberlake: Can't Stop The Feeling!",
  "Britney Spears: Baby One More Time",
  "TLC: No Scrubs",
  "Spice Girls: Wannabe",
  "Village People: YMCA",
  "Sublime: Santeria",
  "The Cranberries: Zombie",
];

var lit = [
  "The Commodores: Brickhouse",
  "Young MC: Bust A Move",
  "Miley Cyrus: Party in the USA",
  "TLC: No Scrubs",
  "Def Leppard: Pour Some Sugar On Me",
  "Ginuwine: Pony",
  "Christina Aguilera: Genie In A Bottle",
  "Calvin Harris feat. Rihanna: This Is What You Came For",
  "The Weeknd feat. Daft Punk: Starboy",
  "ABBA: Dancing Queen",
  "Lynyrd Skynyrd: Sweet Home Alabama",
  "Shania Twain: Man! I Feel Like A Woman",
  "Garth Brooks: Friends in Low Places",
  "Vanilla Ice: Ice Ice Baby",
  "Aqua: Barbie Girl",
];

// var allSongs = [
//   "Song1", "Song2", "Song3", "Song4", "Song5", "Song6", "Song7", "Song8", "Song9", "Song10", "Song11", "Song12",
// ];
//
 var chillRandom = chill[Math.floor(Math.random()*chill.length)];
 var partyRandom = party[Math.floor(Math.random()*party.length)];
 var litRandom = lit[Math.floor(Math.random()*lit.length)];
// var partyAloneRandom = partyAlone[Math.floor(Math.random()*partyAlone.length)];

Song.prototype.songRecommendation = function(score) {
  if (this.score < 5) {
    return (chillRandom);
  } else if (this.score >= 5 && this.score < 10) {
    return (partyRandom);
  } else if (this.score >= 10) {
    return (litRandom);
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
