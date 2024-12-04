<?php

namespace App\Http\Controllers;

use App\Models\Expert;
use Illuminate\Http\Request;

class ExpertController extends Controller
{
    // Afficher tous les experts
    public function index()
    {
        $experts = Expert::all();
        return view('experts.index', compact('experts'));
    }

    // Formulaire pour ajouter un nouvel expert
    public function create()
    {
        return view('experts.create');
    }

    // Enregistrer un nouvel expert
    public function store(Request $request)
    {
        $request->validate([
            'specialite' => 'required|string|max:255',
            'biographie' => 'required|string',
            'avis' => 'required|string',
        ]);

        Expert::create($request->all());
        return redirect()->route('experts.index');
    }

    // Afficher un expert spécifique
    public function show($id)
    {
        $expert = Expert::findOrFail($id);
        return view('experts.show', compact('expert'));
    }

    // Formulaire pour modifier un expert
    public function edit($id)
    {
        $expert = Expert::findOrFail($id);
        return view('experts.edit', compact('expert'));
    }

    // Mettre à jour un expert
    public function update(Request $request, $id)
    {
        $request->validate([
            'specialite' => 'required|string|max:255',
            'biographie' => 'required|string',
            'avis' => 'required|string',
        ]);

        $expert = Expert::findOrFail($id);
        $expert->update($request->all());
        return redirect()->route('experts.index');
    }

    // Supprimer un expert
    public function destroy($id)
    {
        $expert = Expert::findOrFail($id);
        $expert->delete();
        return redirect()->route('experts.index');
    }
}
