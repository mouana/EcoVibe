<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable; 
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Utilisateur extends Authenticatable
{
    use HasApiTokens, HasFactory;

    protected $table = 'utilisateurs';

    protected $fillable = ['name', 'email', 'password', 'phone', 'birthday'];

    protected $hidden = [
        'password', 
        'remember_token',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relations
    public function simulations()
    {
        return $this->hasMany(Simulation::class);
    }

    public function projets()
    {
        return $this->hasMany(Projet::class);
    }

    public function demandes()
{
    return $this->hasMany(Demande::class);
}

}