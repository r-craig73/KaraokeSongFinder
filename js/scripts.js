// biz logic
function Song(mood, vibe, drunk, score) {
  this.mood = mood;
  this.vibe = vibe;
  this.drunk = drunk;
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
  "Frank Sinatra: My Way",
];

var party = [
  "DrakeL Hotline Bling",
  "Jason Mraz: I'm Yours",
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

Song.prototype.songRecommendation = function() {
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

//when answer questions button is clicked
  $("button#show-form").click(function() {
    $(".form-questions").fadeIn();
    $("#show-form").fadeOut();
    $("#random").fadeOut();
  });

  //when show me my song button is clicked
  $("button#show-song").click(function() {
    $("#song-results").show();
    $("#karaoke-gif").show();
    var moodSelection = parseInt($("select#mood").val());
    var vibeSelection = parseInt($("select#vibe").val());
    var drunkSelection = parseInt($("select#intox").val());

    var newScore = (moodSelection + vibeSelection + drunkSelection);
    var newSong = new Song(moodSelection, vibeSelection, drunkSelection, newScore);

    var result = newSong.songRecommendation(newScore);

    $("#song-results").text(result);
    $("#text-result").text(newSong.textResponse(chillRandom, partyRandom, litRandom));

    $("#try-again").fadeIn();
    $("#find-lyrics").fadeIn();
    $("#inspire-me").fadeIn();
    $(".form-questions").fadeOut();
    $("#show-form").fadeOut();
    $("#random").fadeOut();

    var reset = function() {
      $("select#mood").val("");
      $("select#vibe").val("");
      $("select#intox").val("");
    }
  });

//when random song button is clicked
  $("button#random").click(function() {
    var allSongsRandom = allSongs[Math.floor(Math.random()*allSongs.length)]
    $("#song-results").text(allSongsRandom);
    $("#show-form").fadeOut();
    $("#random").fadeOut();
    $("#try-again").show();
    $("#find-lyrics").show();
    $("#inspire-me").show();
  });

//when inspire me button is clicked
  $("button#inspire-me").click(function() {
    $("#gif").show();

    //gif api

    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?&q=karaoke&api_key=dc6zaTOxFJmzC",
      type: "GET",
    }).done(function(response) {
      //success: function(response) {
      var gifLink = (response.data[0].bitly_gif_url);
        console.log(response.data[0].bitly_gif_url);
         $("#gif").html('<center><img src = "'+gifLink+'"></center>');
      });

    $("#find-lyrics").fadeOut();
    $("#try-again").fadeOut();
  });

//when find my lyrics button is clicked
  $("button#find-lyrics").click(function() {
    $("#lyric-search").fadeIn();
    $("#try-again").fadeOut();
    $("#inspire-me").fadeOut();
  });

//when lyrics form is submitted
  $("#lyric-search").submit(function(event) {
    event.preventDefault();

    var songSearch = $("input#song").val();
    var artistSearch = $("input#artist").val();


    var ajaxCall = function(apiData) { //musixmatch api
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
      $("#try-again-two").show();
    });
  };

    $('.result').text(ajaxCall());
  });

//when try again buttons are submitted
  $("button#try-again").click(function() {
    location.reload();
  });

  $("button#try-again-two").click(function() {
    location.reload();
  });

});


// var api = "http://api.giphy.com/v1/gifs/search?";
// var apikey = "&api_key=dc6zaTOxFJmzC"
// var search = "&q=karaoke"
//
// function setup() {
//   noCanvas();
//   var url = api + apiKey + search;
//   loadJSON(url, gotData);
// }
//
// function gotData(data) {
//   console.log(data.data[0].images.original.url);
//
// }

  $("button#try-again").click(function() {
    location.reload();
  });

  $("#lyric-add").submit(function(event) {
    event.preventDefault();
    var playlists = [];
    var addArtist = $("input#add-artist").val();
    var addSong = $("input#add-song").val();
    var newSongFormat = addArtist.concat(": " + addSong);
    newSongFormat.toString();
    console.log(newSongFormat);
    console.log("Your request has been submitted!");
    playlists.push(newSongFormat);
    $("span#ns-input-span").text(playlists);
    console.log(playlists);

});


});
