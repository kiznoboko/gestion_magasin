@extends('layouts.app')

@section('content')
<h1>Create Client</h1>

<form method="POST" action="{{ route('clients.store') }}">
    @csrf

    <input class="form-control mb-2" name="nom_client" placeholder="Name">
    <input class="form-control mb-2" name="email" placeholder="Email">
    <input class="form-control mb-2" name="adresse" placeholder="Adresse">
    <input class="form-control mb-2" name="password" type="password" placeholder="Password">

    <button class="btn btn-success">Save</button>
</form>
@endsection