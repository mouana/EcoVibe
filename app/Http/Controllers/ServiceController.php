<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{
    /**
     * Afficher tous les services.
     */
    public function index()
    {
        $services = Service::all();
        return view('services.index', compact('services'));
    }

    /**
     * Afficher le formulaire de création d'un service.
     */
    public function create()
    {
        return view('services.create');
    }

    /**
     * Enregistrer un nouveau service.
     */
    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|in:solaire,éolien,hydro',
            'description' => 'required|string',
            'infographic' => 'nullable|image|max:2048', // Image optionnelle
        ]);

        // Gérer l'upload de l'infographie (si fournie)
        $infographicPath = null;
        if ($request->hasFile('infographic')) {
            $infographicPath = $request->file('infographic')->store('infographics', 'public');
        }

        Service::create([
            'type' => $request->type,
            'description' => $request->description,
            'infographic' => $infographicPath,
        ]);

        return redirect()->route('services.index')->with('success', 'Service créé avec succès.');
    }

    /**
     * Afficher un service spécifique.
     */
    public function show(Service $service)
    {
        return view('services.show', compact('service'));
    }

    /**
     * Afficher le formulaire d'édition pour un service existant.
     */
    public function edit(Service $service)
    {
        return view('services.edit', compact('service'));
    }

    /**
     * Mettre à jour un service existant.
     */
    public function update(Request $request, Service $service)
    {
        $request->validate([
            'type' => 'required|in:solaire,éolien,hydro',
            'description' => 'required|string',
            'infographic' => 'nullable|image|max:2048', // Image optionnelle
        ]);

        if ($request->hasFile('infographic')) {
            // Supprimer l'ancienne infographie si elle existe
            if ($service->infographic) {
                Storage::disk('public')->delete($service->infographic);
            }

            // Enregistrer la nouvelle infographie
            $infographicPath = $request->file('infographic')->store('infographics', 'public');
            $service->infographic = $infographicPath;
        }

        $service->update([
            'type' => $request->type,
            'description' => $request->description,
            'infographic' => $service->infographic, // Garde l'infographie actuelle si aucune nouvelle n'est ajoutée
        ]);

        return redirect()->route('services.index')->with('success', 'Service mis à jour avec succès.');
    }

    /**
     * Supprimer un service.
     */
    public function destroy(Service $service)
    {
        // Supprimer l'infographie du stockage si elle existe
        if ($service->infographic) {
            Storage::disk('public')->delete($service->infographic);
        }

        $service->delete();

        return redirect()->route('services.index')->with('success', 'Service supprimé avec succès.');
    }
}
