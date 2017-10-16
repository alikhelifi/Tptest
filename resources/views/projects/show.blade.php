@extends('layouts.app')
@section('content')
<div class="container">
    <div class="col-sm-3 col-md-3 col-lg-3 pull-right">
        <div class="sidebar-module">
            <h4>Action</h4>
            <ol class="list-unstyled">
                <li><a href="/projects/{{$project->id}}/edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        Edit</a></li>
                <li><a href="/projects/create"><i class="fa fa-creative-commons" aria-hidden="true"></i>
                        Create new Project</a></li>
                <li><a href="/projects"><i class="fa fa-building-o" aria-hidden="true"></i>
                        My Project</a></li>
                <br>
                @if(($project->user_id == Auth::user()->id) && (Auth::user()->role_id == 1)  )
                    <li><a
                                href="#"
                                onclick="
                                var result = confirm('Are you sure you wish to delete this projects?');
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
                        <form id="delete-form" action="{{ route('projects.destroy',[$project->id]) }}"
                              method="post" style="display: none;">
                            <input type="hidden" name="_method" value="delete">
                            {{csrf_field()}}
                        </form>
                    </li>
                @endif
            </ol>
        </div>
    </div>
    <div class="col-md-9 col-lg-9 col-sm-9 pull-left">
        <div class="well well-lg">
            <h1>${{$project->name}}</h1>
            <p class="lead">{{$project->description}}</p>
        </div>
        <div class="row col-md-12 col-lg-12 col-sm-12" style="background: white;margin: 10px">
                <br>
            @include('partials.comments')


            <div class="row container-fluid">
                <form method="post" action="{{ route('comments.store') }}">
                    {{csrf_field()}}
                    <input type="hidden" name="commentable_type" value="App\Project">
                    <input type="hidden" name="commentable_id" value="{{$project->id}}">

                    <br>
                    <div class="from_group">
                        <label for="comment_content">Comment</label>
                            <textarea
                                    placeholder="entre description"
                                    style="resize: vertical"
                                    id="company_comment"
                                    required
                                    name="body"
                                    rows="3"
                                    spellcheck="false"
                                    class="form-control autosize-target text-left">
                            </textarea>
                    </div>
                    <br>
                    <div class="from_group">
                        <label for="url_name">Url<span class="required">*</span> </label>
                        <input
                                placeholder="entre url"
                                id="url_name"
                                required
                                name="url"
                                rows="2"
                                spellcheck="false"
                                class="form-control"
                                />
                    </div>
                    <br>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="submit"/>
                    </div>
                </form>
            </div>

           @foreach($project->comments as $comment )
                <div class="col-lg-4 col-sm-4 col-md-4">
                    <h2>{{$comment->body}}</h2>
                    <p class="text-danger">{{$comment->url}}</p>
                    <p><a class="btn btn-primary" href="/projects/{{$project->id}}" role="button">View Projects »</a></p>
                </div>
            @endforeach
        </div>
    </div>
</div>
@endsection