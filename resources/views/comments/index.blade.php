@extends('layouts.app')
@section('content')
{{--
    <div class="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
--}}

        <div class="panel panel-primary" >
            <div class="panel-heading">ALL Comments</div>
            <div class="panel-body">
                <ul class="list-group">
                    <form>
                        {{csrf_field()}}
                        <table border="0" align="center" class="table table-hover">
                        <tr>
                            <th>Role</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Comments</th>
                            <th>Projects</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    @foreach($comments as $comment)
                                            {{--
                                                                    <li class="list-group-item"><a href="/companies/{{$comment->id}}"> {{$company->name}}</a></li>
                                            --}}
                            <tr class="active">
                                <td>{{$comment->user->role->name}}</td>
                                <td>{{$comment->user->name}}</td>
                                <td>{{$comment->user->email}}</td>
                                <td>{{$comment->body}}</td>
                                <td>{{$comment->project->name}}</td>
                                <td>{{$comment->created_at}}</td>
                                <td><a
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
                                                <input type="submit" class="btn btn-primary" value="Delete"/>

                                        </a>
                                        <form id="delete-form" action="{{ route('comments.destroy',[$comment->id]) }}"
                                              method="post" style="display: none;">
                                            <input type="hidden" name="_method" value="delete">
                                            {{csrf_field()}}
                                        </form>
                                </td>
                            </tr>
                            @endforeach
                        </table>
                    </form>
                </ul>
            </div>
        </div>
</div>
@endsection
