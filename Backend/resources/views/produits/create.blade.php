@extends('layouts.app')

@section('content')
<h1>Add Product</h1>

<form method="POST" action="{{ route('produits.store') }}">
    @csrf

    <input class="form-control mb-2" name="nom_produit" placeholder="Name">
    <input class="form-control mb-2" name="prix" placeholder="Price">
    <input class="form-control mb-2" name="stock" placeholder="Stock">

    <button class="btn btn-success">Save</button>
</form>
@endsection