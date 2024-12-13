<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        // Fetch all reviews
        return response()->json(Review::all());
    }

    public function store(Request $request)
    {
        // Validate and store the review
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'reviewer' => 'required|string|max:255',
            'rating' => 'required|integer|between:1,5',
        ]);

        $review = Review::create($validated);

        return response()->json($review, 201);
    }
}