<?php

namespace App\Http\Controllers;

use App\Models\Projet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            // Eager load the 'utilisateur', 'expert', and 'cartes' relationships
            $projets = Projet::with(['utilisateur', 'expert', 'cartes'])->get();
    
            // Iterate over each project and add the user's 'NometPrenom' and other details
            $projetsData = $projets->map(function($projet) {
                return [
                    'id' => $projet->id,
                    'user_id' => $projet->user_id,
                    'expert_id' => $projet->expert_id,
                    'type' => $projet->type,
                    'location' => $projet->location,
                    'details' => $projet->details,
                    'status' => $projet->status,
                    'image' => $projet->image,
                    'created_at' => $projet->created_at,
                    'updated_at' => $projet->updated_at,
                    'utilisateur' => [
                        'NometPrenom' => $projet->utilisateur->name, 
                        'phone' => $projet->utilisateur->phone,     
                        'email' => $projet->utilisateur->email,     
                    ],
                    'expert' => $projet->expert, 
                    'cartes' => $projet->cartes, 
                ];
            });
    
            return response()->json($projetsData, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'user_id' => 'required|exists:utilisateurs,id',
                'expert_id' => 'required|exists:experts,id',
                'type' => 'required|string|in:solaire,éolien,hydro',
                'location' => 'required|string|max:255',
                'details' => 'nullable|string',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                'status' => 'required|string|in:en cours,terminé',
            ]);
    
            if ($request->hasFile('image')) {
                $validatedData['image'] = $request->file('image')->store('projet_images', 'public');
            }
    
            $projet = Projet::create($validatedData);
    
            // Handle related 'cartes' if provided
            if ($request->has('cartes')) {
                $projet->cartes()->attach($request->cartes);
            }
    
            return response()->json($projet, 201);
        } catch (\Exception $e) {
            Log::error('Error storing project: ' . $e->getMessage());
            return response()->json(['error' => 'An error occurred while creating the project.'], 500);
        }
    }
    

    /**
     * Display the specified resource.
     */
    
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Projet $projet, $id)
{
    $projet = Projet::findOrFail($id);

    try {
        $validatedData = $request->validate([
            'user_id' => 'sometimes|exists:utilisateurs,id',
            'expert_id' => 'sometimes|exists:experts,id',
            'type' => 'sometimes|string|max:255',
            'location' => 'sometimes|string|max:255',
            'details' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'status' => 'sometimes|string|max:50',
        ]);

        if ($request->hasFile('image')) {
            if ($projet->image) {
                Storage::disk('public')->delete($projet->image); // Delete old image
            }
            $path = $request->file('image')->store('projet_images', 'public');
            $projet->image = $path; // Set image path manually
        }

        $projet->update($validatedData);

        return response()->json([
            'message' => 'Projet updated successfully.',
            'projet' => $projet->fresh(), // Ensure updated data is retrieved
        ], 200);
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}

public function show($id)
{
    try {
        // Find the expert by ID or fail
        $expert = Projet::findOrFail($id);

        // Return the expert data
        return response()->json([
            'message' => 'Expert retrieved successfully.',
            'expert' => $expert,
        ], 200);
    } catch (ModelNotFoundException $e) {
        // Handle case when the expert is not found
        return response()->json([
            'message' => 'Expert not found.',
        ], 404);
    }
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
{
    DB::beginTransaction();
    try {
        $projet = Projet::findOrFail($id);

        $projet->cartes()->delete();

        // Delete the projet
        $projet->delete();

        DB::commit();

        return response()->json(['message' => 'Projet and related Cartes deleted successfully.'], 200);
    } catch (\Exception $e) {
        DB::rollBack();
        return response()->json(['error' => $e->getMessage()], 500);
    }
}
// public function delete($id)
// {
//     DB::beginTransaction();
//     try {
//         // Find the project by its ID
//         $projet = Projet::findOrFail($id);

//         // Check if the project is associated with an expert and/or user
//         $user = $projet->utilisateur;
//         $expert = $projet->expert;


//         // Delete related 'cartes' or any other associated data
//         $projet->cartes()->delete();

//         // If the project has an image, delete it from storage
//         if ($projet->image) {
//             Storage::disk('public')->delete($projet->image);
//         }

//         // Delete the project itself
//         $projet->delete();

//         DB::commit();

//         return response()->json(['message' => 'Projet and related Cartes deleted successfully.'], 200);
//     } catch (\Exception $e) {
//         DB::rollBack();
//         return response()->json(['error' => $e->getMessage()], 500);
//     }
}