// import React, { useState } from 'react';
// import { ShoppingCart, User, CheckCircle2 } from 'lucide-react';
// import '../Styles/CheckoutPage.css';

// const CheckoutPage = () => {
//     const [paymentMethod, setPaymentMethod] = useState('card');

//     return (
//         <div className="checkout-flow-viewport">
//             {/* HEADER */}
//             <header className="checkout-flow-navbar">
//                 <div className="checkout-flow-container checkout-flow-nav-flex">
//                     <div className="checkout-flow-brand">
//                         <div className="checkout-flow-logo-box"></div>
//                         ElectroShop
//                     </div>
//                     <nav className="checkout-flow-nav-menu">
//                         <a href="/">Accueil</a>
//                         <div className="checkout-flow-cart-icon">
//                             <ShoppingCart size={20} />
//                             <span className="checkout-flow-badge">1</span>
//                         </div>
//                         <button className="checkout-flow-user-pill">
//                             <User size={16} /> <span>test</span>
//                         </button>
//                         <button className="checkout-flow-admin-link">Admin</button>
//                     </nav>
//                 </div>
//             </header>

//             {/* MAIN CONTENT */}
//             <main className="checkout-flow-container checkout-flow-main">
//                 <h1 className="checkout-flow-title">Finaliser la commande</h1>

//                 <div className="checkout-flow-grid">
//                     {/* LEFT SIDE: FORMS */}
//                     <div className="checkout-flow-forms">
//                         {/* Shipping Info */}
//                         <section className="checkout-flow-card">
//                             <h3>Informations de livraison</h3>
//                             <div className="checkout-flow-input-group">
//                                 <label>Nom complet</label>
//                                 <input type="text" defaultValue="test" />
//                             </div>
//                             <div className="checkout-flow-row">
//                                 <div className="checkout-flow-input-group">
//                                     <label>Email</label>
//                                     <input type="email" defaultValue="test@gmail.com" />
//                                 </div>
//                                 <div className="checkout-flow-input-group">
//                                     <label>Téléphone</label>
//                                     <input type="text" placeholder="" />
//                                 </div>
//                             </div>
//                             <div className="checkout-flow-input-group">
//                                 <label>Adresse</label>
//                                 <input type="text" placeholder="" />
//                             </div>
//                             <div className="checkout-flow-row">
//                                 <div className="checkout-flow-input-group">
//                                     <label>Ville</label>
//                                     <input type="text" placeholder="" />
//                                 </div>
//                                 <div className="checkout-flow-input-group">
//                                     <label>Code postal</label>
//                                     <input type="text" placeholder="" />
//                                 </div>
//                             </div>
//                         </section>

//                         {/* Payment Method */}
//                         <section className="checkout-flow-card">
//                             <h3>Mode de paiement</h3>
//                             <div 
//                                 className={`checkout-flow-pay-option ${paymentMethod === 'card' ? 'active' : ''}`}
//                                 onClick={() => setPaymentMethod('card')}
//                             >
//                                 <div className="checkout-flow-pay-text">
//                                     <strong>Carte bancaire</strong>
//                                     <span>Paiement sécurisé</span>
//                                 </div>
//                             </div>
//                             <div 
//                                 className={`checkout-flow-pay-option ${paymentMethod === 'paypal' ? 'active' : ''}`}
//                                 onClick={() => setPaymentMethod('paypal')}
//                             >
//                                 <div className="checkout-flow-pay-text">
//                                     <strong>PayPal</strong>
//                                     <span>Paiement via votre compte PayPal</span>
//                                 </div>
//                             </div>
//                         </section>

//                         <button className="checkout-flow-submit-btn">
//                             <CheckCircle2 size={18} /> Confirmer la commande
//                         </button>
//                     </div>

