<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\SimulationController;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\DevisController;
use App\Http\Controllers\PricingController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DemandeController;


//formulaire simulatiom
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/simulations', [SimulationController::class, 'store']);
    Route::get('/simulations', [SimulationController::class, 'index']); // Si besoin pour lister
});
//Devis
Route::middleware('auth:sanctum')->get('/devis', [DevisController::class, 'index']);
//service
Route::get('/services', [PricingController::class, 'index']);
//Contacter-nous
Route::post('/contact', [ContactController::class, 'store']);
//Demande
Route::middleware('auth:sanctum')->post('/demandes', [DemandeController::class, 'store']);

