<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Simulation extends Model
{
    use HasFactory;



    protected $fillable = [
        'user_id',
        'type',
        'input_data',
        'output_data',
    ];

    protected $casts = [
        'input_data' => 'array',
        'output_data' => 'array',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relations
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class);

    }
}
