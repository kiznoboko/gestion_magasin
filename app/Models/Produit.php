<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    protected $table = 'produits';

    protected $primaryKey = 'id_produit';

    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'nom_produit',
        'prix',
        'stock',
    ];

    public function lignes()
    {
        return $this->hasMany(LigneCommande::class, 'id_produit', 'id_produit');
    }
}