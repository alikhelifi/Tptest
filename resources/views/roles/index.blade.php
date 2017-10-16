@extends('layouts.app')
@section('content')
    <div class="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
        <div class="panel panel-primary">
            <div class="panel-heading">ALL Comments<a class="pull-right btn btn-primary btn-sm " href="/roles/create">
                    Create new </a> </div>
            <div class="panel-body">
                <ul class="list-group">
                    <table border="0" align="center">
                        <tr>
                            <th>Name</th>
                            <th>Role</th>

                        </tr>
                        @foreach($roles as $role)
                            {{--
                                                    <li class="list-group-item"><a href="/companies/{{$comment->id}}"> {{$company->name}}</a></li>
                            --}}

                            <tr>
{{--
                                <td>{{$user->role->name}}</td>
--}}
                                <td>{{$role->name}}</td>

                        @endforeach
                    </table>
                </ul>
            </div>
        </div>
    </div>
@endsection
