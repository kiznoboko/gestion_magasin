<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::create('ligne_commandes', function (Blueprint $table) {
                $table->id('id_ligne'); 
                $table->unsignedBigInteger('id_commande'); 
                $table->unsignedBigInteger('id_produit'); 
                $table->integer('quantite'); 
                $table->float('sous_total'); 
                $table->timestamps();

                
                $table->foreign('id_commande')->references('id_commande')->on('commandes')->onDelete('cascade');
                $table->foreign('id_produit')->references('id_produit')->on('produits')->onDelete('cascade');
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ligne_commandes');
    }
};
