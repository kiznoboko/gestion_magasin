<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
{
    $clients = Client::all();
    return view('clients.index', compact('clients'));
}

public function create()
{
    return view('clients.create');
}

public function store(Request $request)
{
    $validated = $request->validate([
        'nom_client' => 'required|string',
        'email' => 'required|email|unique:clients,email',
        'adresse' => 'nullable|string',
        'password' => 'required|string|min:6',
    ]);

    // hash password
    $validated['password'] = bcrypt($validated['password']);

    Client::create($validated);

    return redirect()->route('clients.index');
}

public function show(Client $client)
{
    return view('clients.show', compact('client'));
}

public function edit(Client $client)
{
    return view('clients.edit', compact('client'));
}

public function update(Request $request, Client $client)
{
    $validated = $request->validate([
        'nom_client' => 'sometimes|required|string',
        'email' => 'sometimes|required|email|unique:clients,email,' . $client->id_client . ',id_client',
        'adresse' => 'nullable|string',
        'password' => 'nullable|string|min:6',
    ]);

    // only hash if password provided
    if (isset($validated['password'])) {
        $validated['password'] = bcrypt($validated['password']);
    }

    $client->update($validated);

    return redirect()->route('clients.index');
}

public function destroy(Client $client)
{
    $client->delete();

    return redirect()->route('clients.index');
}
}
