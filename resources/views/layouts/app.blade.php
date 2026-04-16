<!DOCTYPE html>
<html>
<head>
    <title>Magasin Virtuel</title>

    <!-- Simple Bootstrap CDN (easy styling) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<!-- NAVBAR -->
<nav class="navbar navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="/">Magasin Virtuel</a>

        <div>
            <a href="/clients" class="text-white me-3">Clients</a>
            <a href="/produits" class="text-white me-3">Produits</a>
            <a href="/commandes" class="text-white">Commandes</a>
        </div>
    </div>
</nav>

<!-- CONTENT -->
<div class="container mt-4">
    @yield('content')
</div>

</body>
</html>