<?php

namespace App\Http\Controllers;

use App\Models\Carte;
use Illuminate\Http\Request;

class CarteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Afficher la liste des cartes
        $cartes = Carte::all();
        return view('cartes.index', compact('cartes'));  // Assure-toi que tu as la vue 'cartes.index'
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Afficher le formulaire pour créer une carte
        return view('cartes.create');  // Assure-toi que tu as la vue 'cartes.create'
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Valider les données
        $validated = $request->validate([
            'coordinates' => 'required|json',
            'image_path' => 'nullable|image',
        ]);

        // Créer la nouvelle carte
        $carte = new Carte();
        $carte->coordinates = $validated['coordinates'];
        
        if ($request->hasFile('image_path')) {
            $carte->image_path = $request->file('image_path')->store('images', 'public');
        }

        $carte->save();

        // Rediriger vers la liste des cartes avec un message de succès
        return redirect()->route('cartes.index')->with('success', 'Carte créée avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Afficher les détails d'une carte
        $carte = Carte::findOrFail($id);
        return view('cartes.show', compact('carte'));  // Assure-toi que tu as la vue 'cartes.show'
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Afficher le formulaire d'édition pour une carte existante
        $carte = Carte::findOrFail($id);
        return view('cartes.edit', compact('carte'));  // Assure-toi que tu as la vue 'cartes.edit'
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Valider les données
        $validated = $request->validate([
            'coordinates' => 'required|json',
            'image_path' => 'nullable|image',
        ]);

        // Trouver la carte à mettre à jour
        $carte = Carte::findOrFail($id);
        $carte->coordinates = $validated['coordinates'];

        if ($request->hasFile('image_path')) {
            // Si une nouvelle image est téléchargée, la mettre à jour
            $carte->image_path = $request->file('image_path')->store('images', 'public');
        }

        $carte->save();

        // Rediriger vers la liste des cartes avec un message de succès
        return redirect()->route('cartes.index')->with('success', 'Carte mise à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Supprimer la carte spécifiée
        $carte = Carte::findOrFail($id);
        $carte->delete();

        // Rediriger vers la liste des cartes avec un message de succès
        return redirect()->route('cartes.index')->with('success', 'Carte supprimée avec succès.');
    }
}
