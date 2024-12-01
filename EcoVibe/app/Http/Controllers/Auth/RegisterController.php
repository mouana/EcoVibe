<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request){
        $validator=Validator::make($request->all(),[
            'nom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|in:client,expert,admin',
            'phone' => 'nullable|string|max:15',
            'birthday' => 'nullable|date',
        ]);
        if ($validator->fails()){
            return response()->json(['errors'=>$validator->errors()],400);
        }

        $user = User::create([
            'nom'=>$request->nom,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'phone' => $request->phone,
            'birthday' => $request->birthday,
        ]);
        return response()->json([
            'message' => 'Utilisateur créé avec succès!',
            'user' => $user
        ], 201);
    }
}
