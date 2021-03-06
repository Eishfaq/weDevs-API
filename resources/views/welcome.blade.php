<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Car Haat</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <style type="text/css">
        body {
            font-family: 'Poppins', sans-serif !important;
        }

        .loader {
            animation: spin 1s infinite linear;
            border: solid 2vmin transparent;
            border-radius: 50%;
            border-right-color: #09f;
            border-top-color: #09f;
            box-sizing: border-box;
            height: 20vmin;
            left: calc(50% - 10vmin);
            position: fixed;
            top: calc(50% - 10vmin);
            width: 20vmin;
            z-index: 1;
        }

        .loader:before {
            animation: spin 2s infinite linear;
            border: solid 2vmin transparent;
            border-radius: 50%;
            border-right-color: #3cf;
            border-top-color: #3cf;
            box-sizing: border-box;
            content: "";
            height: 16vmin;
            left: 0;
            position: absolute;
            top: 0;
            width: 16vmin;
        }

        .loader:after {
            animation: spin 3s infinite linear;
            border: solid 2vmin transparent;
            border-radius: 50%;
            border-right-color: #6ff;
            border-top-color: #6ff;
            box-sizing: border-box;
            content: "";
            height: 12vmin;
            left: 2vmin;
            position: absolute;
            top: 2vmin;
            width: 12vmin;
        }

        @keyframes spin {
            100% {
                transform: rotate(360deg);
            }
        }
    </style>
</head>

<body>
<div id="app">
    <app></app>
</div>
<div class="preloader" id="preloader">
    <div class="loader">
    </div>
</div>
<script src="{{asset('js/app.js')}}"></script>
</body>

</html>
