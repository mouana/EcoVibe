<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the services.
     */
    public function index()
    {
        $services = Service::with('demandes')->get();
        return response()->json($services);
    }

    /**
     * Store a newly created service in storage.
     */
    public function store(Request $request)
{
    // Validation des données de la requête
    $validated = $request->validate([
        'type' => 'required|string|max:255',
        'description' => 'required|string',
        'infographic' => 'nullable|string',
        'price' => 'required|numeric|min:0',
    ]);

    // Vérification de la validité des données
    if ($validated) {
        try {
            // Création du service dans la base de données
            $service = Service::create([
                'type' => $validated['type'],
                'description' => $validated['description'],
                'infographic' => $validated['infographic'] ?? null,
                'price' => $validated['price'],
            ]);

            // Retourner une réponse en cas de succès
            return response()->json([
                'message' => 'Service created successfully',
                'service' => $service,
            ], 201);
        } catch (\Exception $e) {
            // Gestion des erreurs de création
            return response()->json([
                'message' => 'Failed to create service',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    // Retourner une erreur en cas de validation échouée
    return response()->json([
        'message' => 'Invalid data provided',
        'errors' => $validated,
    ], 422);
}


    /**
     * Display the specified service.
     */
    public function show($id)
    {
        $service = Service::with('demandes')->find($id);

        if (!$service) {
            return response()->json(['message' => 'Service not found'], 404);
        }

        return response()->json($service);
    }

    /**
     * Update the specified service in storage.
     */
    public function update(Request $request, $id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json(['message' => 'Service not found'], 404);
        }

        $validated = $request->validate([
            'type' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'infographic' => 'nullable|string',
            'price' => 'nullable|numeric|min:0',
        ]);

        $service->update($validated);

        return response()->json(['message' => 'Service updated successfully', 'service' => $service]);
    }

    /**
     * Remove the specified service from storage.
     */
    public function destroy($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json(['message' => 'Service not found'], 404);
        }

        $service->delete();

        return response()->json(['message' => 'Service deleted successfully']);
    }
}