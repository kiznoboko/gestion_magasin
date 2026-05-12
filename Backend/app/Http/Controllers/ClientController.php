<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class ClientController extends Controller


{
    public function index()
{
    $clients = Client::all();
    // return view('clients.index', compact('clients'));
     return response()->json([
        'success' => true,
        'data' => $clients
    ]);
}

public function create()
{
    return view('clients.create');
}



// public function store(Request $request)
// {
//     $validated = $request->validate([
//         'nom_client' => 'required|string',
//         'email' => 'required|email|unique:clients,email',
//         'adresse' => 'nullable|string',
//         'password' => 'nullable|string',
//     ]);

//     $validated['password'] = bcrypt($validated['password'] ?? 'guest123');

//     $client = Client::create($validated);

//     return response()->json([
//         'message' => 'Client créé',
//         'data' => $client
//     ], 201);
// }


// public function store(Request $request)
// {
//     $validated = $request->validate([
//         'nom_client' => 'required|string',
//         'email' => 'required|email|unique:clients,email',
//         'adresse' => 'nullable|string',
//         'password' => 'required|string|min:6', // 🔥 FIX
//     ]);

//     $validated['password'] = bcrypt($validated['password']); // always hash

//     $client = Client::create($validated);

//     return response()->json([
//         'success' => true,
//         'message' => 'Client créé',
//         'data' => $client
//     ], 201);
// }


public function store(Request $request)
{
    $validated = $request->validate([
        'nom_client' => 'required|string',
        'email' => 'required|email|unique:clients,email',
        'adresse' => 'nullable|string',
        'password' => 'required|string|min:6',
    ]);

    $validated['password'] = bcrypt($validated['password']);

    $client = Client::create($validated);

    return response()->json([
        'success' => true,
        'message' => 'Client créé',
        'data' => $client
    ], 201);
}

// public function login(Request $request)
// {
//     $validator = Validator::make($request->all(), [
//         'email' => 'required|email',
//         'password' => 'required|string',
//     ]);

//     if ($validator->fails()) {
//         return response()->json([
//             'message' => 'Validation failed',
//             'errors' => $validator->errors()
//         ], 422);
//     }

//     $client = Client::where('email', $request->email)->first();

//     if (!$client || !Hash::check($request->password, $client->password)) {
//         return response()->json([
//             'message' => 'Invalid credentials'
//         ], 401);
//     }

//     return response()->json([
//         'message' => 'Login successful',
//         'data' => $client
//     ]);
// }

public function login(Request $request)
{
    $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'password' => 'required|string',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'message' => 'Validation failed',
            'errors' => $validator->errors()
        ], 422);
    }

    $client = Client::where('email', $request->email)->first();

    // check if client exists
    if (!$client) {
        return response()->json([
            'success' => false,
            'message' => 'Email not found'
        ], 404);
    }

    // compare hashed password
    if (!Hash::check($request->password, $client->password)) {
        return response()->json([
            'success' => false,
            'message' => 'Invalid password'
        ], 401);
    }

    return response()->json([
        'success' => true,
        'message' => 'Login successful',
        'data' => $client
    ]);
}

public function show(Client $client)
{
    return response()->json($client);
}

public function edit(Client $client)
{
    return response()->json($client);
}

// public function update(Request $request, Client $client)
// {
//     $validated = $request->validate([
//         'nom_client' => 'sometimes|required|string',
//         'email' => 'sometimes|required|email|unique:clients,email,' . $client->id_client . ',id_client',
//         'adresse' => 'nullable|string',
//         'password' => 'nullable|string|min:6',
//     ]);

//     // only hash if password provided
//     if (isset($validated['password'])) {
//         $validated['password'] = bcrypt($validated['password']);
//     }

//     $client->update($validated);

//     return redirect()->route('clients.index');
// }

public function update(Request $request, Client $client)
{
    $validated = $request->validate([
        'nom_client' => 'sometimes|required|string',
        'email' => 'sometimes|required|email|unique:clients,email,' . $client->id_client . ',id_client',
        'adresse' => 'nullable|string',
        'password' => 'nullable|string|min:6',
    ]);

    if (!empty($validated['password'])) {
        $validated['password'] = bcrypt($validated['password']);
    } else {
        unset($validated['password']);
    }

    $client->update($validated);

    return response()->json([
        'success' => true,
        'message' => 'Profil mis à jour',
        'data' => $client
    ]);
}

// public function destroy(Client $client)
// {
//     $client->delete();

//     return redirect()->route('clients.index');
// }

public function destroy(Client $client)
{
    $client->delete();

    return response()->json([
        'success' => true,
        'message' => 'Client supprimé'
    ]);
}
}
