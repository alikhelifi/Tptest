<?php

namespace App\Http\Controllers;

use App\Project;
use App\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class ProjectsController extends Controller
{
    public function index()
    {
        if (Auth::check()) {
            $projects = Project::all();
            return view('projects.index', ['projects' => $projects]);
        }
        return view('auth.login');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($company_id = null)
    {
        //
        $companies =null;
        if(!$company_id)
        {
            $companies = Company::where('user_id',Auth::user()->id)->get();

        }
        return view('projects.create',['company_id'=>$company_id,'companies'=>$companies]);

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
            $project = Project::create([
                'name'=>$request->input('name'),
                'description'=>$request->input('description'),
                'company_id'=>$request->input('company_id'),
                'user_id'=>Auth::user()->id
            ]);
            if($project)
            {
                return redirect()->route('projects.show',['project'=>$project->id])
                    ->with('success','Project created successfully');

            }
        }
        return back()->withInput()
            ->with('errors','Company could to be created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        $project=Project::find($project->id);
        $comments=$project->comments;
        return view('projects.show',['project'=>$project,'comments'=>$comments]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        $project=Project::find($project->id);
        $comments = $project->comments;
        return view('projects.edit',['project'=>$project,'comments'=>$comments]);
    }
    public function view()
    {
        return view('projects.view');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        //
        $companyupdate= Project::where('id',$project->id)
            ->update([
                'name'=>$request->input('name'),
                'description'=>$request->input('description')
            ]);
        if($companyupdate)
        {
            return redirect()->route('projects.show',['project'=>$project->id])
                ->with('success','Company update successfully');
        }
        return back()->withInput();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $findcompany= Project::find($project->id);
        if($findcompany->delete())
        {
            return redirect()->route('projects.index')
                ->with('success','Company deleted successfully');
        }
        return back()->withInput()
            ->with('errors','Company could to be deleted');
    }
}
