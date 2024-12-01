<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class User extends Model
{
    use HasFactory, Notifiable;

    protected $fillable=['nom','email','password','role','phone','birthday'];

    protected $hidden =['password','remembre_token'];

    protected $cast =[
        'email_verified_at'=>'datetime',
         'role'=>'string',
    ];

    
    /**
     * Vérifie si l'utilisateur a un rôle spécifique.
     *
     * @param string $role
     * @return bool
     */
    public function hasRole(string $role): bool
    {
        return $this->role === $role;
    }

    public function simulations(){
        return $this->hasMany(Simulation::class);
    }
    
    public function projets(){
        return $this->hasMany(Projet::class);
    }

}
