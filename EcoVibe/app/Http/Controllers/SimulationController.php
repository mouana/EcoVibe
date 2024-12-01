<?php

namespace App\Http\Controllers;

use App\Models\Simulation;
use Illuminate\Http\Request;

class SimulationController extends Controller
{
    public function store(Request $request){
        $validated=$request->validate(
            [
                'user_id'=>'required|integer',
                'type'=>'required|in:solaire,eolien',
                'input_data'=>'required|json',
                'output_data'=>'required|json',
            ]);

     
          $simulation=Simulation::create($validated);
          return  response()->json([
            'message'=>'simulation enregistre avec succes',
            'simulation'=>$simulation,
          ]);       
    }

    public function index(){
        $simulations=Simulation::all();
        return response()->json($simulations);
    }
}
