<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UtilisateurController;

Route::post('register', [RegisterController::class, 'register']);

Route::post('/login', [LoginController::class, 'login'])->name('login');
// Route::post('/logout', [LoginController::class, 'logout']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/utilisateur', [UtilisateurController::class, 'show'])->name('utilisateur.show');
    Route::put('/utilisateur', [UtilisateurController::class, 'update'])->name('utilisateur.update');
    Route::delete('/utilisateur', [UtilisateurController::class, 'destroy'])->name('utilisateur.destroy');
});