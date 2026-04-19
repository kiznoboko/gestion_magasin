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
       Schema::create('commandes', function (Blueprint $table) {
            $table->id('id_commande'); 
            $table->unsignedBigInteger('id_client'); 
            $table->date('date_commande'); 
            $table->float('total')->default(0); 
            $table->string('statut')->default('en attente'); 
            $table->timestamps();

            
            $table->foreign('id_client')->references('id_client')->on('clients')->onDelete('cascade');
});
    }

    /**
     * Reverse the migrations.
     */ 
    public function down(): void
    {
        Schema::dropIfExists('commandes');
    }
};
