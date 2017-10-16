@extends('layouts.app')
@section('content')
    <div class="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
        <div class="panel panel-primary">
            <div class="panel-heading">ALL Comments<a class="pull-right btn btn-primary btn-sm " href="/roles/create">
                    Create new </a> </div>
            <div class="panel-body">
                <ul class="list-group">
                    @foreach($roles as $role)
                        <li class="list-group-item"><a href="/users/{{$role->id}}"> {{$role->name}}</a></li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
@endsection
