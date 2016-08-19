console.log("Sanity Check: JS is working!");

var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){
  $("form").on("click", function(event){
    event.preventDefault(); })
  $("#time").text( Date.now() );
 })

//Still need to do: stretch goal of embedding video on click
// buttons are "input"
