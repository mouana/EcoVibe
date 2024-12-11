<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /**
     * Enregistrer un nouvel utilisateur.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        // Validation des données d'inscription
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:utilisateurs',
            'password' => 'required|string|min:6|confirmed',
            'phone' => 'required|string|max:15',
            'birthday' => 'required|date',
            // 'role' => ['required', Rule::in(['client', 'expert', 'admin'])],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Erreur de validation des données',
                'errors' => $validator->errors()
            ], 400);
        }

        // Création de l'utilisateur
        try {
            $user = Utilisateur::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'phone' => $request->phone,
                'birthday' => $request->birthday,
                'role' => 'client',
            ]);

            return response()->json([
                'message' => 'Inscription réussie !',
                'user' => $user
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erreur lors de l\'inscription',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}