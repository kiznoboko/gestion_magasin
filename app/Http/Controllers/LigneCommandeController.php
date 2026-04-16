<?php

namespace App\Http\Controllers;

use App\Models\LigneCommande;
use Illuminate\Http\Request;

class LigneCommandeController extends Controller
{
    public function index()
{
    $ligneCommandes = LigneCommande::all();
    return view('ligneCommandes.index', compact('ligneCommandes'));
}

public function create()
{
    return view('ligneCommandes.create');
}

public function store(Request $request)
{
    $validated = $request->validate([
        'produit_id' => 'required|exists:produits,id',
        'commande_id' => 'required|exists:commandes,id',
        'quantite' => 'required|integer|min:1',
    ]);

    LigneCommande::create($validated);

    return redirect()->route('ligneCommandes.index');
}

public function show(LigneCommande $ligneCommande)
{
    return view('ligneCommandes.show', compact('ligneCommande'));
}

public function edit(LigneCommande $ligneCommande)
{
    return view('ligneCommandes.edit', compact('ligneCommande'));
}

public function update(Request $request, LigneCommande $ligneCommande)
{
    $validated = $request->validate([
        'produit_id' => 'sometimes|required|exists:produits,id',
        'commande_id' => 'sometimes|required|exists:commandes,id',
        'quantite' => 'sometimes|required|integer|min:1',
    ]);

    $ligneCommande->update($validated);

    return redirect()->route('ligneCommandes.index');
}

public function destroy(LigneCommande $ligneCommande)
{
    $ligneCommande->delete();

    return redirect()->route('ligneCommandes.index');
}
}
