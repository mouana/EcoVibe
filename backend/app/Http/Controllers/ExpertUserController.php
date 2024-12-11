<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Expert;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ExpertUserController extends Controller
{
    /**
     * Attach a user to an expert.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'expert_id' => 'required|exists:experts,id',
            'user_id' => 'required|exists:Utilisateurs,id',
        ]);

        $expert = Expert::findOrFail($validated['expert_id']);
        $expert->utilisateurs()->attach($validated['user_id']);

        return response()->json([
            'message' => 'User successfully attached to expert.',
        ], 201);
    }
    public function show($id)
{
    try {
        // Eager load the 'projets' relationship along with 'utilisateur' for each project
        $expert = Expert::with(['projets.utilisateur'])->findOrFail($id);

        // Format the response to include the user details with each project
        $expertData = [
            'id' => $expert->id,
            'specialty' => $expert->specialty,
            'biography' => $expert->biography,
            'reviews' => $expert->reviews,
            'image' => $expert->image,
            'phone' => $expert->phone,
            'email' => $expert->email,
            'role' => $expert->role,
            'NometPrenom' => $expert->NometPrenom,
            'created_at' => $expert->created_at,
            'updated_at' => $expert->updated_at,
            'projets' => $expert->projets->map(function($projet) {
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
                        'Nom' => $projet->utilisateur->name, 
                        'phone' => $projet->utilisateur->phone,    
                        'email' => $projet->utilisateur->email,    
                    ],
                ];
            })
        ];

        return response()->json($expertData, 200);
    } catch (ModelNotFoundException $e) {
        // Handle case when the expert is not found
        return response()->json(['message' => 'Expert not found.'], 404);
    } catch (\Exception $e) {
        // Handle any other errors
        return response()->json(['error' => $e->getMessage()], 500);
    }
}

    public function destroy(Request $request)
{
    $expertId = $request->input('expert_id');
    $userId = $request->input('user_id');

    if (!$expertId || !$userId) {
        return response()->json(['message' => 'Invalid data'], 422);
    }

    $result = DB::table('expert_user')
        ->where('expert_id', $expertId)
        ->where('user_id', $userId)
        ->delete();

    if ($result) {
        return response()->json(['message' => 'User removed successfully'], 200);
    } else {
        return response()->json(['message' => 'User not found'], 404);
    }
}

}