<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carte extends Model
{
    use HasFactory;
    protected $table = 'cartes';

    protected $fillable = [
        'project_id',
        'coordinates',
    ];

    protected $casts = [
        'coordinates' => 'array',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relations
    public function projet()
    {
        return $this->belongsTo(Projet::class,'project_id');
    }
  
}