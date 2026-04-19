import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, User, ArrowLeft } from 'lucide-react';
import '../Styles/UserDashboard.css';
import { Navigate } from 'react-router-dom';
import {useModal} from "./ModalContext";
const UserDashboard = () => {
    const [user, setUserData] = useState();
    const [orders, setUserOrders] = useState([]);
    // Mock data based on your screenshot
    const navigate = useNavigate()
    const ShowModal = useModal()
    const image_url = "http://127.0.0.1:8000/storage/";
    // 


//     function fetchUserOrders(id_client) {
//     fetch(`http://127.0.0.1:8000/api/commandes`)
//         .then(res => res.json())
//         .then(data => {
//             // filter only user orders
//             const userOrders = data.filter(
//                 order => order.id_client === id_client
//             );
//             setUserOrders(userOrders);
//         })
//         .catch(err => console.error(err));
// }

// function fetchUserOrders(id_client) {
//     fetch("http://127.0.0.1:8000/api/commandes/")
//         .then(res => res.json())
//         .then(response => {

//             // 🔥 FIX: extract array safely
//             const commandes = response.data || response;

//             console.log('commands', commandes)

//             if (!Array.isArray(commandes)) {
//                 console.error("API did not return array:", commandes);
//                 setUserOrders([]);
//                 return;
//             }

//             const userOrders = commandes.filter(
//                 order => order.id_client === id_client
//             );

//             setUserOrders(userOrders);
//         })
//         .catch(err => console.error(err));
// }

const fetchUserOrders = (id_client) => {
  fetch("http://127.0.0.1:8000/api/commandes")
    .then(res => res.json())
    .then(resData => {
      const commandes = resData.data; // ✅ extract array

      const userOrders = commandes.filter(
        order => order.id_client === id_client
      );

      setUserOrders(userOrders);
    })
    .catch(err => console.error(err));
};

useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
        ShowModal("error", "you must login first to access user dashboard");
        navigate("/");
        return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (parsedUser?.nom_client === "admin") {
        navigate("/AdminDashboard");
        return;
    }

    setUserData(parsedUser);

    // fetch orders
    fetchUserOrders(parsedUser.id_client);

}, []);

if (!user) {
    return <div>Loading...</div>;
}

const handledisconnect = () => {
  localStorage.removeItem('userStatus');
  localStorage.removeItem('user');
  navigate('/')
}

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
                            <User size={16} /> <span>{user.nom_client}</span>
                        </button>
                        {/* <button className="admin-btn">Admin</button> */}
                        <button className='btn-disconnect' onClick={handledisconnect}>
                            logout
                        </button>
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
                            <p>{user.nom_client}</p>
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
                            
                            {/* <div className="order-details">
                                        <div className="detail-row">
  <img
    src={
      order.produit?.image
        ? `${image_url}${order.produit.image}`
        : "https://via.placeholder.com/50"
    }
    className="cart-img"
    alt={order.produit?.nom_produit || "Produit"}
  />

  <span>{order.produit?.nom_produit || "Produit inconnu"}</span>

  <strong>{order.sous_total}€</strong>
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
                            </div> */}
                            <div className="order-details">

  {order.lignes?.map((line) => (
    <div key={line.id_ligne} className="detail-row">

      <img
        src={
          line.produit?.image
            ? `${image_url}${line.produit.image}`
            : "https://via.placeholder.com/50"
        }
        className="cart-img"
        alt={line.produit?.nom_produit || "Produit"}
      />

      <span>
        {line.produit?.nom_produit || "Produit inconnu"}
      </span>

      <span>x{line.quantite}</span>

      <strong>{line.sous_total}€</strong>

    </div>
  ))}

  <div className="order-total">
    <span>Total</span>
    <strong>{order.total}€</strong>
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