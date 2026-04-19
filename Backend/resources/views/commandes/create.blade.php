<!-- @extends('layouts.app')

@section('content')

<h1>Create Commande</h1>

<form method="POST" action="{{ route('commandes.store') }}">
    @csrf

    <input class="form-control mb-2" name="id_client" placeholder="Client ID">
    <input class="form-control mb-2" name="date_commande" type="date">
    <input class="form-control mb-2" name="total" placeholder="Total">
    <input class="form-control mb-2" name="statut" placeholder="Statut">

    <button class="btn btn-success">Save</button>
</form>

@endsection -->


@extends('layouts.app')

@section('content')

<h1>Create Commande</h1>

<form method="POST" action="{{ route('commandes.store') }}">
    @csrf

    <!-- Client dropdown (NOT manual ID anymore) -->
    <select name="id_client" class="form-control mb-2" required>
        <option value="">-- Select Client --</option>

        @foreach($clients as $client)
            <option value="{{ $client->id_client }}">
                {{ $client->nom_client }}
            </option>
        @endforeach
    </select>

    <input class="form-control mb-2" name="date_commande" type="date" required>

    <input class="form-control mb-2" name="total" placeholder="Total" required>

    <input class="form-control mb-2" name="statut" placeholder="Statut" required>

    <button class="btn btn-success">Save</button>
</form>

@endsection