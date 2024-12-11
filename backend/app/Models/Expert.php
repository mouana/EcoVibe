<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expert extends Model
{
    use HasFactory;

protected $table = "experts";
    protected $fillable = [
        'specialty',
        'biography',
        'reviews',
        'image',
        'phone', 
        'email',
        'NometPrenom'
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

}