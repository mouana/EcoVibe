<?php

namespace App\Http\Controllers\Auth;

use Exception;
use App\Models\Admins;
use App\Models\Expert;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Dotenv\Exception\ValidationException;

class LoginController extends Controller
{
    // User login
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        $user = Utilisateur::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Les informations de connexion sont incorrectes.'], 401);
        }

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'message' => 'Connexion réussie.',
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    // Admin login
  
    
    public function userLogin(Request $request)
    {
        try {
            // Validate the incoming request data
            $validatedData = $request->validate([
                'email' => 'required|email',
                'password' => 'required|string|min:6',
            ]);
    
            // Attempt to find the user in the Admins table
            $user = Admins::where('email', $validatedData['email'])->first();
            $role = null;
    
            if ($user) {
                $role = 'admin'; // User found in Admins table
            } else {
                // If not found in Admins table, attempt to find the user in Experts table
                $user = Expert::where('email', $validatedData['email'])->first();
                if ($user) {
                    $role = 'expert'; // User found in Experts table
                }
            }
    
            // If user is not found in either table
            if (!$user) {
                return response()->json(['message' => 'Utilisateur introuvable.'], 404);
            }
    
            // Check if the provided password matches the stored hashed password
            if (!Hash::check($validatedData['password'], $user->password)) {
                return response()->json(['message' => 'Mot de passe incorrect.'], 401);
            }
    
            // Assign human-readable roles
            $roles = [
                'admin' => 'Administrateur',
                'expert' => 'Expert',
            ];
    
            if (!isset($roles[$role])) {
                return response()->json(['message' => "Rôle utilisateur non autorisé : {$role}"], 403);
            }
    
            // Generate a token with role-based abilities
            $token = $user->createToken('authToken', [$role])->plainTextToken;
    
            // Return a successful response
            return response()->json([
                'message' => "Connexion {$roles[$role]} réussie.",
                'user' => $user,
                'role' => $roles[$role],
                'token' => $token,
            ], 200);
        } catch (ValidationException $e) {
            // Handle validation exceptions
            return response()->json(['errors' => $e->errors()], 422);
        } catch (Exception $e) {
            // Catch any other exceptions and return a detailed error message for debugging
            return response()->json([
                'message' => 'Une erreur interne est survenue.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    
    
}