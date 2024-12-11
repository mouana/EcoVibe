<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        // Drop foreign key constraint
        Schema::table('experts', function (Blueprint $table) {
            $table->dropForeign(['user_id']); // Drop the foreign key constraint
        });

        // Drop the user_id column
        Schema::table('experts', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        // Add the user_id column back
        Schema::table('experts', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
        });

        // Re-add the foreign key constraint
        Schema::table('experts', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('utilisateurs')->onDelete('cascade'); // Adjust as needed for your foreign key
        });
    }
};