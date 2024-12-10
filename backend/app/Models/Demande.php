<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    use HasFactory;

    /**
     * Les attributs assignables.
     */
    protected $fillable = [
        'user_id',
        'service_id',
        'nom',
        'email',
        'description',
        'prix',
        'status',
    ];

    /**
     * Relation avec le modèle Utilisateur.
     */
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'user_id');
    }

    /**
     * Relation avec le modèle Service.
     */
    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
}
