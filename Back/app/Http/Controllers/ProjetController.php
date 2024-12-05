<?php

namespace App\Http\Controllers;

use App\Models\Projet;
use Illuminate\Http\Request;

class ProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Afficher la liste des projets
        $projets = Projet::all();
        return view('projets.index', compact('projets'));  // Assure-toi d'avoir la vue 'projets.index'
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Afficher le formulaire de création pour un projet
        return view('projets.create');  // Assure-toi d'avoir la vue 'projets.create'
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Valider les données
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'expert_id' => 'required|exists:experts,id',
            'type' => 'required|in:solaire,éolien,hydraulique',
            'location' => 'required|string',
            'details' => 'required|string',
            'status' => 'required|in:en cours,terminé',
        ]);

        // Créer un nouveau projet
        $projet = new Projet();
        $projet->user_id = $validated['user_id'];
        $projet->expert_id = $validated['expert_id'];
        $projet->type = $validated['type'];
        $projet->location = $validated['location'];
        $projet->details = $validated['details'];
        $projet->status = $validated['status'];

        $projet->save();

        // Rediriger avec un message de succès
        return redirect()->route('projets.index')->with('success', 'Projet créé avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Afficher les détails d'un projet
        $projet = Projet::findOrFail($id);
        return view('projets.show', compact('projet'));  // Assure-toi d'avoir la vue 'projets.show'
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Afficher le formulaire d'édition pour un projet
        $projet = Projet::findOrFail($id);
        return view('projets.edit', compact('projet'));  // Assure-toi d'avoir la vue 'projets.edit'
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Valider les données
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'expert_id' => 'required|exists:experts,id',
            'type' => 'required|in:solaire,éolien,hydraulique',
            'location' => 'required|string',
            'details' => 'required|string',
            'status' => 'required|in:en cours,terminé',
        ]);

        // Trouver le projet à mettre à jour
        $projet = Projet::findOrFail($id);
        $projet->user_id = $validated['user_id'];
        $projet->expert_id = $validated['expert_id'];
        $projet->type = $validated['type'];
        $projet->location = $validated['location'];
        $projet->details = $validated['details'];
        $projet->status = $validated['status'];

        $projet->save();

        // Rediriger avec un message de succès
        return redirect()->route('projets.index')->with('success', 'Projet mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Supprimer un projet
        $projet = Projet::findOrFail($id);
        $projet->delete();

        // Rediriger avec un message de succès
        return redirect()->route('projets.index')->with('success', 'Projet supprimé avec succès.');
    }
}
