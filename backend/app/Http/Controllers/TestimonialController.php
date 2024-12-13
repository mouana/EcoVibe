<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    /**
     * Get all testimonials.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Retrieve all testimonials from the database
        $testimonials = Testimonial::all();
        
        // Return testimonials as JSON
        return response()->json($testimonials);
    }

    /**
     * Store a new testimonial.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'text' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Create a new testimonial
        $testimonial = Testimonial::create([
            'name' => $request->name,
            'position' => $request->position,
            'text' => $request->text,
            'rating' => $request->rating,
            'image' => $request->image,
        ]);

        // Return the created testimonial as JSON
        return response()->json($testimonial, 201);
    }
}