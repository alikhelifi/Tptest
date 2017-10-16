@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="col-md-9 col-lg-9 col-sm-9 pull-left">
            <div class="jumbotron">
                <h1>${{$user->name}}</h1>
                <p class="lead">{{$user->email}}</p>
                <p class="lead">{{$user->role->name}}</p>
                {{--<p><a class="btn btn-lg btn-success" href="#" role="button">Get started today</a></p>--}}
            </div>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3 pull-right">
            <div class="sidebar-module">
                <h4>Action</h4>
                <ol class="list-unstyled">
                    <li><a href="/users/{{$user->id}}/edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            Edit</a></li>
                    {{--<li><a href="/projects/create/{{$company->id}}"><i class="fa fa-plus-square" aria-hidden="true"></i>
                            Add Project</a></li>--}}
                    <li><a href="/users/create"><i class="fa fa-creative-commons" aria-hidden="true"></i>
                            Create new Users</a></li>
                    <li><a href="/users"> <i class="fa fa-building-o" aria-hidden="true"></i>
                            List Users</a></li>
                    <br>
                    <li><a
                                href="#"
                                onclick="
                            var result = confirm('Are you sure you wish to delete this Users?');
                                if(result)
                                {
                                event.preventDefault();
                                document.getElementById('delete-form').submit();
                                }
                            "
                        >
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            Delete
                        </a>
                        <form id="delete-form" action="{{ route('users.destroy',[$user->id]) }}"
                              method="post" style="display: none;">
                            <input type="hidden" name="_method" value="delete">
                            {{csrf_field()}}
                        </form>
                    </li>
                </ol>
            </div>
        </div>
    </div>
@endsection