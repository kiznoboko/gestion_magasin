@extends('layouts.app')

@section('content')

<h1>Add Line Commande</h1>

<form method="POST" action="{{ route('ligneCommandes.store') }}">
    @csrf

    <input class="form-control mb-2" name="id_commande" placeholder="Commande ID">
    <input class="form-control mb-2" name="id_produit" placeholder="Produit ID">
    <input class="form-control mb-2" name="quantite" placeholder="Quantity">
    <input class="form-control mb-2" name="sous_total" placeholder="Sous total">

    <button class="btn btn-success">Save</button>
</form>

@endsection