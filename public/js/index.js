var counter = 0;
var score = 0
var finished = false;
var sec = 0;
var mistakes = 0;
function load(){
    word.sort(() => Math.random() - 0.5) //shuffle array
    document.getElementById("word").innerHTML = word[counter]["word_list"];
    document.getElementById("score").innerHTML = score + "/" + '20';
    document.getElementById("input123").focus();    

 
}

function test(e){   
    if (finished == false){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode === 13) { // checkt of er op enter is gedrukt
    var input = document.getElementById("input123").value;
    if(input === word[counter]["word_list"]){
        document.getElementById("checker").innerHTML = "<p style='color:green'>Your answer is correct</p>";
        document.getElementById("input123").value = "";
        result = false;
        counter++;
        score++;
    }
    else{
        document.getElementById("checker").innerHTML = "<p style='color:red'>Your answer is incorrect</p>";
        document.getElementById("input123").value = "";
        counter++;
        mistakes++;
        document.getElementById("mistakes").innerHTML = "Fout: " + mistakes;
    }
     if (counter == 200){
         counter = 0;
         document.getElementById("word").innerHTML = word[counter]["word_list"];

     }
    document.getElementById("word").innerHTML = word[counter]["word_list"];
    if(score >= 20){
        document.getElementById("score").innerHTML = "<p style='color:green'>Finished!</p>";
        document.getElementById("input123").disabled = true;
        document.getElementById("word").innerHTML = "Finsihed!";
        finished = true;
    }
    else{
        document.getElementById("score").innerHTML = score + "/" + '20';    
    }
    }};
        
}
//Bron: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript/7910506
function pad ( val ) { return val > 9 ? val : "0" + val; } // de hele timer
setInterval( function(){
    if (finished == false){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    // if (finished == true){       
    // nog iets bedenken ~k
    // }
}},1000)
