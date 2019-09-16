var counter = 0;
var score = 0
var finished = false;
var word = ["kaas", "peter", "pietje", "saus", "jimmy", "doet", "niks", "helemaal", "niks"];
var sec = 0;
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
    }};
        
}
//Bron: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript/7910506
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    if (finished == false){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    // if (finished == true){       
    // nog iets bedenken ~k
    // }
}},1000)
