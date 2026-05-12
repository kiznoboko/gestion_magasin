<?php

namespace App\Http\Controllers;

use App\Models\ShopProduit;
use Illuminate\Http\Request;

class ShopProduitController extends Controller
{
    // GET all products (filter by user optional)
    public function index(Request $request)
    {
        $query = ShopProduit::with('client');

        if ($request->filled('user_id')) {
            $query->where('user_id', $request->user_id);
        }

        return response()->json([
            'success' => true,
            'data' => $query->get()
        ]);
    }

    // STORE product
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom_produit' => 'required|string|max:255',
            'prix' => 'required|numeric',
            'stock' => 'required|integer',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'shop_name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'user_id' => 'required|exists:clients,id_client',
        ]);

        if ($request->hasFile('image')) {
        $path = $request->file('image')->store('produits', 'public');
        $validated['image'] = $path;
    }

        $produit = ShopProduit::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Produit created successfully',
            'data' => $produit
        ], 201);
    }

    // SHOW product
    public function show($id)
    {
        $produit = ShopProduit::with('client')
            ->where('id_produit', $id)
            ->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $produit
        ]);
    }

    // UPDATE product
    public function update(Request $request, $id)
    {
        $produit = ShopProduit::where('id', $id)->firstOrFail();

        $validated = $request->validate([
            'nom_produit' => 'sometimes|string|max:255',
            'prix' => 'sometimes|numeric',
            'stock' => 'sometimes|integer',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'category' => 'sometimes|string|max:255',
            'shop_name' => 'sometimes|string|max:255',
        ]);

          if ($request->hasFile('image')) {
        $path = $request->file('image')->store('produits', 'public');
        $validated['image'] = $path;
    }

        $produit->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Produit updated',
            'data' => $produit
        ]);
    }

    // DELETE product
    // public function destroy($id)
    // {
    //     $produit = ShopProduit::where('id_produit', $id)->firstOrFail();

    //     $produit->delete();

    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Produit deleted'
    //     ]);
    // }

    public function destroy($id)
{
    $produit = ShopProduit::findOrFail($id);

    $produit->delete();

    return response()->json([
        'success' => true,
        'message' => 'Produit deleted'
    ]);
}
}