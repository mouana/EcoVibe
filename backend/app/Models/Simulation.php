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
        return $this->belongsTo(Utilisateur::class, 'user_id');
    }

    // Méthodes pour les calculs
    public static function calculateOutput(array $input): array
    {
        $efficiency = match ($input['energyType']) {
            'solaire' => 0.2,
            'éolien' => 0.35,
            'hydro' => 0.5,
            default => 0.2,
        };

        $annualProduction = $input['installationSize'] * $efficiency * 365;
        $energyPrice = 1.5; // Prix moyen en Dh/kWh
        $annualRevenue = $annualProduction * $energyPrice;

        $improvementSuggestion = null;
        if ($input['energyType'] === 'solaire' && $input['budget'] < 5000) {
            $improvementSuggestion = "Augmentez votre budget pour intégrer des panneaux solaires de meilleure qualité.";
        }

        return [
            'annualProduction' => $annualProduction,
            'annualRevenue' => $annualRevenue,
            'improvementSuggestion' => $improvementSuggestion,
        ];
    }
}