//                     {/* RIGHT SIDE: RECAP */}
//                     <aside className="checkout-flow-sidebar">
//                         <div className="checkout-flow-recap-card">
//                             <h3>Récapitulatif</h3>
//                             <div className="checkout-flow-recap-line">
//                                 <span>Laptop Pro 15 ×1</span>
//                                 <strong>1299.00€</strong>
//                             </div>
//                             <div className="checkout-flow-divider"></div>
//                             <div className="checkout-flow-recap-line">
//                                 <span>Sous-total</span>
//                                 <span>1299.00€</span>
//                             </div>
//                             <div className="checkout-flow-recap-line">
//                                 <span>Livraison</span>
//                                 <span className="checkout-flow-free">Gratuite</span>
//                             </div>
//                             <div className="checkout-flow-total-line">
//                                 <span>Total</span>
//                                 <span>1299.00€</span>
//                             </div>
//                         </div>
//                     </aside>
//                 </div>
//             </main>

//             {/* FOOTER */}
//             <footer className="checkout-flow-footer">
//                 <div className="checkout-flow-container checkout-flow-footer-grid">
//                     <div className="checkout-flow-footer-col">
//                         <h4>ElectroShop</h4>
//                         <p>Votre boutique d'électronique en ligne</p>
//                     </div>
//                     <div className="checkout-flow-footer-col">
//                         <h4>Contact</h4>
//                         <p>Email: contact@electroshop.fr</p>
//                         <p>Tél: +33 1 23 45 67 89</p>
//                     </div>
//                     <div className="checkout-flow-footer-col">
//                         <h4>Informations</h4>
//                         <p>Livraison gratuite dès 50€</p>
//                         <p>Retours sous 30 jours</p>
//                     </div>
//                 </div>
//                 <div className="checkout-flow-copyright">
//                     © 2026 ElectroShop. Tous droits réservés.
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default CheckoutPage;



