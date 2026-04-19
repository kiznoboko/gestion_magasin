@extends('layouts.app')

@section('content')
<h1>Commandes</h1>

<table class="table table-bordered">
    <tr>
        <th>ID</th>
        <th>Client</th>
        <th>Total</th>
        <th>Status</th>
    </tr>

    @foreach($commandes as $commande)
    <tr>
        <td>{{ $commande->id_commande }}</td>
        <td>{{ $commande->id_client }}</td>
        <td>{{ $commande->total }}</td>
        <td>{{ $commande->statut }}</td>
    </tr>
    @endforeach
</table>
@endsection