@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">TypeRacer</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    Welkom bij TypeRacer
                    <p id="word">Loading...</p>
                    <br><input type='text' oninput="readtext()" id='typeracerinput'>
                    <p id="output">Your input</p>
                    <p id="checker">Your answer is correct/incorrect</p>
                    <script>
                        
                    $(document).keyup(function(event) {
                    if ($("typeracerinput").is(":focus") && event.key == "Enter") {
                        alert('ya!');
                    }
                    });
                    
                    function readtext() {
                        $(".input1").on('keyup', function (e) {
                        if (e.keyCode === 13) {
        // Do something
                    var input = document.getElementById("typeracerinput").value;
                    //document.getElementById("output").innerHTML = input;   
                    var counter     
                    var word = 'test';
                    var result = input.includes(word);
                    if(result == true){
                        document.getElementById("output").innerHTML = "<p style='color:green'>Your answer is correct</p>"
                        document.getElementById("typeracerinput").value = "";
                        result = false;
                        counter += 1;
                    }
                    if(result == false){
                        document.getElementById("output").innerHTML = "<p style='color:red'>Your answer is incorrect</p>"
                    }
                    
                    }
                    }
                    }  
                        	}
});

                    </script>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
