@extends('layouts.app')

@section('content')
    <h1>Détail du produit</h1>

    <p><strong>Nom :</strong> {{ $produit->nom_produit }}</p>
    <p><strong>Prix :</strong> {{ $produit->prix }} DH</p>
    <p><strong>Stock :</strong> {{ $produit->stock }}</p>

    <a href="{{ route('produits.index') }}">Retour</a>
@endsection