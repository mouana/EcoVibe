<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('consommations', function (Blueprint $table) {
            $table->id();
            $table->enum('type',['solaire', 'éolien', 'hydraulique']);
            $table->date('consumation_date');
            $table->decimal('energy_generated', 8, 2);
            $table->decimal('energy_consumed', 8, 2);
            $table->decimal('energy_exported', 8, 2);
            $table->timestamps();
            $table->foreignId('user_id')->constrained('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('consommations');
    }
};
