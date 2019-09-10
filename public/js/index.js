var counter = 0;

var word = ["kaas", "peter", "pietje"];

function load(){
    document.getElementById("word").innerHTML = word[counter];
}

function test(e){   
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode === 13) {
    var input = document.getElementById("input123").value;
    if(input === word[counter]){
        document.getElementById("checker").innerHTML = "<p style='color:green'>Your answer is correct</p>";
        document.getElementById("input123").value = "";
        result = false;
        counter += 1;
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
    }
}