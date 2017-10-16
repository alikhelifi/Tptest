@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">LARAVEL</div>
            </div>
        </div>
    </div>
</div>
<div class="banner">
    <div id="carousel-example-generic" class="carousel slide">
        {{-- {{ \Illuminate\Support\Facades\Auth::user()->name  }}--}}
        <div class="carousel-inner">
            <div class="item active">
                <img src="_public/img/img7.jpg" alt="" width="1920"  height="480">
                <div class="carousel-caption">
                    <h1>List Of Usres</h1>
                    <a href="users" class="btn">facilis</a>
                </div>
            </div>
            <div class="item">
                <img src="_public/img/banner-image.jpg" alt="">
                <div class="carousel-caption">
                    <h1>List Of Companies</h1>
                    <a href="companies" class="btn">facilis</a>
                </div>
            </div>
            <div class="item">
                <img src="_public/img/img9.jpg" alt="" width="1920"  height="480">
                <div class="carousel-caption">
                    <h1>List Of Projects</h1>
                    <a href="projects" class="btn">facilis</a>
                </div>
            </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
            <i class="fw-icon-chevron-left"></i>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
            <i class="fw-icon-chevron-right"></i>
        </a>
    </div>
</div>
@endsection
