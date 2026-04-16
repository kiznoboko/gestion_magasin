<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use Illuminate\Http\Request;

class CommandeController extends Controller
{
    public function index()
{
    $commandes = Commande::with('client')->get();
    return view('commandes.index', compact('commandes'));
}

public function create()
{
    $clients = Client::all();
    return view('commandes.create', compact('clients'));
}

public function store(Request $request)
{
    $validated = $request->validate([
        'id_client' => 'required|exists:clients,id_client',
        'date_commande' => 'required|date',
        'total' => 'required|numeric|min:0',
        'statut' => 'required|string',
    ]);

    Commande::create($validated);

    return redirect()->route('commandes.index');
}

public function show(Commande $commande)
{
    return view('commandes.show', compact('commande'));
}

public function edit(Commande $commande)
{
    return view('commandes.edit', compact('commande'));
}

public function update(Request $request, Commande $commande)
{
    $validated = $request->validate([
        'id_client' => 'sometimes|required|exists:clients,id_client',
        'date_commande' => 'sometimes|required|date',
        'total' => 'sometimes|required|numeric|min:0',
        'statut' => 'sometimes|required|string',
    ]);

    $commande->update($validated);

    return redirect()->route('commandes.index');
}

public function destroy(Commande $commande)
{
    $commande->delete();

    return redirect()->route('commandes.index');
}
}
