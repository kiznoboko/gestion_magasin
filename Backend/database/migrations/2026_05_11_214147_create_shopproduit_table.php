<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('shop_produits', function (Blueprint $table) {
            $table->id();

            $table->string('nom_produit');
            $table->float('prix');
            $table->integer('stock');

            $table->string('image')->nullable();

            $table->unsignedBigInteger('user_id');
            $table->string('shop_name');

            $table->timestamps();

            // FK to clients table
            $table->foreign('user_id')
                  ->references('id_client')
                  ->on('clients')
                  ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shop_produits');
    }
};