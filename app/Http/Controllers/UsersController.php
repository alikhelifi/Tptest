<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Company;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::check())
        {
           $users=User::all();
            return view('users.index',compact('users'));
        }
/*        return view('auth.login');*/

    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('users.create');
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

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $user=User::find($user->id);
        return view('users.show',['user'=>$user]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
            $user=User::find($user->id);
            return view('users.edit',['user'=>$user]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $userupdate= User::where('id',$user->id)
            ->update([
                'name'=>$request->input('name'),
                'role_id'=>$request->input('role_id')
            ]);
        if($userupdate)
        {
            return redirect()->route('users.edit',['company'=>$user->id])
                ->with('success','User update successfully');
        }
        return back()->withInput();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user,Company $comment)
    {
        $finduser= User::find($user->id);
/*        $findcomment=Comment::find($comment->user_id);*/
        if(($finduser->delete()) /*&& ($findcomment->delete())*/)
        {
            return redirect()->route('users.index')
                ->with('success','Users deleted successfully');
        }
        return back()->withInput()
            ->with('errors','Users could to be deleted');
    }
}
