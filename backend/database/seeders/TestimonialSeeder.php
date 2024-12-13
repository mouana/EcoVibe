<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimonial;

class TestimonialSeeder extends Seeder
{
    public function run()
    {

        Testimonial::create([
            'name'=> 'Sara Markhi',
            'position'=> 'Superviseur des relations humaines',
            'text'=> '"J\'ai eu le plaisir de travailler avec EcoVibe et de voir de première main l\'impact positif de leurs solutions. Leur capacité à allier performance et respect de l\'environnement est impressionnante. En tant qu\'entreprise, nous avons pu intégrer ces solutions de manière fluide et efficace. Je recommande vivement leurs services à toute entreprise soucieuse de son empreinte écologique."',
            'rating'=> 5,
            'image'=> '/service/sara.png', // L'i
        ]);

    }
}