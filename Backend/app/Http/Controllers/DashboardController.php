<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use App\Models\Produit;
use App\Models\LigneCommande;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function stats()
{
    try {
        $totalCommandes = \App\Models\Commande::count();
        $totalProduits = \App\Models\Produit::count();
        $totalSoldProducts = \App\Models\LigneCommande::sum('quantite');
        $totalRevenue = \App\Models\LigneCommande::sum('sous_total');

        $best = \App\Models\LigneCommande::select('id_produit')
            ->selectRaw('SUM(quantite) as total_qty')
            ->groupBy('id_produit')
            ->orderByDesc('total_qty')
            ->first();

        $bestProduct = null;

        if ($best) {
            $bestProduct = \App\Models\Produit::where('id_produit', $best->id_produit)->first();
        }

        return response()->json([
            'total_commandes' => $totalCommandes,
            'total_produits' => $totalProduits,
            'total_sold_products' => $totalSoldProducts,
            'total_revenue' => $totalRevenue,
            'best_product' => $bestProduct,
        ]);

    } catch (\Exception $e) {
        return response()->json([
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
        ], 500);
    }
}}