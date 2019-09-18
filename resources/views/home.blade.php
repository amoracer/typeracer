@extends('layouts.app')

@section('content')

<script src="js/index.js"></script>
<script>
var word = JSON.parse('{!! json_encode($difficulty2) !!}')

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

                    <h2>Welkom bij TypeRacer</h2>
                     <img src="">
                    <p id="word" style="font-size: 90px;">Loading...</p>
                    <input type='text' id='input123' name='input123' style="font-size: 20px;">
                    <p id="checker" style="font-size: 20px;">Your answer is correct/incorrect</p>
                        <p id="totaal"></p><p id="score"></p>
                    <span id="minutes">00</span>:<span id="seconds">00</span>
                    <p id="mistakes" style="color: red;">Fout: 0</p>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
