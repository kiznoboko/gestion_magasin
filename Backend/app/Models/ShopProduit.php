<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShopProduit extends Model
{
    protected $table = 'shop_produits';  
    // protected $primaryKey = 'id_produit';

    protected $fillable = [
        'nom_produit',
        'prix',
        'stock',
        'image',
        'shop_name',
        'user_id',
        'category'
    ];

    // 👇 each product belongs to a client (seller)
    public function client()
    {
        return $this->belongsTo(Client::class, 'user_id', 'id_client');
    }
}