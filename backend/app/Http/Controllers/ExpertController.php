<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Expert;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ExpertController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $experts = Expert::with(['projets', 'utilisateurs'])->get();
        return response()->json($experts, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Log::info('Store method called');

        // Validation des données d'expert
        $validator = Validator::make($request->all(), [
            'specialty' => 'required|string|max:255',
            'biography' => 'nullable|string',
            'reviews' => 'nullable|integer|min:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'phone' => 'required|string|min:10',
            'email' => 'required|string|max:255',
            'nom_prenom' => 'required|string|max:50',
            'password' => 'required|string|min:6|regex:/[0-9]/',

        ]);

        if ($validator->fails()) {
            Log::error('Validation failed', $validator->errors()->toArray());
            return response()->json([
                'message' => 'Erreur de validation des données',
                'errors' => $validator->errors()
            ], 400);
        }

        // Handle the image upload if provided
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('expert_images', 'public');
            Log::info('Image uploaded', ['path' => $imagePath]);
        } else {
            $imagePath = null;
        }

        try {
            $expert = Expert::create([
                'specialty' => $request->specialty,
                'biography' => $request->biography,
                'reviews' => $request->reviews ?? 0,
                'image' => $imagePath,
                'phone' => $request->phone,
                'email' => $request->email,
                'nom_prenom' => $request->nom_prenom,
                'password' => $request->password,
                'role' => 'expert'
            ]);

            Log::info('Expert created', ['expert' => $expert]);

            return response()->json([
                'message' => 'Expert créé avec succès !',
                'expert' => $expert
            ], 201);
        } catch (Exception $e) {
            Log::error('Error creating expert', ['error' => $e->getMessage()]);
            return response()->json([
                'message' => 'Erreur lors de la création de l\'expert',
                'error' => $e->getMessage()
            ], 500);
        }
    }




    /**
     * Display the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            // Find the expert by ID or throw an exception if not found
            $expert = Expert::findOrFail($id);

            // Validate the request data
            $validatedData = $request->validate([
                'nom_prenom' => 'required|string|max:50',
                'user_id' => 'sometimes|exists:utilisateurs,id',
                'specialty' => 'sometimes|string|max:255',
                'biography' => 'nullable|string',
                'reviews' => 'nullable|integer|min:0',
                'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
                'phone' => 'required|string|min:10|max:15',
                'email' => 'required|string|email|max:255|unique:experts,email,' . $id,
            ]);

            // Handle image upload if provided
            if ($request->hasFile('image')) {
                // Delete the old image if it exists
                if ($expert->image) {
                    Storage::disk('public')->delete($expert->image);
                }

                // Store the new image and update the validated data
                $validatedData['image'] = $request->file('image')->store('expert_images', 'public');
            }

            // Update the expert with validated data
            $expert->update($validatedData);

            // Return the updated expert data
            return response()->json([
                'message' => 'Expert updated successfully.',
                'expert' => $expert,
            ], 200);
        } catch (ModelNotFoundException $e) {
            // Handle case when the expert is not found
            return response()->json([
                'message' => 'Expert not found.',
            ], 404);
        } catch (\Exception $e) {
            // Log the error for better insight
            Log::error('Error while updating expert: ' . $e->getMessage());

            // Return a detailed error message
            return response()->json([
                'message' => 'An error occurred while updating the expert.',
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(), // Optional: to help debug the stack trace
            ], 500);
        }
    }
    public function updatePassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'old_password' => 'required|string|min:6',
            'new_password' => 'required|string|min:6|confirmed',
        ]);

        $expert = Expert::where('email', $request->email)->first();

        if (!$expert || !Hash::check($request->old_password, $expert->password)) {
            return response()->json(['message' => 'Incorrect old password.'], 401);
        }

        $expert->password = Hash::make($request->new_password);
        $expert->save();

        return response()->json(['message' => 'Password updated successfully.'], 200);
    }


    public function show($id)
    {
        try {
            // Find the expert by ID or fail
            $expert = Expert::findOrFail($id);

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

    public function destroy(Expert $expert, $id)
    {
        $expert = Expert::findOrFail($id);

        if ($expert->image) {
            Storage::disk('public')->delete($expert->image);
        }
        $expert->delete();

        return response()->json(['message' => 'Expert deleted successfully.'], 200);
    }
    public function createUser(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'expert_id' => [
                'required',
            ],
            'user_id' => 'required|exists:users,id',
        ]);

        try {
            // Fetch the expert using findOrFail for better error handling
            $expertId = $request->input('expert_id');
            $expert = Expert::findOrFail($expertId);

            // Fetch the user using findOrFail for better error handling
            $userId = $request->input('user_id');
            $user = Utilisateur::findOrFail($userId);

            // Attach the user to the expert
            $expert->utilisateurs()->attach($userId);

            // Return a success response
            return response()->json([
                'message' => 'User successfully assigned to the expert.',
                'expert_id' => $expert->id,
                'user_id' => $user->id,
            ], 200);
        } catch (ModelNotFoundException $e) {
            // Handle cases where the expert or user is not found
            return response()->json([
                'message' => 'The specified expert or user could not be found.',
                'error' => $e->getMessage(),
            ], 404);
        } catch (\Exception $e) {
            // Handle any other exceptions
            return response()->json([
                'message' => 'Failed to assign user to expert.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function profile(Request $request)
    {
        // Ensure the authenticated user is fetched
        $expert = $request->user();

        if (!$expert) {
            return response()->json([
                'message' => 'Utilisateur non authentifié.'
            ], 401);
        }

        // Fetch the expert's information and their related projects (adjust relationship name if needed)
        try {
            $expert->load('projets'); // Replace 'projects' with the actual relationship name
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Erreur lors de la récupération des projets.',
                'error' => $e->getMessage()
            ], 500);
        }

        return response()->json([
            'message' => 'Profil récupéré avec succès.',
            'expert' => $expert,
        ], 200);
    }
}