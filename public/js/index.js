var counter = 0;
var score = 0
var finished = false;
var word = ["kaas", "peter", "pietje"];
function load(){
    document.getElementById("word").innerHTML = word[counter];
    document.getElementById("score").innerHTML = score + "/" + word.length;
}

function test(e){   
    if (finished == false){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode === 13) {
    var input = document.getElementById("input123").value;
    if(input === word[counter]){
        document.getElementById("checker").innerHTML = "<p style='color:green'>Your answer is correct</p>";
        document.getElementById("input123").value = "";
        result = false;
        counter += 1;
        score += 1;
    }
    else{
        document.getElementById("checker").innerHTML = "<p style='color:red'>Your answer is incorrect</p>";
        document.getElementById("input123").value = "";
        counter += 1;
    }
    if (counter == word.length){
        counter = 0;
        document.getElementById("word").innerHTML = word[counter];

    }
    document.getElementById("word").innerHTML = word[counter];
    if(score >= word.length){
        document.getElementById("score").innerHTML = "<p style='color:green'>Finsihed!</p>";
        document.getElementById("input123").disabled = true;
        finished = true;
    }
    else{
        document.getElementById("score").innerHTML = score + "/" + word.length;
    }
    }
    }
    
}

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}