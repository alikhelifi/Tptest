<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'first_name',
        'last_name',
        'middel_name',
        'city',
        'role_id',
        'pays' ,
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function companise()
    {
        return $this->hasMany('App\Company') ;
    }
    public function role()
    {
        return $this->belongsTo('App\Role') ;
    }
    public function tasks()
    {
        return $this->belongsToMany('App\Task') ;
    }
    public function projects()
    {
        return $this->hasMany('App\Project','id','user_id') ;
    }
    public function  comments()
    {
        return $this->belongsTo('App\Comment');
    }
}
