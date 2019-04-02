$(function(){
  var input;
  $("#formOne").submit(function(event) {
    $("#formOne").hide();
    var userInput = $("input#sentence1").val();
    input = userInput;
    var orig = userInput.slice();
    orig = orig.split("");
    var arr = userInput.toUpperCase();
    arr = arr.slice();
    arr = arr.split("");
    var vowel = ["A", "I", "E", "O", "U"];

    for(var i = 0; i <= arr.length - 1; i +=  1){
      for(var v = 0; v <= 4; v++){
        if(arr[i] === vowel[v]){
          orig[i] = "-";

        };
      };
    };

    console.log(arr);
    orig = orig.join("");

    $(".puzzleOutput").text(orig)
    event.preventDefault();




  });

  $("#formTwo").submit(function(event) {

    var userInput2 = $("input#sentence2").val();


    var user = input.toUpperCase();

    var user2 = userInput2.toUpperCase();

    if(user === user2){
      alert("CORRECT");
    }else alert("WRONG");

    event.preventDefault();


  });

});
