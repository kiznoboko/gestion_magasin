@extends('layouts.app')

@section('content')
<h1>Client Details</h1>

<p><b>Name:</b> {{ $client->nom_client }}</p>
<p><b>Email:</b> {{ $client->email }}</p>
<p><b>Adresse:</b> {{ $client->adresse }}</p>

<a href="{{ route('clients.index') }}" class="btn btn-secondary">Back</a>
@endsection