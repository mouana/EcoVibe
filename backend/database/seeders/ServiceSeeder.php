<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $services = [
            [
                'type' => 'solaire',
                'description' => 'Panneaux solaires pour la production d\'énergie propre.',
                'infographic' => 'solar-panel.png',
                'price' => 15000.00,
            ],
            [
                'type' => 'éolien',
                'description' => 'Turbines éoliennes pour l\'exploitation du vent.',
                'infographic' => 'wind-turbine.png',
                'price' => 25000.00,
            ],
            [
                'type' => 'hydro',
                'description' => 'Systèmes hydroélectriques pour la production d\'énergie hydraulique.',
                'infographic' => 'hydro-system.png',
                'price' => 30000.00,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
