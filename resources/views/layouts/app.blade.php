<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

     <title>Laravel</title>
    <link href="{{ asset('_public/css/custom-styles.css') }}" rel="stylesheet">

    <!-- Scripts -->


    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="http://use.fontawesome.com/874dbadbd7.js"></script>
</head>
<body>
<div id="app-layout">
    <div class="menu">
        <div class="navbar">
            <div class="container">
                <div class="collapse navbar-collapse" >

                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <ul class="nav navbar-nav">
                    <a class="navbar-brand" href="{{ url('/home') }}" style="color: white">
                     Home
                    </a>
                    </ul>

                </div>

                <!-- Right Side Of Navbar -->
                        &nbsp;
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                        @guest
                        <li><a href="{{ route('login') }}">Login</a></li>
                        <li><a href="{{ route('register') }}">Register</a></li>
                        @else
                            <li><a href="{{ route('companies.index') }}"><i class="fa fa-building" aria-hidden="true"></i>
                                    Companies</a></li>
                            <li><a href="{{ route('projects.index') }}"><i class="fa fa-briefcase" aria-hidden="true"></i>
                                    Projects</a></li>
                            <li><a href="{{ route('tasks.index') }}"><i class="fa fa-tasks" aria-hidden="true"></i>
                                    Tasks</a></li>

                        @if(Auth::user()->role_id == 1)
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                       Admin <span class="caret"></span>
                                    </a>

                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="{{ route('projects.index') }}"><i class="fa fa-tasks" aria-hidden="true"></i>
                                                All Projects</a></li>
                                        <li><a href="{{ route('users.index') }}"><i class="fa fa-tasks" aria-hidden="true"></i>
                                                All Users</a></li>
                                        <li><a href="{{ route('tasks.index') }}"><i class="fa fa-tasks" aria-hidden="true"></i>
                                               All Tasks</a></li>
                                        <li><a href="{{ route('companies.index') }}"><i class="fa fa-tasks" aria-hidden="true"></i>
                                               All Companies</a></li>
                                        <li><a href="{{ route('roles.index') }}"><i class="fa fa-tasks" aria-hidden="true"></i>
                                                All Roles</a></li>
                                        <li><a href="{{ route('comments.index') }}"><i class="fa fa-tasks" aria-hidden="true"></i>
                                                All Comments</a></li>
                                    </ul>
                                </li>
                         @endif

                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            Logout
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
            <br>
            <br>
        @include('partials.errors')
        @include('partials.success')
        @yield('content')
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
