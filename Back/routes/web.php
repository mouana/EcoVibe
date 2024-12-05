<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
use App\Http\Controllers\ExpertController;
use App\Http\Controllers\ProjetController;
use App\Http\Controllers\CarteController;

Route::resource('experts', ExpertController::class);
Route::resource('projets', ProjetController::class);
Route::resource('cartes', CarteController::class);
