@extends('layouts.app')

@section('content')
<h1>Clients</h1>

<a href="{{ route('clients.create') }}" class="btn btn-primary mb-3">
    + Add Client
</a>

<table class="table table-bordered">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Adresse</th>
        <th>Actions</th>
    </tr>

    @foreach($clients as $client)
    <tr>
        <td>{{ $client->id_client }}</td>
        <td>{{ $client->nom_client }}</td>
        <td>{{ $client->email }}</td>
        <td>{{ $client->adresse }}</td>
        <td>
            <a class="btn btn-info btn-sm" href="{{ route('clients.show', $client->id_client) }}">View</a>
            <a class="btn btn-warning btn-sm" href="{{ route('clients.edit', $client->id_client) }}">Edit</a>

            <form method="POST" action="{{ route('clients.destroy', $client->id_client) }}" style="display:inline;">
                @csrf
                @method('DELETE')
                <button class="btn btn-danger btn-sm">Delete</button>
            </form>
        </td>
    </tr>
    @endforeach
</table>
@endsection