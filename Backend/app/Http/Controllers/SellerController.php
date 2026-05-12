<?php

namespace App\Http\Controllers;

use App\Models\Seller;
use Illuminate\Http\Request;

class SellerController extends Controller
{

    // public function index() {
    //     $Sellers = Seller->all();

    //     return response()->json([
    //         'success' => 'true',
    //         'Sellers' => $Sellers
    //     ]);
    // }

    public function index()
{
    $sellers = Seller::all();

    return response()->json([
        'success' => true,
        'sellers' => $sellers
    ]);
}

    // Get seller by user id
    public function getSeller($user_id)
    {
        $seller = Seller::where('user_id', $user_id)->first();

        return response()->json([
            'seller' => $seller
        ]);
    }

    // Apply as seller
    // public function apply(Request $request)
    // {
    //     $validated = $request->validate([
    //         'user_id' => 'required|exists:users,id',
    //         'shop_name' => 'required|string|max:255',
    //         'description' => 'nullable|string',
    //     ]);

    //     $existingSeller = Seller::where(
    //         'user_id',
    //         $validated['user_id']
    //     )->first();

    //     if ($existingSeller) {
    //         return response()->json([
    //             'message' => 'Seller request already exists'
    //         ], 400);
    //     }

    //     $seller = Seller::create([
    //         'user_id' => $validated['user_id'],
    //         'shop_name' => $validated['shop_name'],
    //         'description' => $validated['description'],
    //         'status' => 'pending',
    //     ]);

    //     return response()->json([
    //         'message' => 'Application submitted',
    //         'seller' => $seller
    //     ]);
    // }

    public function apply(Request $request)
{
    $validated = $request->validate([
        'user_id' => 'required|exists:clients,id_client',
        'shop_name' => 'required|string|max:255',
        'description' => 'nullable|string',
    ]);

    $existingSeller = Seller::where(
        'user_id',
        $validated['user_id']
    )->first();

    if ($existingSeller) {
        return response()->json([
            'message' => 'Seller request already exists'
        ], 400);
    }

    $seller = Seller::create([
        'user_id' => $validated['user_id'],
        'shop_name' => $validated['shop_name'],
        'description' => $validated['description'],
        'status' => 'pending',
    ]);

    return response()->json([
        'message' => 'Application submitted',
        'seller' => $seller
    ]);
}

    // Verify seller manually (admin)
    // public function verify($id)
    // {
    //     $seller = Seller::findOrFail($id);

    //     $seller->status = 'verified';

    //     $seller->save();

    //     return response()->json([
    //         'message' => 'Seller verified',
    //         'seller' => $seller
    //     ]);
    // }

    public function verify(Request $request, $id)
{
    $seller = Seller::findOrFail($id);

    $seller->status = $request->status;

    $seller->save();

    return response()->json([
        'message' => 'Status updated',
        'seller' => $seller
    ]);
}
}