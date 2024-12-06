<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Utilisateur extends Model
{
    use HasFactory;
    protected $table = 'utilisateurs';

    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',      
        'birthday', 
        'role',
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
}

