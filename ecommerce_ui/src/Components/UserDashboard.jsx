import React from 'react';
import { ShoppingCart, User, ArrowLeft } from 'lucide-react';
import '../Styles/UserDashboard.css';

const UserDashboard = () => {
    // Mock data based on your screenshot
    const user = {
        nom: "test",
        email: "test@gmail.com"
    };

    const orders = [
        {
            id: "ORD-004",
            date: "2026-04-19",
            produit: "Laptop Pro 15",
            quantite: 1,
            prix: "1299.00€",
            total: "1299.00€",
            adresse: "ikeieiei, 11000 sale",
            statut: "En attente"
        }
    ];

    return (
        <div className="page-wrapper">
            {/* NAVIGATION */}
            <header className="navbar">
                <div className="container nav-container">
                    <div className="logo">
                        <div className="logo-square"></div>
                        ElectroShop
                    </div>
                    <nav className="nav-actions">
                        <a href="/">Accueil</a>
                        <ShoppingCart className="icon-link" size={20} />
                        <button className="user-pill active-user">
                            <User size={16} /> <span>test</span>
                        </button>
                        <button className="admin-btn">Admin</button>
                    </nav>
                </div>
            </header>

            <main className="container dashboard-content">
                {/* BACK BUTTON */}
                <a href="/" className="back-link">
                    <ArrowLeft size={16} /> Retour à l'accueil
                </a>

                {/* PROFILE SECTION */}
                <section className="dashboard-card">
                    <h2>Mon Profil</h2>
                    <div className="profile-grid">
                        <div className="info-group">
                            <label>Nom</label>
                            <p>{user.nom}</p>
                        </div>
                        <div className="info-group">
                            <label>Email</label>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </section>

                {/* ORDERS SECTION */}
                <section className="dashboard-card">
                    <h2>Mes Commandes ({orders.length})</h2>
                    {orders.map((order) => (
                        <div key={order.id} className="order-item">
                            <div className="order-header">
                                <div>
                                    <h3>Commande {order.id}</h3>
                                    <span>Passée le {order.date}</span>
                                </div>
                                <span className="status-badge">{order.statut}</span>
                            </div>
                            
                            <div className="order-details">
                                <div className="detail-row">
                                    <span>{order.produit}</span>
                                    <strong>{order.prix}</strong>
                                </div>
                                <div className="detail-row sub-detail">
                                    <span>Quantité: {order.quantite}</span>
                                </div>
                                <div className="order-total">
                                    <span>Total</span>
                                    <strong>{order.total}</strong>
                                </div>
                                <div className="shipping-address">
                                    <p><strong>Adresse de livraison:</strong> {order.adresse}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>

            {/* FOOTER */}
            <footer className="footer-dark">
                <div className="container footer-grid">
                    <div className="f-col">
                        <h4>ElectroShop</h4>
                        <p>Votre boutique d'électronique en ligne.</p>
                    </div>
                    <div className="f-col">
                        <h4>Contact</h4>
                        <p>Email: contact@electroshop.fr</p>
                        <p>Tél: +33 1 23 45 67 89</p>
                    </div>
                    <div className="f-col">
                        <h4>Informations</h4>
                        <p>Livraison gratuite dès 50€</p>
                        <p>Retours sous 30 jours</p>
                    </div>
                </div>
                <div className="footer-copyright">
                    © 2026 ElectroShop. Tous droits réservés.
                </div>
            </footer>
        </div>
    );
};

export default UserDashboard;