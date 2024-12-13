<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Expert extends Model
{
    use HasFactory;
    use HasApiTokens, Notifiable;

protected $table = "experts";
protected $fillable = [
    'specialty', 'biography', 'reviews', 'image', 'phone', 'email', 'nom_prenom', 'password',
];


    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relations
    public function projets()
    {
        return $this->hasMany(Projet::class,'expert_id');
    }

    public function utilisateurs()
{
    return $this->belongsToMany(Utilisateur::class, 'expert_user', 'expert_id', 'user_id');
}
public function setPasswordAttribute($value)
{
    $this->attributes['password'] = Hash::make($value);
}

}