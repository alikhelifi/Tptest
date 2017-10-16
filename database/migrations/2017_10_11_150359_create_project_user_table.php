<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('project_user')){
            Schema::create('project_user', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('user_id')->nullable();
                $table->integer('project_id')->nullable();
                $table->foreign('user_id')->references('id')->on('users');
                $table->foreign('project_id')->references('id')->on('projects');
                $table->timestamps();
            });
        }

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects_user');
    }
}
