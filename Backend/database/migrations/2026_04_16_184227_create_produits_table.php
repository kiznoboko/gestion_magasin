<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('produits', function (Blueprint $table) {

            $table->string('shop_name')->after('nom_produit');

            $table->unsignedBigInteger('user_id')->after('shop_name');

            $table->foreign('user_id')
                  ->references('id_client')
                  ->on('clients')
                  ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::table('produits', function (Blueprint $table) {

            $table->dropForeign(['user_id']);
            $table->dropColumn(['shop_name', 'user_id']);
        });
    }
};