console.log("Sanity Check: JS is working!");

$(document).ready(function() {
  $("#time").text( Date.now() );
  $("#left").change(function() {
    var update1 = $(this).val();
    console.log(update1);
  })
  $("#right").change(function() {
    var update2 = $(this).val();
    console.log(update2);
  })
  // var final = function(update1, update2) {
  //   var sum = ('#left').val(this) + ('#right').val(this);
  //   return sum;
  //   console.log(sum);
  // }
  // $("#total").val(sum);
})


//     var inputValue = update + $("#total").val();
//     $("#total").val(update);
//     console.log(inputValue);
//   })
// })
///// figure out how to separate the 2 update values and then, figure out how to add those to add those 2 boxes together


/* $("total").on("click", function(event){
  event.
}

)


$(document).ready(function(){
    var a = $("#left").val();
    var b = $("#right").val();
    $("total").on("click", function(){
        var total = a + b;
        return total;
    })
}) */


// This code did not work
// $(document).ready(function() {
//   $("#time").text( Date.now() );
//     var a = $("#left").val();
//     var b = $("#right").val();
//     $("total").on("click", function(){
//         var total = a + b;
//         return total; } )
//       } )
