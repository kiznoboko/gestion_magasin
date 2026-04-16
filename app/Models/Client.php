<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $primaryKey = 'id_client';

    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'nom_client',
        'email',
        'adresse',
        'password',
    ];

    protected $hidden = [
        'password',
    ];

    public function commandes()
    {
        return $this->hasMany(Commande::class, 'id_client', 'id_client');
    }
}
