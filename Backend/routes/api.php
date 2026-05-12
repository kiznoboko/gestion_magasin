
<?php
// routes/api.php
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\LigneCommandeController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SellerController;

Route::post('/login', [ClientController::class, 'login']);
Route::apiResource('clients', ClientController::class);
Route::apiResource('produits', ProduitController::class);
Route::apiResource('commandes', CommandeController::class);
Route::apiResource('ligne-commandes', LigneCommandeController::class);

Route::get('/dashboard-stats', [DashboardController::class, 'stats']);




Route::post('/contact', [ContactController::class, 'store']);

Route::get('/contacts', [ContactController::class, 'index']);

Route::get('/contacts/{id}', [ContactController::class, 'show']);

Route::delete('/contacts/{id}', [ContactController::class, 'destroy']);


Route::post('/restore-account', [AuthController::class, 'restoreAccount']);


Route::get('/sellers', [SellerController::class, 'index']);

Route::get('/seller/{user_id}', [SellerController::class, 'getSeller']);

Route::post('/seller/apply', [SellerController::class, 'apply']);

Route::put('/seller/verify/{id}', [SellerController::class, 'verify']);


use App\Http\Controllers\ShopProduitController;

// Route::prefix('shop-produits')->group(function () {
//     Route::get('/', [ProduitController::class, 'index']);
//     Route::post('/', [ProduitController::class, 'store']);
//     Route::get('/{id}', [ProduitController::class, 'show']);
//     Route::put('/{id}', [ProduitController::class, 'update']);
//     Route::delete('/{id}', [ProduitController::class, 'destroy']);
// });


Route::get('/shop-produits', [ShopProduitController::class, 'index']);
Route::post('/shop-produits', [ShopProduitController::class, 'store']);
Route::post('/shop-produits/{id}', [ShopProduitController::class, 'update']);
Route::put('/shop-produits/{id}', [ShopProduitController::class, 'update']);
Route::delete('/shop-produits/{id}', [ShopProduitController::class, 'destroy']);