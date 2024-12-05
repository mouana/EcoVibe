<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    use HasFactory;

    protected $fillable=['user_id','expert_id','type','location','details','status'];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function experts(){
        return $this->belongsTo(Expert::class);
    }
}