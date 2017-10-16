@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="col-md-9 col-lg-9 col-sm-9 pull-left">
            <div class="row col-md-12 col-lg-12 col-sm-12" style="background: white; margin: 10px">
                <form method="post" action="{{ route('users.update',[$user->id]) }}">
                    {{csrf_field()}}
                    <input type="hidden" name="_method" value="put">
                    <div class="from_group">
                        <label for="user_name">Name<span class="required">*</span> </label>
                        <input
                                placeholder="entre name"
                                id="user_name"
                                required
                                name="name"
                                spellcheck="false"
                                class="form-control"
                                value="{{$user->name}}"
                        />
                    </div>
                    <br>
                    <div class="from_group">
                        <label for="company_content">Role<span class="required">*</span></label>
                        <input
                                placeholder="entre name"
                                id="user_role"
                                required
                                name="role_id"
                                spellcheck="false"
                                class="form-control"
                                value="{{$user->role_id}}"
                        />
                    </div>
                    <br>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="submit"/>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3 pull-right">
            <div class="sidebar-module">
                <h4>Action</h4>
                <ol class="list-unstyled">
                    <li><a href="/users/{{$user->id}}">View Users</a></li>
                </ol>
            </div>
        </div>
    </div>
@endsection