<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;



    protected $fillable = ['type', 'description', 'infographic', 'price'];


    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];


    public function demandes()
{
    return $this->hasMany(Demande::class);
}

}