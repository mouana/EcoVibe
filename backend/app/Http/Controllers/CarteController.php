<?php

namespace App\Http\Controllers;

use App\Models\Carte;
use Illuminate\Http\Request;

class CarteController extends Controller
{
    /**
     * Afficher une liste des cartes.
     */
    public function index()
    {
        $cartes = Carte::with('projet')->get();
        return response()->json($cartes);
    }

    /**
     * Créer une nouvelle carte.
     */
    public function store(Request $request)
    {
        // Valider uniquement project_id et coordinates
        $validatedData = $request->validate([
            'project_id' => 'required|exists:projets,id', 
            'coordinates' => 'required|json',           
        ]);
    
        // Créer une nouvelle carte avec les données validées
        $carte = Carte::create([
            'project_id' => $validatedData['project_id'],
            'coordinates' => json_decode($validatedData['coordinates'], true), 
        ]);
    
        // Retourner une réponse JSON
        return response()->json([
            'message' => 'Carte créée avec succès.',
            'carte' => $carte,
        ], 201);
    }
    

    /**
     * Afficher une carte spécifique.
     */
    // public function show($id)
    // {
    //     $carte = Carte::with('projet')->find($id);

    //     if (!$carte) {
    //         return response()->json(['message' => 'Carte non trouvée.'], 404);
    //     }

    //     return response()->json($carte);
    // }

    /**
     * Mettre à jour une carte.
     */
    public function update(Request $request, $id)
    {
        $carte = Carte::find($id);

        if (!$carte) {
            return response()->json(['message' => 'Carte non trouvée.'], 404);
        }

        $validatedData = $request->validate([
            'project_id' => 'sometimes|exists:projets,id',
            'coordinates' => 'sometimes|array',
        ]);

        $carte->update($validatedData);

        return response()->json([
            'message' => 'Carte mise à jour avec succès.',
            'carte' => $carte,
        ]);
    }

    /**
     * Supprimer une carte.
     */
    public function destroy($id)
    {
        $carte = Carte::find($id);

        if (!$carte) {
            return response()->json(['message' => 'Carte non trouvée.'], 404);
        }

        $carte->delete();

        return response()->json(['message' => 'Carte supprimée avec succès.']);
    }
}