import React, { useEffect, useState } from 'react';
import { ShoppingCart, User, CheckCircle2 } from 'lucide-react';
import '../Styles/CheckoutPage.css';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cart, setCart] = useState([]);

  const image_url = "http://127.0.0.1:8000/storage/";

  // ---------------- LOAD CART ----------------
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];

    const normalized = stored.map(item => ({
      ...item,
      quantity: item.quantity || 1
    }));

    setCart(normalized);
  }, []);

  // ---------------- CALCULATIONS ----------------
  const subtotal = cart.reduce(
    (sum, item) => sum + item.prix * item.quantity,
    0
  );

  const total = subtotal; // free shipping for now

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleConfirmOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!user || cart.length === 0) {
        alert("Cart empty or user not logged in");
        return;
    }

    const total = cart.reduce(
        (sum, item) => sum + item.prix * item.quantity,
        0
    );

    try {
        // 1️⃣ CREATE ORDER
        const orderRes = await fetch("http://127.0.0.1:8000/api/commandes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id_client: user.id_client,
                date_commande: new Date().toISOString().split("T")[0],
                total,
                statut: "en attente"
            })
        });

        const orderData = await orderRes.json();
        const id_commande = orderData.data.id_commande;

        // 2️⃣ CREATE ORDER ITEMS
        for (const item of cart) {
            await fetch("http://127.0.0.1:8000/api/ligne-commandes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id_commande,
                    id_produit: item.id_produit,
                    quantite: item.quantity,
                    sous_total: item.prix * item.quantity
                })
            });
        }

        alert("Commande validée !");
        localStorage.removeItem("cart");

    } catch (err) {
        console.error(err);
        alert("Erreur commande");
    }
};

  return (
    <div className="checkout-flow-viewport">

      {/* HEADER */}
      <header className="checkout-flow-navbar">
        <div className="checkout-flow-container checkout-flow-nav-flex">

          <div className="checkout-flow-brand">
            <div className="checkout-flow-logo-box"></div>
            ElectroShop
          </div>

          <nav className="checkout-flow-nav-menu">
            <a href="/">Accueil</a>

            <div className="checkout-flow-cart-icon">
              <ShoppingCart size={20} />
              <span className="checkout-flow-badge">{cartCount}</span>
            </div>

            <button className="checkout-flow-user-pill">
              <User size={16} /> <span>User</span>
            </button>

            <button className="checkout-flow-admin-link">Admin</button>
          </nav>

        </div>
      </header>

      {/* MAIN */}
      <main className="checkout-flow-container checkout-flow-main">

        <h1 className="checkout-flow-title">Finaliser la commande</h1>

        <div className="checkout-flow-grid">

          {/* LEFT */}
          <div className="checkout-flow-forms">

            {/* SHIPPING */}
                                   <section className="checkout-flow-card">
                            <h3>Informations de livraison</h3>
                            <div className="checkout-flow-input-group">
                               <label>Nom complet</label>
                               <input type="text" defaultValue="test" />
                           </div>
                            <div className="checkout-flow-row">
                               <div className="checkout-flow-input-group">
                                    <label>Email</label>
                                   <input type="email" defaultValue="test@gmail.com" />
                               </div>
                                <div className="checkout-flow-input-group">
                                    <label>Téléphone</label>
                                   <input type="text" placeholder="" />
                               </div>
                            </div>
                             <div className="checkout-flow-input-group">
                                <label>Adresse</label>
                                <input type="text" placeholder="" />
                           </div>
                             <div className="checkout-flow-row">
                               <div className="checkout-flow-input-group">
                                    <label>Ville</label>
                                    <input type="text" placeholder="" />
                                </div>
                               <div className="checkout-flow-input-group">
                                   <label>Code postal</label>
                                    <input type="text" placeholder="" />
                                </div>
                            </div>
                       </section>
            {/* PAYMENT */}
            <section className="checkout-flow-card">
              <h3>Mode de paiement</h3>

              <div
                className={`checkout-flow-pay-option ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <strong>Carte bancaire</strong>
              </div>

              <div
                className={`checkout-flow-pay-option ${paymentMethod === 'paypal' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('paypal')}
              >
                <strong>PayPal</strong>
              </div>

            </section>

            <button className="checkout-flow-submit-btn">
              <CheckCircle2 size={18} onClick={handleConfirmOrder} /> Confirmer la commande
            </button>

          </div>

          {/* RIGHT SIDE */}
          <aside className="checkout-flow-sidebar">

            <div className="checkout-flow-recap-card">

              <h3>Récapitulatif</h3>

              {cart.length === 0 ? (
                <p>Votre panier est vide</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id_produit} className="checkout-flow-recap-line">

                         <img
              src={
                item.image
                  ? `${image_url}${item.image}`
                  : "https://via.placeholder.com/400"
              }
              className="product-image"
              alt={item.nom_produit}
            />

                      <span>
                        {item.nom_produit} ×{item.quantity}
                      </span>

                      <strong>
                        {(item.prix * item.quantity).toFixed(2)}€
                      </strong>

                    </div>
                  ))}

                  <div className="checkout-flow-divider"></div>

                  <div className="checkout-flow-recap-line">
                    <span>Sous-total</span>
                    <span>{subtotal.toFixed(2)}€</span>
                  </div>

                  <div className="checkout-flow-recap-line">
                    <span>Livraison</span>
                    <span className="checkout-flow-free">Gratuite</span>
                  </div>

                  <div className="checkout-flow-total-line">
                    <span>Total</span>
                    <span>{total.toFixed(2)}€</span>
                  </div>
                </>
              )}

            </div>

          </aside>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="checkout-flow-footer">
        <div className="checkout-flow-container checkout-flow-footer-grid">
          <div>
            <h4>ElectroShop</h4>
            <p>Votre boutique d'électronique en ligne</p>
          </div>
        </div>

        <div className="checkout-flow-copyright">
          © 2026 ElectroShop
        </div>
      </footer>

    </div>
  );
};

export default CheckoutPage;

