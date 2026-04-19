@extends('layouts.app')

@section('content')
<h1>Produits</h1>

<a href="{{ route('produits.create') }}" class="btn btn-primary mb-3">+ Add Product</a>

<table class="table table-bordered">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Prix</th>
        <th>Stock</th>
        <th>actions</th>
    </tr>

    @foreach($produits as $produit)
    <tr>
        <td>{{ $produit->id_produit }}</td>
        <td>{{ $produit->nom_produit }}</td>
        <td>{{ $produit->prix }}</td>
        <td>{{ $produit->stock }}</td>
        <td>
            <a href="{{ route('produits.edit', $produit->id_produit) }}" class="btn btn-warning btn-sm">Edit</a>

<form method="POST" action="{{ route('produits.destroy', $produit->id_produit) }}" style="display:inline;">
    @csrf
    @method('DELETE')
    <button class="btn btn-danger btn-sm">Delete</button>
</form>
        </td>
    </tr>
    @endforeach
</table>
@endsection