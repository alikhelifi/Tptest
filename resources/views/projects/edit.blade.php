@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="col-md-9 col-lg-9 col-sm-9 pull-left">
            <div class="row col-md-12 col-lg-12 col-sm-12" style="background: white; margin: 10px">
                <form method="post" action="{{ route('companies.update',[$project->id]) }}">
                    {{csrf_field()}}
                    <input type="hidden" name="_method" value="put">
                    <div class="from_group">
                        <label for="company_name">Name<span class="required">*</span> </label>
                        <input
                                placeholder="entre name"
                                id="company_name"
                                required
                                name="name"
                                spellcheck="false"
                                class="form-control"
                                value="{{$project->name}}"
                                />
                    </div>
                    <br>
                    <div class="from_group">
                        <label for="company_content">Description</label>
                        <textarea
                                placeholder="entre description"
                                style="resize: vertical"
                                id="company_content"
                                required
                                name="description"
                                rows="5"
                                spellcheck="false"
                                class="form-control autosize-target text-left">
                                {{$project->description}}
                        </textarea>
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
                    <li><a href="/companies/{{$project->id}}">View companies</a></li>
                    <li><a href="#">Delete</a></li>
                    <li><a href="#">Add new user</a></li>
                </ol>
            </div>
        </div>
    </div>
@endsection