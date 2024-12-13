<?php

namespace App\Http\Controllers;

use App\Models\Admins;
use App\Models\Expert;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Utilisateur; // Assuming you have a Utilisateur model for users

class AdminsController extends Controller
{
    public function index()
    {
        // Return all admins
        return Admins::all();
    }

    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:admins,email',
            'password' => 'required|min:8|confirmed',  
        ]);

        try {
            // Create a new admin
            $admin = Admins::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // Return a success response
            return response()->json([
                'message' => 'Admin created successfully',
                'admin' => $admin,
            ], 201);

        } catch (\Exception $e) {
            // Handle any errors during the creation process
            return response()->json([
                'message' => 'Error creating admin',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function show($id)
    {
        // Return a specific admin by ID
        $admin = Admins::findOrFail($id);
        return response()->json($admin);
    }

    public function update(Request $request, $id)
    {
        $admin = Admins::findOrFail($id);

        // Update admin information
        $admin->update($request->only(['name', 'email']));

        if ($request->has('password')) {
            $admin->update(['password' => Hash::make($request->password)]);
        }

        return response()->json($admin);
    }

    public function destroy($id)
    {
        // Delete an admin
        Admins::destroy($id);
        return response()->json(['message' => 'Admin deleted']);
    }

    // New method to manage all users (CRUD operations)
    
    

    public function updateUser(Request $request, $id)
    {
        // Update a user's details
        $user = Utilisateur::findOrFail($id);
        $user->update($request->only(['name', 'email']));

        if ($request->has('password')) {
            $user->update(['password' => Hash::make($request->password)]);
        }

        return response()->json($user);
    }

    
    

    public function deleteUser($id)
    {
        // Delete a user by ID
        Utilisateur::destroy($id);
        return response()->json(['message' => 'User deleted']);
    }
}