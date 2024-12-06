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
        Schema::create('projets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('utilisateurs');
            $table->foreignId('expert_id')->constrained('experts');
            $table->enum('type', ['solaire', 'éolien', 'hydro']);
            $table->string('location');
            $table->text('details');
            $table->string('image')->nullable();
            $table->enum('status', ['en cours', 'terminé']);
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projets');
    }
};
