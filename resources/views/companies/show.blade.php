@extends('layouts.app')
@section('content')
<div class="container">
    <div class="col-md-9 col-lg-9 col-sm-9 pull-left">
        <div class="jumbotron">
            <h1>${{$company->name}}</h1>
            <p class="lead">{{$company->description}}</p>
           {{--<p><a class="btn btn-lg btn-success" href="#" role="button">Get started today</a></p>--}}
        </div>
        <div class="row col-md-12 col-lg-12 col-sm-12" style="background: white;margin: 10px">
            <a href="/projects/create" class="pull-right btn btn-default btn-sm">Add Project</a>
            @foreach($company->projects as $project )
                <div class="col-lg-4 col-sm-4 col-md-4">
                    <h2>{{$project->name}}</h2>
                    <p class="text-danger">{{$project->description}}</p>
                    <p><a class="btn btn-primary" href="/projects/{{$project->id}}" role="button">View Projects »</a></p>
                </div>
            @endforeach
        </div>
    </div>
    <div class="col-sm-3 col-md-3 col-lg-3 pull-right">
        <div class="sidebar-module">
            <h4>Action</h4>
            <ol class="list-unstyled">
                <li><a href="/companies/{{$company->id}}/edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        Edit</a></li>
                {{--<li><a href="/projects/create/{{$company->id}}"><i class="fa fa-plus-square" aria-hidden="true"></i>
                        Add Project</a></li>--}}
                <li><a href="/companies/create"><i class="fa fa-creative-commons" aria-hidden="true"></i>
                        Create new Company</a></li>
                <li><a href="/companies"> <i class="fa fa-building-o" aria-hidden="true"></i>
                        My Companies</a></li>
                <br>
                @if(Auth::user()->role_id == 1)
                    <li><a
                                href="#"
                                onclick="
                                var result = confirm('Are you sure you wish to delete this Companies?');
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
                        <form id="delete-form" action="{{ route('companies.destroy',[$company->id]) }}"
                              method="post" style="display: none;">
                            <input type="hidden" name="_method" value="delete">
                            {{csrf_field()}}
                        </form>
                    </li>
                @endif
            </ol>
        </div>
    </div>    {{--
        <div class="sidebar-module">
            <h4>Archives</h4>
            <ol class="list-unstyled">
                <li><a href="#">March 2014</a></li>
            </ol>
        </div>
    --}}
    </div>
</div>
@endsection