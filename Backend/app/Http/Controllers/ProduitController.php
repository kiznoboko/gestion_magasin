<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
   // App/Http/Controllers/ProduitController.php
public function index()


{
    $produits = Produit::all();
    return response()->json($produits);
}

    public function create()
    {
        return view('produits.create');
    }

    // public function store(Request $request)
    // {
    //     $validated = $request->validate([
    //         'nom_produit' => 'required|string',
    //         'prix' => 'required|numeric',
    //         'stock' => 'required|integer|min:0',
    //        'image' => 'nullable|image|mimes:jpg,png,jpeg|max:2048'
    //     ]);

    //     Produit::create($validated);

    //     return redirect()->route('produits.index');
    // }

//         public function store(Request $request)
// {
//     $validated = $request->validate([
//         'nom_produit' => 'required|string',
//         'prix' => 'required|numeric',
//         'stock' => 'required|integer|min:0',
//         'image' => 'nullable|image|mimes:jpg,png,jpeg|max:2048'
//     ]);

//     if ($request->hasFile('image')) {
//         $path = $request->file('image')->store('produits', 'public');
//         $validated['image'] = $path;
//     }

//     return Produit::create($validated);
//      return redirect()->route('produits.index');
// }

public function store(Request $request)
{
    $validated = $request->validate([
        'nom_produit' => 'required|string',
        'prix' => 'required|numeric',
        'stock' => 'required|integer|min:0',
        'category' => 'required|string',
        'image' => 'nullable|image|mimes:jpg,png,jpeg|max:2048'
    ]);

    if ($request->hasFile('image')) {
        $path = $request->file('image')->store('produits', 'public');
        $validated['image'] = $path;
    }

    $produit = Produit::create($validated);

    return response()->json([
        'message' => 'Produit created successfully',
        'data' => $produit
    ], 201);
}

    public function show(Produit $produit)
    {   
                return response()->json($produit);
    }

    public function edit(Produit $produit)
    {   
            return response()->json($produit);
    }

    // public function update(Request $request, Produit $produit)
    // {
    //     $validated = $request->validate([
    //         'nom_produit' => 'sometimes|required|string',
    //         'prix' => 'sometimes|required|numeric',
    //         'stock' => 'sometimes|required|integer|min:0',
    //         'image' => 'nullable|image'
    //     ]);

    //     $produit->update($validated);

    //     return redirect()->route('produits.index');
    // }

    public function update(Request $request, Produit $produit)
{
    $validated = $request->validate([
        'nom_produit' => 'sometimes|required|string',
        'prix' => 'sometimes|required|numeric',
        'stock' => 'sometimes|required|integer|min:0',
        'category' => 'sometimes|required|string',
        'image' => 'nullable|image'
    ]);

    if ($request->hasFile('image')) {
        $path = $request->file('image')->store('produits', 'public');
        $validated['image'] = $path;
    }

    $produit->update($validated);

    return response()->json($produit->fresh());
}

public function destroy(Produit $produit)
{
    $produit->delete();

    return response()->json([
        'message' => 'Produit deleted successfully'
    ]);
}
}