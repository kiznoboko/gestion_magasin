<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Commande;
use App\Models\Produit;

class LigneCommande extends Model
{
    protected $table = 'ligne_commandes';
    protected $primaryKey = 'id_ligne';

    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'id_commande',
        'id_produit',
        'quantite',
        'sous_total',
    ];

    public function commande()
    {
        return $this->belongsTo(Commande::class, 'id_commande', 'id_commande');
    }

    public function produit()
    {
        return $this->belongsTo(Produit::class, 'id_produit', 'id_produit');
    }

    
}