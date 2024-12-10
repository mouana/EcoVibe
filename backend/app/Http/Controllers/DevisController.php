<?php
namespace App\Http\Controllers;

use App\Models\Simulation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class DevisController extends Controller
{
    public function index()
    {
        try {
            $user = Auth::user();
    
            if (!$user) {
                return response()->json(['error' => 'Utilisateur non authentifié'], 401);
            }
    
            // Test direct avec une requête SQL
            $simulation = DB::table('simulations')->where('user_id', $user->id)->first();
    
            if (!$simulation) {
                return response()->json(['error' => 'Simulation non trouvée'], 404);
            }
    
            return response()->json([
                'user' => $user,
                'simulation' => $simulation
            ]);
        } catch (\Exception $e) {
            Log::error('Erreur dans getDevis : ' . $e->getMessage(), ['exception' => $e]);
            return response()->json(['error' => 'Erreur interne', 'message' => $e->getMessage()], 500);
        }
    }
}

