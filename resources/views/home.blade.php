@extends('layouts.app')

@section('content')

<script src="js/index.js"></script>
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
                    <input type='text' id='input123' name='input123'>
                    <p id="output">Your input</p>
                    <p id="checker">Your answer is correct/incorrect</p>
                    
                    <script>
                    // $("#input").on('keydown', function (e) {
                    //     alert('step2');
                    //     if (e.keyCode === 13) {
                    //         alert('step3');
                    //         var input = document.getElementById("typeracerinput").value;
                    //         //document.getElementById("output").innerHTML = input;   
                    //         var counter;
                    //         var word = 'test';
                    //         var result = input.includes(word);
                    //         if(result == true){
                    //             document.getElementById("output").innerHTML = "<p style='color:green'>Your answer is correct</p>";
                    //             document.getElementById("typeracerinput").value = "";
                    //             result = false;
                    //             counter += 1;
                    //         }
                    //         if(result == false){
                    //             document.getElementById("output").innerHTML = "<p style='color:red'>Your answer is incorrect</p>";
                    //         }
                    //     }
                    // });  
                    </script>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
