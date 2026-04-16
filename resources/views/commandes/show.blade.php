@extends('layouts.app')

@section('content')

<h1>Commande Details</h1>

<p><b>ID:</b> {{ $commande->id_commande }}</p>
<p><b>Client:</b> {{ $commande->id_client }}</p>
<p><b>Date:</b> {{ $commande->date_commande }}</p>
<p><b>Total:</b> {{ $commande->total }}</p>
<p><b>Status:</b> {{ $commande->statut }}</p>

<a href="{{ route('commandes.index') }}" class="btn btn-secondary">Back</a>

@endsection