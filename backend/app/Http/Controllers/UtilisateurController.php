<?php

namespace App\Http\Controllers;

use App\Models\Expert;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UtilisateurController extends Controller
{
    public function getAllUsers()
    {
        // Fetch and return all users
        $users = Utilisateur::all();
        return response()->json($users);
    }

    public function showUser($id)
    {
        // Show a specific user by ID
        $user = Utilisateur::findOrFail($id);
        return response()->json($user);
    }
    public function show()
{
    // Get the authenticated user
    $user = Auth::user();

    // Check if the user is authenticated
    if (!$user) {
        return response()->json(['message' => 'Unauthenticated.'], 401);
    }

    // Return the authenticated user's information
    return response()->json($user);
}



    // Update user information

    public function update(Request $request)
    {
        Log::info('Starting update process.');
    
        $request->validate([
            'name' => 'string|max:255',
            'email' => 'email|max:255|unique:utilisateurs,email,' . Auth::id(),
            'password' => 'nullable|min:6|confirmed',
            'phone' => 'nullable|string|max:20',
            'birthday' => 'nullable|date',
        ]);
    
        $user = Auth::user();
    
        if (!$user) {
            Log::error('User not authenticated.');
            return response()->json(['message' => 'Unauthenticated.'], 401);
        }
    
        Log::info('Authenticated user:', $user->toArray());
    
        $data = $request->only(['name', 'email', 'phone', 'birthday', 'password']);
        if (!empty($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        }
    
        Log::info('Updating data:', $data);
    
        $user->fill(array_filter($data));
    
        if ($user->save()) {
            Log::info('User updated successfully.');
            return response()->json([
                'message' => 'User information updated successfully.',
                'user' => $user->refresh(),
            ]);
        } else {
            Log::error('Failed to save user.');
            return response()->json(['message' => 'Failed to update user information.'], 500);
        }
    }
    

    
    
    // Delete user account
    public function destroy()
    {
        // Get the authenticated user
        $user = Auth::user();

        // Delete the account
        $user->delete();

        return response()->json([
            'message' => 'Account deleted successfully.'
        ]);
    }
}