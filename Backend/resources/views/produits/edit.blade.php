@extends('layouts.app')

@section('content')

<h1>Edit Product</h1>

<form method="POST" action="{{ route('produits.update', $produit->id_produit) }}">
    @csrf
    @method('PUT')

    <input class="form-control mb-2" 
           name="nom_produit" 
           value="{{ $produit->nom_produit }}">

    <input class="form-control mb-2" 
           name="prix" 
           value="{{ $produit->prix }}">

    <input class="form-control mb-2" 
           name="stock" 
           value="{{ $produit->stock }}">

    <button class="btn btn-primary">Update</button>
</form>

@endsection