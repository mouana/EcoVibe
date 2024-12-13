<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestimonialsTable extends Migration
{
    public function up()
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // User name
            $table->string('position'); // User position in the company
            $table->text('text'); // Testimonial text
            $table->integer('rating'); // Rating out of 5
            $table->string('image'); // Path to the user's image
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('testimonials');
    }
}