<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id',
        'expert_id',
        'type',
        'location',
        'details',
        'image',
        'status',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relations
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class);
    }

    public function expert()
    {
        return $this->belongsTo(Expert::class);
    }

    public function cartes()
    {
        return $this->hasMany(Carte::class);
    }
}
