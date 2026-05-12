<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use Illuminate\Http\Request;

class CommandeController extends Controller
{
    public function index()
{
    $commandes = Commande::with(['client', 'lignes.produit'])->get();

    return response()->json([
        'data' => $commandes
    ]);
}

public function create()
{
    $clients = Client::all();
    return view('commandes.create', compact('clients'));
}

// public function store(Request $request)
// {
//     $validated = $request->validate([
//         'id_client' => 'required|exists:clients,id_client',
//         'date_commande' => 'required|date',
//         'total' => 'required|numeric|min:0',
//         'statut' => 'required|string',
//     ]);

//     Commande::create($validated);

//     return redirect()->route('commandes.index');
// }

// public function store(Request $request)
// {
//     $validated = $request->validate([
//         'id_client' => 'required|exists:clients,id_client',
//         'date_commande' => 'required|date',
//         'total' => 'required|numeric|min:0',
//         'statut' => 'required|string',
//     ]);

//     $commande = Commande::create($validated);

//     return response()->json([
//         'message' => 'Commande créée avec succès',
//         'data' => $commande
//     ], 201);
// }

// public function store(Request $request)
// {
//     $validated = $request->validate([
//         'id_client' => 'required|exists:clients,id_client',
//         'date_commande' => 'required|date',
//         'total' => 'required|numeric|min:0',
//         'statut' => 'required|string',
//     ]);

//     $commande = Commande::create($validated);

//     return response()->json([
//         'message' => 'Commande créée avec succès',
//         'data' => $commande
//     ], 201);
// }

// CommandeController
public function store(Request $request)
{
    $validated = $request->validate([
        'id_client' => 'required|exists:clients,id_client',
        'date_commande' => 'required|date',
        'total' => 'required|numeric|min:0',
        'statut' => 'required|string',
    ]);

    $commande = Commande::create($validated);

    return response()->json([
        'message' => 'Commande créée avec succès',
        'data' => $commande
    ], 201);
}

// public function store(Request $request)
// {
//     $validated = $request->validate([
//         'id_commande' => 'required|exists:commandes,id_commande',
//         'id_produit' => 'required|exists:produits,id_produit',
//         'quantite' => 'required|integer|min:1',
//         'sous_total' => 'required|numeric|min:0',
//     ]);

//     $ligne = LigneCommande::create($validated);

//     return response()->json([
//         'message' => 'Ligne commande créée',
//         'data' => $ligne
//     ]);
// }
// public function show(Commande $commande)
// {
//     return view('commandes.show', compact('commande'));
// }

public function show(Commande $commande)
{
    return response()->json([
        'data' => $commande->load(['client', 'lignes.produit'])
    ]);
}

public function edit(Commande $commande)
{
    return view('commandes.edit', compact('commande'));
}

public function update(Request $request, Commande $commande)
{
    $validated = $request->validate([
        'id_client' => 'sometimes|required|exists:clients,id_client',
        'date_commande' => 'sometimes|required|date',
        'total' => 'sometimes|required|numeric|min:0',
        'statut' => 'sometimes|required|string',
    ]);

    $commande->update($validated);

    return response()->json([
        'message' => 'Commande mise à jour',
        'data' => $commande
    ]);
}

public function destroy(Commande $commande)
{
    $commande->delete();

    return redirect()->route('commandes.index');
}
}
