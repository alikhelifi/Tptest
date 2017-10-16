<?php

namespace App\Http\Controllers;

use App\Comment;
use Faker\Provider\fr_BE\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $comments =Comment::all();
            return view('comments.index',compact('comments'));
        }
        return view('auth.login');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(Auth::check())
        {
            $company = Comment::create([
                'body'=>$request->input('body'),
                'url'=>$request->input('url'),
                'user_id'=>Auth::user()->id,
                'commentable_id'=>$request->input('commentable_id'),
                'commentable_type'=>$request->input('commentable_type')
            ]);
            if($company)
            {
                return back()->withInput()
                    ->with('success','Comment created successfully');

            }
        }
        return back()->withInput()
            ->with('errors','Company could to be created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        $findcomment= Comment::find($comment->id);
        if($findcomment->delete())
        {
            return redirect()->route('comments.index')
                ->with('success','Comments deleted successfully');
        }
        return back()->withInput()
            ->with('errors','Comments could to be deleted');
    }
}
