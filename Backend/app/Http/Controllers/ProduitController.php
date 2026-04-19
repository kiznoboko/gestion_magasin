<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    public function index()
    {
        $produits = Produit::all();
        return view('produits.index', compact('produits'));
    }

    public function create()
    {
        return view('produits.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom_produit' => 'required|string',
            'prix' => 'required|numeric',
            'stock' => 'required|integer|min:0',
        ]);

        Produit::create($validated);

        return redirect()->route('produits.index');
    }

    public function show(Produit $produit)
    {
        return view('produits.show', compact('produit'));
    }

    public function edit(Produit $produit)
    {
        return view('produits.edit', compact('produit'));
    }

    public function update(Request $request, Produit $produit)
    {
        $validated = $request->validate([
            'nom_produit' => 'sometimes|required|string',
            'prix' => 'sometimes|required|numeric',
            'stock' => 'sometimes|required|integer|min:0',
        ]);

        $produit->update($validated);

        return redirect()->route('produits.index');
    }

    public function destroy(Produit $produit)
    {
        $produit->delete();

        return redirect()->route('produits.index');
    }
}