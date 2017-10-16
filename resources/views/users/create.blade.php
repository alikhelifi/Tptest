@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="col-md-9 col-lg-9 col-sm-9 pull-left">
            <h1>Create New Users</h1>
            <div class="row col-md-12 col-lg-12 col-sm-12" style="background: white; margin: 10px">
                <form method="post" action="{{ route('users.create') }}">
                    {{csrf_field()}}
                    <div class="from_group">
                        <label for="user_name">Name<span class="required">*</span> </label>
                        <input
                                placeholder="entre name"
                                id="user_name"
                                required
                                name="name"
                                spellcheck="false"
                                class="form-control"
                                />
                    </div>
                    <br>
                    <div class="from_group">
                        <label for="company_name">Email<span class="required">*</span> </label>
                        <input
                                placeholder="entre emaile"
                                id="email"
                                required
                                name="email"
                                spellcheck="false"
                                class="form-control"
                                />
                    </div>
                    <br>
                    <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                        <label for="password" class="col-md-4 control-label">Password</label>

                        <div class="col-md-6">
                            <input id="password" type="password" class="form-control" name="password" required>

                            @if ($errors->has('password'))
                                <span class="help-block">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                            @endif
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <div class="form-group">
                            <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary pull-center"  value="submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>   {{--
        <div class="sidebar-module">
            <h4>Archives</h4>
            <ol class="list-unstyled">
                <li><a href="#">March 2014</a></li>
            </ol>
        </div>
    --}}
@endsection