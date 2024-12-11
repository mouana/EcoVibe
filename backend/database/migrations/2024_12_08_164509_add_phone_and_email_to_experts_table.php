<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPhoneAndEmailToExpertsTable extends Migration
{
    public function up()
    {
        Schema::table('experts', function (Blueprint $table) {
            $table->string('phone')->unique()->nullable();
            $table->string('email')->unique()->nullable(); 
        });
    }

    public function down()
    {
        Schema::table('experts', function (Blueprint $table) {
            $table->dropColumn(['phone', 'email']);
        });
    }
}