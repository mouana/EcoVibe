<?php

use Illuminate\Http\Request;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CarteController;
use App\Http\Controllers\DevisController;
use App\Http\Controllers\AdminsController;
use App\Http\Controllers\ExpertController;

use App\Http\Controllers\ProjetController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DemandeController;
use App\Http\Controllers\PricingController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ExpertUserController;
use App\Http\Controllers\SimulationController;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\Auth\RegisterController;

Route::post('register', [RegisterController::class, 'register']);

Route::post('/login', [LoginController::class, 'login'])->name('login');
// Route::post('/logout', [LoginController::class, 'logout']);
Route::post('/admin/login', [LoginController::class, 'adminLogin']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/utilisateur', [UtilisateurController::class, 'show'])->name('utilisateur.show');
    Route::put('/utilisateur', [UtilisateurController::class, 'update'])->name('utilisateur.update');
    Route::delete('/utilisateur', [UtilisateurController::class, 'destroy'])->name('utilisateur.destroy');
  

    Route::middleware(['auth:admin', 'admin'])->group(function () {
        // User management routes for admins
        Route::put('/admin/users/{id}', [AdminsController::class, 'update']); 
        Route::delete('/admin/users/{id}', [AdminsController::class, 'destroy']); 
        Route::get('getAllUsers', [UtilisateurController::class, 'getAllUsers']); 
        // MAzAL MAKHDEM
        Route::post('/expert-user', [ExpertUserController::class, 'store']);
        Route::delete('/expert-user', [ExpertUserController::class, 'destroy']);
        
        // MAzAL MAKHDEM
        // Expert management routes
        Route::post('/experts', [ExpertController::class, 'store']); 
        Route::delete('/experts/{id}', [ExpertController::class, 'destroy']); 
        
        
        // Project management routes 
        Route::get('/admin/projects', [ProjetController::class, 'index']); 
        Route::get('/admin/projects/{id}', [ProjetController::class, 'show']); 
        Route::post('/project', [ProjetController::class, 'store']); 
        Route::put('/projects/{id}', [ProjetController::class, 'update']); 
        Route::delete('/projects/{id}', [ProjetController::class, 'destroy']); 
        Route::post('/cartes', [CarteController::class, 'store'])->name('cartes.store');
        Route::put('/cartes/{id}', [CarteController::class, 'update'])->name('cartes.update');
        Route::delete('/cartes', [CarteController::class, 'destroy'])->name('cartes.destroy');
        Route::put('/experts/{id}', [ExpertController::class, 'update'])->name('experts.update'); 
        
    });
});
Route::get('/experts/{id}', [ExpertUserController::class, 'show']);
    Route::get('/admin/showUser{id}', [AdminsController::class, 'showUser']); 
Route::get('/admin/experts', [ExpertController::class, 'index']);  
Route::get('/projet', [ProjetController::class, 'index'])->name('projet.index');
Route::get('/cartes', [CarteController::class, 'index'])->name('cartes.index');
Route::get('/expert', [ExpertController::class, 'index'])->name('expert.index');
Route::get('/admin/experts/{id}', [ExpertController::class, 'show']); 


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