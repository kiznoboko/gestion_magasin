
<?php
// routes/api.php
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\LigneCommandeController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [ClientController::class, 'login']);
Route::apiResource('clients', ClientController::class);
Route::apiResource('produits', ProduitController::class);
Route::apiResource('commandes', CommandeController::class);
Route::apiResource('ligne-commandes', LigneCommandeController::class);