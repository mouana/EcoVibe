<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Simulation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class SimulationController extends Controller
{
    public function store(Request $request)
    {
        try {
            // Vérifie si l'utilisateur est authentifié
            if (!Auth::check()) {
                Log::warning('Tentative d\'ajouter une simulation par un utilisateur non authentifié.', [
                    'request_data' => $request->except(['password']),
                ]);
                return response()->json(['success' => false, 'message' => 'Utilisateur non authentifié.'], 401);
            }

            // Validation des données de la requête
            $validated = $request->validate([
                'energyType' => 'required|string|in:solaire,éolien,hydro',
                'location' => 'required|string',
                'installationSize' => 'required|numeric',
                'budget' => 'required|numeric',
                'additionalData' => 'nullable|string',
            ]);

            // Calcul des données de sortie
            $outputData = Simulation::calculateOutput($validated);

            // Création de la simulation
            $simulation = Simulation::create([
                'user_id' => Auth::id(),
                'type' => $validated['energyType'],
                'input_data' => [
                    'location' => $validated['location'],
                    'installationSize' => $validated['installationSize'],
                    'budget' => $validated['budget'],
                    'additionalData' => $validated['additionalData'] ?? null,
                ],
                'output_data' => $outputData,
            ]);

            Log::info('Simulation créée avec succès.', ['simulation_id' => $simulation->id]);

            return response()->json([
                'success' => true,
                'message' => 'Simulation créée avec succès.',
                'data' => $simulation,
            ], 201);

        } catch (\Exception $e) {
            Log::error('Erreur lors de la création de la simulation.', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'request_data' => $request->except(['password']),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Une erreur est survenue. Veuillez réessayer plus tard.',
            ], 500);
        }
    }
}
