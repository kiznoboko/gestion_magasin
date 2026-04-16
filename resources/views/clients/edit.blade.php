@extends('layouts.app')

@section('content')
<h1>Edit Client</h1>

<form method="POST" action="{{ route('clients.update', $client->id_client) }}">
    @csrf
    @method('PUT')

    <input class="form-control mb-2" name="nom_client" value="{{ $client->nom_client }}">
    <input class="form-control mb-2" name="email" value="{{ $client->email }}">
    <input class="form-control mb-2" name="adresse" value="{{ $client->adresse }}">

    <button class="btn btn-primary">Update</button>
</form>
@endsection