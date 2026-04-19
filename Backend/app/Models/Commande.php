<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    protected $table = 'commandes';
    protected $primaryKey = 'id_commande';

    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'id_client',
        'date_commande',
        'total',
        'statut',
    ];

    protected $casts = [
        'date_commande' => 'datetime',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client', 'id_client');
    }

    public function lignes()
    {
        return $this->hasMany(LigneCommande::class, 'id_commande', 'id_commande');
    }
}
