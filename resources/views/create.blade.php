@extends('layouts.app')

@section('content')

<h1>Create Client</h1>

<form method="POST" action="{{ route('clients.store') }}">
    @csrf

    <div class="mb-3">
        <input type="text" name="nom_client" class="form-control" placeholder="Name">
    </div>

    <div class="mb-3">
        <input type="email" name="email" class="form-control" placeholder="Email">
    </div>

    <div class="mb-3">
        <input type="text" name="adresse" class="form-control" placeholder="Adresse">
    </div>

    <div class="mb-3">
        <input type="password" name="password" class="form-control" placeholder="Password">
    </div>

    <button class="btn btn-success">Save</button>
</form>

@endsection