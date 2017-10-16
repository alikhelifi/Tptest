@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="col-md-9 col-lg-9 col-sm-9 pull-left">
            <h1>Create New Project</h1>
            <div class="row col-md-12 col-lg-12 col-sm-12" style="background: white; margin: 10px">
                <form method="post" action="{{ route('projects.store') }}">
                    {{csrf_field()}}
                    <div class="from_group">
                        <label for="company_name">Name<span class="required">*</span> </label>
                        <input
                                placeholder="entre name"
                                id="project_name"
                                required
                                name="name"
                                spellcheck="false"
                                class="form-control"
                                />
                    </div>
                    <br>
                    @if($companies != null)
                    <div class="form-group">
                        <label for="company_content">Select company</label>
                        <select name="company_id" class="form-control">

                            @foreach($companies as $company)
                            <option value="{{$company->id}}">
                                {{$company->name}}
                            </option>
                            @endforeach

                        </select>
                    </div>
                    @endif
                    <br>
                    <div class="from_group">
                        <label for="company_content">Description</label>
                        <textarea
                                placeholder="entre description"
                                style="resize: vertical"
                                id="project_content"
                                required
                                name="description"
                                rows="5"
                                spellcheck="false"
                                class="form-control autosize-target text-left">
                        </textarea>
                    </div>
                    @if($companies== null)
                    <input
                            class="form-control"
                            type="hidden"
                            name="company_id"
                            value="{{$company_id}}"
                            />
                    @endif
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
                    <li><a href="/projects">My Projects</a></li>
                </ol>
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