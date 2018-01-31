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

var allSongs = [
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
]

var chillRandom = chill[Math.floor(Math.random()*chill.length)];
var partyRandom = party[Math.floor(Math.random()*party.length)];
var litRandom = lit[Math.floor(Math.random()*lit.length)];

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

Song.prototype.textResponse = function(chillRandom, partyRandom, litRandom) {
  if (this.songRecommendation() === chillRandom) {
    return ("This is a chill song");
    console.log(this.songRecommendation());
  } else if (this.songRecommendation() === partyRandom) {
    return ("This is a party song.");
  } else if (this.songRecommendation() === litRandom) {
    return ("This is a lit song");
  } else {
    return("this is not working");
  }
};

//ui logic
$(document).ready(function() {

  $("button#show-form").click(function() {
    $(".form-questions").show();
  });

  $("button#show-song").click(function() {
    $("#song-results").show();
    $("#karaoke-gif").show();
    var moodSelection = parseInt($("select#mood").val());
    var vibeSelection = parseInt($("select#vibe").val());
    var drunkSelection = parseInt($("select#intox").val());

    var newScore = (moodSelection + vibeSelection + drunkSelection);
    console.log(newScore);
    var newSong = new Song(moodSelection, vibeSelection, drunkSelection, newScore);

    var result = newSong.songRecommendation(newScore);

    $("#song-results").text(result);
    $("#text-result").text(newSong.textResponse(chillRandom, partyRandom, litRandom));

    $("#try-again").show();
    $("#find-lyrics").show();

    var reset = function() {
      $("select#mood").val("");
      $("select#vibe").val("");
      $("select#intox").val("");
    }

    // reset();
    // $("#lyrics-well").show();
    // $("span#lyrics").show();
  });

  $("button#random").click(function() {
    var allSongsRandom = allSongs[Math.floor(Math.random()*allSongs.length)]
    $("#song-results").text(allSongsRandom);
    $("#try-again").show();
    $("#find-lyrics").show();
  });

  $("button#find-lyrics").click(function() {
    $("#lyric-search").show();
  });

  $("#lyric-search").submit(function(event) {
    event.preventDefault();

    var songSearch = $("input#song").val();
    console.log(songSearch);
    var artistSearch = $("input#artist").val();
    console.log(artistSearch);

    var ajaxCall = function(apiData) {
    var apikey = 'ac2764373bf0a3d6a7fd0aa221e48c34';
    var result = $.ajax({
      type: "GET",
      data: apiData,
      data: {
          apikey: apikey,
          q_track: songSearch,
          q_artist: artistSearch,
          format:"jsonp",
          callback:"jsonp_callback"
      },
      url: "http://api.musixmatch.com/ws/1.1/matcher.lyrics.get",
      dataType: "jsonp",
      jsonpCallback: 'jsonp_callback',
      contentType: 'application/json',
      success: function(data) {
          console.log(data);
      }
    }).then(function(res) {
      $('.result').text(res.message.body.lyrics.lyrics_body);
    });
  };

    $('.result').text(ajaxCall())
  });

  $("button#try-again").click(function() {
    location.reload();
  });

});
