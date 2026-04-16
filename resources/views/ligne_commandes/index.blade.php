@extends('layouts.app')

@section('content')
<h1>Lignes Commandes</h1>

<table class="table table-bordered">
    <tr>
        <th>ID</th>
        <th>Commande</th>
        <th>Produit</th>
        <th>Quantité</th>
        <th>Sous Total</th>
    </tr>

    @foreach($ligneCommandes as $ligne)
    <tr>
        <td>{{ $ligne->id_ligne }}</td>
        <td>{{ $ligne->id_commande }}</td>
        <td>{{ $ligne->id_produit }}</td>
        <td>{{ $ligne->quantite }}</td>
        <td>{{ $ligne->sous_total }}</td>
    </tr>
    @endforeach
</table>
@endsection