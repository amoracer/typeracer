@extends('layouts.app')

@section('content')

<script src="js/index.js"></script>
<script>
var word = JSON.parse('{!! json_encode($difficulty1) !!}')

</script>
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
                     <img src="">
                    <p id="word">Loading...</p>
                    <input type='text' id='input123' name='input123'>
                    <p id="output">Your input</p>
                    <p id="checker">Your answer is correct/incorrect</p>
                        <p id="totaal"></p><p id="score"></p>
                    <span id="minutes">00</span>:<span id="seconds">00</span>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
