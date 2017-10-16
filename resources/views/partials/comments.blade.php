
<div class="row">
    <div class="col-md-9 col-sm-9  col-xs-12 col-lg-9">

        <!-- Fluid width widget -->
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">
                    <span class="glyphicon glyphicon-comment"></span> 
                    Recent Comments
                </h3>
            </div>
            <div class="panel-body">
                <ul class="media-list">
                    @foreach($comments as $comment )
                        <li class="media">
                            <div class="media-left">
                                <img src="http://placehold.it/60x60" class="img-circle">
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">
                                    <a href="/project/{{$comment->user->id}}/view" >{{$comment->user->first_name}}{{$comment->user->last_name}}
                                        {{$comment->user->email}}</a>
                                    <br>
                                    <small>
                                        commented on  {{$comment->created_at}}
                                    </small>
                                </h4>
                                <p>
                                    {{$comment->body}}
                                </p>
                                Proof:
                                <p>
                                    {{$comment->url}}
                                </p>
                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
        </div>
    </div>
