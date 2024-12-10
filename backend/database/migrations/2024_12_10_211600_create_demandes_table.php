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
        Schema::create('demandes', function (Blueprint $table) {
            $table->id(); 
            $table->foreignId('user_id')->constrained('utilisateurs'); 
            $table->foreignId('service_id')->constrained('services');
            $table->string('nom');
            $table->string('email');
            $table->text('description'); 
            $table->decimal('prix', 8, 2); 
            $table->string('status')->default('pending');
            $table->timestamps(); 
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('demandes');
    }
};
