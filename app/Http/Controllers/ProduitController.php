<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
            public function index()
{
    $produits = Produit::all();
    return view('Produits.index', compact('produits'));
}

public function store(Request $request)
{
    $validated = $request->validate([
        'nom_produit' => 'required|string',
        'prix' => 'required|numeric',
        'stock' => 'required|integer|min:0',
    ]);

    Produit::create($validated);
}

public function show(Produit $produit)
{
    return view('Produits.show', compact('produit'));
}

public function edit(Produit $produit)
{
    return view('Produits.edit', compact('produit'));
}

public function update(Request $request, Produit $produit)
{
    $validated = $request->validate([
        'nom_produit' => 'sometimes|required|string',
        'prix' => 'sometimes|required|numeric',
        'stock' => 'sometimes|required|integer|min:0',
    ]);

    $produit->update($validated);
}

public function destroy(Produit $produit)
{
    $produit->delete();
}
}
