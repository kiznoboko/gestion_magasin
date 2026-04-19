import React, { useState } from 'react';
import { ShoppingCart, User, Trash2, Plus, Minus } from 'lucide-react';
import '../Styles/CartPage.css';

const CartPage = () => {
    // Mock state for the laptop item
    const [basketItems, setBasketItems] = useState([
        {
            id: 101,
            title: "Laptop Pro 15",
            type: "Ordinateurs",
            unitPrice: 1299.00,
            qty: 1,
            img: "https://via.placeholder.com/150" 
        }
    ]);

    const handleQty = (id, change) => {
        setBasketItems(prev => prev.map(item => 
            item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
        ));
    };

    const totalAmount = basketItems.reduce((acc, item) => acc + (item.unitPrice * item.qty), 0);

    return (
        <div className="shop-viewport">
            {/* TOP NAVIGATION */}
            <header className="shop-navbar">
                <div className="shop-container shop-nav-flex">
                    <div className="shop-brand">
                        <div className="shop-logo-box"></div>
                        ElectroShop
                    </div>
                    <nav className="shop-nav-menu">
                        <a href="/">Accueil</a>
                        <div className="shop-cart-trigger">
                            <ShoppingCart size={20} />
                            <span className="shop-cart-count">1</span>
                        </div>
                        <button className="shop-user-badge">
                            <User size={16} /> <span>Admin</span>
                        </button>
                    </nav>
                </div>
            </header>

            {/* MAIN CONTENT AREA */}
            <main className="shop-container shop-main-padding">
                <h1 className="shop-page-title">Panier</h1>

                <div className="shop-cart-layout">
                    {/* LEFT SIDE: Items List */}
                    <div className="shop-items-list">
                        {basketItems.map(item => (
                            <div key={item.id} className="shop-item-card">
                                <div className="shop-item-media">
                                    <img src={item.img} alt={item.title} className="shop-item-thumb" />
                                    <div className="shop-item-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.type}</p>
                                        <span className="shop-item-price-tag">{item.unitPrice.toFixed(2)}€</span>
                                    </div>
                                </div>

                                <div className="shop-item-controls">
                                    <button className="shop-remove-btn">
                                        <Trash2 size={18} />
                                    </button>
                                    <div className="shop-qty-stepper">
                                        <button onClick={() => handleQty(item.id, -1)}><Minus size={14} /></button>
                                        <span>{item.qty}</span>
                                        <button onClick={() => handleQty(item.id, 1)}><Plus size={14} /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE: Summary Panel */}
                    <aside className="shop-summary-aside">
                        <div className="shop-summary-box">
                            <h3>Résumé</h3>
                            <div className="shop-summary-line">
                                <span>Sous-total</span>
                                <span>{totalAmount.toFixed(2)}€</span>
                            </div>
                            <div className="shop-summary-line">
                                <span>Livraison</span>
                                <span className="shop-text-success">Gratuite</span>
                            </div>
                            <div className="shop-summary-grand-total">
                                <span>Total</span>
                                <span>{totalAmount.toFixed(2)}€</span>
                            </div>
                            <button className="shop-checkout-action">Passer la commande</button>
                            <a href="/" className="shop-return-link">Continuer mes achats</a>
                        </div>
                    </aside>
                </div>
            </main>

            {/* DARK FOOTER */}
            <footer className="shop-footer-dark">
                <div className="shop-container shop-footer-grid">
                    <div className="shop-footer-col">
                        <h4>ElectroShop</h4>
                        <p>Votre boutique d'électronique en ligne</p>
                    </div>
                    <div className="shop-footer-col">
                        <h4>Contact</h4>
                        <p>Email: contact@electroshop.fr</p>
                        <p>Tél: +33 1 23 45 67 89</p>
                    </div>
                    <div className="shop-footer-col">
                        <h4>Informations</h4>
                        <p>Livraison gratuite dès 50€</p>
                        <p>Retours sous 30 jours</p>
                    </div>
                </div>
                <div className="shop-footer-bottom">
                    © 2026 ElectroShop. Tous droits réservés.
                </div>
            </footer>
        </div>
    );
};

export default CartPage;