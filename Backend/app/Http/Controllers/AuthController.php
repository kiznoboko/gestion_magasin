<?php
namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function restoreAccount(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:clients,email',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $client = Client::where('email', $request->email)->first();

        $client->password = Hash::make($request->password);
        $client->save();

        return response()->json([
            'success' => true,
            'message' => 'Mot de passe mis à jour avec succès'
        ]);
    }
}