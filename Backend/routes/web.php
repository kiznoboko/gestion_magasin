<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\LigneCommandeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('welcome');
});

// ================= CLIENTS =================
Route::get('/clients', [ClientController::class, 'index'])->name('clients.index');
Route::get('/clients/create', [ClientController::class, 'create'])->name('clients.create');
Route::post('/clients', [ClientController::class, 'store'])->name('clients.store');
Route::get('/clients/{client}', [ClientController::class, 'show'])->name('clients.show');
Route::get('/clients/{client}/edit', [ClientController::class, 'edit'])->name('clients.edit');
Route::put('/clients/{client}', [ClientController::class, 'update'])->name('clients.update');
Route::delete('/clients/{client}', [ClientController::class, 'destroy'])->name('clients.destroy');

// ================= PRODUITS =================
Route::get('/produits', [ProduitController::class, 'index'])->name('produits.index');
Route::get('/produits/create', [ProduitController::class, 'create'])->name('produits.create');
Route::post('/produits', [ProduitController::class, 'store'])->name('produits.store');
Route::get('/produits/{produit}', [ProduitController::class, 'show'])->name('produits.show');
Route::get('/produits/{produit}/edit', [ProduitController::class, 'edit'])->name('produits.edit');
Route::put('/produits/{produit}', [ProduitController::class, 'update'])->name('produits.update');
Route::delete('/produits/{produit}', [ProduitController::class, 'destroy'])->name('produits.destroy');

// ================= COMMANDES =================
Route::get('/commandes', [CommandeController::class, 'index'])->name('commandes.index');
Route::get('/commandes/create', [CommandeController::class, 'create'])->name('commandes.create');
Route::post('/commandes', [CommandeController::class, 'store'])->name('commandes.store');
Route::get('/commandes/{commande}', [CommandeController::class, 'show'])->name('commandes.show');
Route::get('/commandes/{commande}/edit', [CommandeController::class, 'edit'])->name('commandes.edit');
Route::put('/commandes/{commande}', [CommandeController::class, 'update'])->name('commandes.update');
Route::delete('/commandes/{commande}', [CommandeController::class, 'destroy'])->name('commandes.destroy');

// ================= LIGNE COMMANDES =================
Route::get('/ligne-commandes', [LigneCommandeController::class, 'index'])->name('ligneCommandes.index');
Route::get('/ligne-commandes/create', [LigneCommandeController::class, 'create'])->name('ligneCommandes.create');
Route::post('/ligne-commandes', [LigneCommandeController::class, 'store'])->name('ligneCommandes.store');
Route::get('/ligne-commandes/{ligneCommande}', [LigneCommandeController::class, 'show'])->name('ligneCommandes.show');
Route::get('/ligne-commandes/{ligneCommande}/edit', [LigneCommandeController::class, 'edit'])->name('ligneCommandes.edit');
Route::put('/ligne-commandes/{ligneCommande}', [LigneCommandeController::class, 'update'])->name('ligneCommandes.update');
Route::delete('/ligne-commandes/{ligneCommande}', [LigneCommandeController::class, 'destroy'])->name('ligneCommandes.destroy');