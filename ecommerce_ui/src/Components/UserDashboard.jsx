
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, User, ArrowLeft, MapPin } from 'lucide-react';
import '../Styles/UserDashboard.css';
import { Navigate, Link } from 'react-router-dom';
import {useModal} from "./ModalContext";
import { Search, LogOut, Package, Check } from "lucide-react";
import Logo from "../assets/ElectroMart.svg";
import { SquarePen } from "lucide-react";

import CreateProduit from './UploadShopProduits.jsx';

const UserDashboard = () => {
    const [user, setUserData] = useState();
    const [orders, setUserOrders] = useState([]);
    const [Querry, setSearchQuerry] = useState("");
    const [activeTab, setActiveTab] = useState("orders");
    const [isEditing, setIsEditing] = useState(false);
    const [cart, setCart] = useState([]);


  


 const { showModal } = useModal()


const [formUser, setFormUser] = useState({
  nom_client: "",
  email: "",
  phone: "",
  adresse: "",
  ville: "",
  code_postale: "",
  old_password: "",
  new_password: "",
});
const cartCount = cart.reduce(
  (total, item) => total + item.quantity,
  0
);
    // Mock data based on your screenshot
    const navigate = useNavigate()
    
    const image_url = "http://127.0.0.1:8000/storage/";
    



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
        showModal("error", "you must login first to access user dashboard");
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



const handleSearchProduct = () => {
  navigate("/", {
    state: { Querry: Querry }
  });
};




const increaseQty = (id) => {
  setCart((prev) => {
    const updatedCart = prev.map((item) =>
      item.id_produit === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    return updatedCart;
  });
};

const decreaseQty = (id) => {
  setCart((prev) => {
    const updatedCart = prev
      .map((item) =>
        item.id_produit === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    return updatedCart;
  });
};

const removeItem = (id) => {
  setCart((prev) => {
    const updatedCart = prev.filter(
      (item) => item.id_produit !== id
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    return updatedCart;
  });
};

const handleCheckout = () => {
    navigate('/CheckoutPage')
};


useEffect(() => {
  const cartItems = localStorage.getItem("cart");

  if (cartItems) {
    setCart(JSON.parse(cartItems));
  } else {
    setCart([]);
  }
}, []);


const HandleTrackProduct = (orderId) => {
  console.log(`order_id ${orderId}`);
  navigate(`/Order/${orderId}`)
}


const handleUpdateProfile = async () => {
  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/clients/${user.id_client}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nom_client: formUser.nom_client,
          email: formUser.email,
          phone: formUser.phone,
          adresse: formUser.adresse,
          ville: formUser.ville,
          code_postale: formUser.code_postale,

          // password update
          old_password: formUser.old_password,
          password: formUser.new_password,
        }),
      }
    );

    const data = await res.json();

    if (data) {
      showModal('success', 'profile mise A jour avec success')
      localStorage.removeItem('user');
      localStorage.removeItem('user_id')
      navigate('/AuthPage')
    }
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  if (user) {
    console.log('user', user);
  console.log('user id_client', user.id_client)
    setFormUser({
      nom_client: user.nom_client || "",
      email: user.email || "",
      phone: user.phone || "",
      adresse: user.adresse || "",
      ville: user.ville || "",
      code_postale: user.code_postale || ""
    });
  }
}, [user]);


const [seller, setSeller] = useState(null);

// const [shopName, setShopName] = useState(null);

// const [Description, setDescription] = useState(null);


const [shopName, setShopName] = useState("");

const [description, setDescription] = useState("");




const handleSellerApplication = async (e) => {
  e.preventDefault();

  console.log('user', user);
  console.log('user id_client', user.id_client)
  if (!user?.id_client) {
    alert("Utilisateur non connecté");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:8000/api/seller/apply",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user_id: user.id_client,
          shop_name: shopName,
          description: description,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      alert(data.message || "Erreur");
      return;
    }

    setSeller(data.seller);
    setShopName("");
    setDescription("");

    alert("Demande envoyée !");
  } catch (error) {
    console.error(error);
    alert("Erreur serveur");
  }
};

// useEffect(() => {
//   const fetchSeller = async () => {
//     console.log('user', user.id_client)
//     try {
//       const response = await fetch(
//         `http://localhost:8000/api/seller/${user.id_client}`
//       );

//       const data = await response.json();

//       if (data.seller) {
//         setSeller(data.seller);
//         console.log('seller', seller)
//       } else {
//         setSeller(null);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (user?.id_client) {
//     fetchSeller();
//   }
// }, [user?.id_client]);

useEffect(() => {
  console.log("USER OBJECT:", user);

  const fetchSeller = async () => {
    try {
      console.log("FETCHING SELLER FOR:", user.id_client);

      const response = await fetch(
        `http://127.0.0.1:8000/api/seller/${user.id_client}`
      );

      const data = await response.json();

      console.log("API DATA:", data);

      setSeller(data.seller);
    } catch (error) {
      console.error(error);
    }
  };

  if (user && user.id_client) {
    fetchSeller();
  }
}, [user]);

useEffect(() => {
  console.log("SELLER STATE UPDATED:", seller);
}, [seller]);


  const [showAddProduct, setShowAddProduct] = useState(false);
const [sellerProducts, setSellerProducts] = useState([]);





useEffect(() => {
  const fetchSellerProducts = async () => {
    if (!user?.id_client) return;

    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/shop-produits?user_id=${user.id_client}`
      );

      const data = await res.json();

      console.log("products response:", data);

      if (data.success) {
        setSellerProducts(data.data);
      } else {
        setSellerProducts([]);
      }
    } catch (err) {
      console.error("fetch error", err);
    }
  };

  fetchSellerProducts();
}, [user?.id_client]);
 const [editingProduct, setEditingProduct] = useState(null);

const handleDelete = async (id) => {
  if (!confirm("Voulez-vous vraiment supprimer ce produit ?")) return;

  try {
    const res = await fetch(`http://127.0.0.1:8000/api/shop-produits/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Erreur suppression");
      return;
    }

    alert("Produit supprimé");
  } catch (err) {
    console.error(err);
  }
};




  const handleEdit = (product) => {
  setEditingProduct(product);
  setShowAddProduct(true);
};


if (!user) {
    return <div>Loading...</div>;
}

const handledisconnect = () => {
  localStorage.removeItem('userStatus');
  localStorage.removeItem('user');
  localStorage.removeItem('cart');
  navigate('/')
}

    return (
        <div className="page-wrapper">
            {/* NAVIGATION */}
            <header className="navbar">
                <div className="container nav-container">
                    <div className="logo">
                        {/* <div className="logo-square"></div> */}
                        <img src={Logo} alt="" />
                       
                    </div>
                <span className='ProductSearch-container'>
                    <input type="text"  className='ProductSearch-input' placeholder='cherchez un produit' value={Querry} onChange={(e) => setSearchQuerry(e.target.value )}/>
                    <Search size={25}  className='ProductSearch-icon' onClick={handleSearchProduct}/>
                 </span>
                    <nav className="nav-actions">
                        <a href="/">Accueil</a>
                        {/* <ShoppingCart className="icon-link" size={20} /> */}

                        <div className="cart-wrapper">
  <ShoppingCart size={20} className="icon-btn" />

  {cartCount > 0 && (
    <span className="cart-badge">
      {cartCount}
    </span>
  )}

  <div className="cart-dropdown">
    {cart.length === 0 ? (
      <p>Panier vide</p>
    ) : (
      <>
        {cart.map((item) => (
          <div
            key={item.id_produit}
            className="cart-item"
          >
            <img
              src={
                item.image
                  ? `${image_url}${item.image}`
                  : "https://via.placeholder.com/50"
              }
              className="cart-img"
              alt={item.nom_produit}
            />

            <div className="cart-info">
              <strong>{item.nom_produit}</strong>

              <p>{item.prix}€</p>

              <div className="qty-controls">
                <button
                  onClick={() =>
                    decreaseQty(item.id_produit)
                  }
                >
                  -
                </button>

                <small>{item.quantity}</small>

                <button
                  onClick={() =>
                    increaseQty(item.id_produit)
                  }
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="remove-btn"
              onClick={() =>
                removeItem(item.id_produit)
              }
            >
              🗑
            </button>
          </div>
        ))}

        <button
          className="checkout-btn"
          onClick={handleCheckout}
        >
          Proceed to checkout
        </button>
      </>
    )}
  </div>
</div>
                        {/* <button className="user-pill active-user" onClick={handleUserProfile}>
                            <User size={16} /> <span>{user.nom_client}</span>
                        </button> */}

                        <button
  className={`user-pill ${activeTab === "profile" ? "active-user" : ""}`}
  onClick={() => setActiveTab("profile")}
>
  <User size={16} /> <span>{user.nom_client}</span>
</button>

<button
  className={`user-pill ${activeTab === "orders" ? "active-user" : ""}`}
  onClick={() => setActiveTab("orders")}
>
  Mes commandes
</button>

<button
  className={`user-pill ${activeTab === "Vendeur" ? "active-user" : ""}`}
  onClick={() => setActiveTab("vendeur")}
>
  Devenir vendeur
</button>
                        
                        {/* <button className="admin-btn">Admin</button> */}
                        <button className="disconnect-btn" onClick={handledisconnect}>
                            <LogOut size={20} />
                        </button>
                    </nav>
                </div>
            </header>

          


            <main className="container dashboard-content">

  {/* BACK BUTTON */}
  <a href="/" className="back-link">
    <ArrowLeft size={16} /> Retour à l'accueil
  </a>

  

  {activeTab === "profile" && (
  <section className="dashboard-card">

    <h2>
      Mon Profil
    

      <SquarePen
  size={18}
  className={`edit-icon ${isEditing ? "active" : ""}`}
  onClick={() => setIsEditing((prev) => !prev)}
/>
    </h2>

    <div className="profile-grid">

      <div className="info-group">
        <label>Nom</label>
        <input
          value={formUser.nom_client}
          disabled={!isEditing}
          onChange={(e) =>
            setFormUser({ ...formUser, nom_client: e.target.value })
          }
        />
      </div>

      <div className="info-group">
        <label>Email</label>
        <input
          value={formUser.email}
          disabled={!isEditing}
          onChange={(e) =>
            setFormUser({ ...formUser, email: e.target.value })
          }
        />
      </div>

    </div>

    <div className="password-section">

      <h3>Changer le mot de passe</h3>

      <div className="info-group">
        <label>Ancien mot de passe</label>
        <input
          type="password"
          disabled={!isEditing}
          value={formUser.old_password}
          onChange={(e) =>
            setFormUser({ ...formUser, old_password: e.target.value })
          }
        />
      </div>

      <div className="info-group">
        <label>Nouveau mot de passe</label>
        <input
          type="password"
          disabled={!isEditing}
          value={formUser.new_password}
          onChange={(e) =>
            setFormUser({ ...formUser, new_password: e.target.value })
          }
        />
      </div>

    </div>

    <button
      className="save-btn"
      disabled={!isEditing}
      onClick={handleUpdateProfile}
    >
      Sauvegarder
    </button>

  </section>
)}

  {/* ORDERS */}
  {activeTab === "orders" && (
    <section className="dashboard-card">
      <h2>Mes Commandes ({orders.length})</h2>

      {orders.map((order) => (
        <div key={order.id_commande} className="order-item">
          <div className="order-header">
            <div>
              <h3>Commande {order.id_commande}</h3>
              <span>Passée le {order.date}</span>
            </div>
            <span className="status-badge">{order.statut}</span>
          </div>

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

                <span>{line.produit?.nom_produit}</span>
                <span>x{line.quantite}</span>
                <strong>{line.sous_total}€</strong>
              </div>
            ))}

            <div className="order-total">
              <span>Total</span>
              <strong>{order.total}€</strong>
              <Package onClick={() => navigate(`/Order/${order.id_commande}`)}/>
            </div>
          </div>
        </div>
      ))}
    </section>
  )}




{activeTab === "vendeur" && (
  <div className="seller-container">
    <h2 className="seller-title">
      Devenir vendeur
    </h2>

    {/* {seller?.status === "verified" && (
      <div className="verified-box">
        <p className="verified-text">
          Votre compte vendeur est vérifié.
        </p>


        

       
      </div>
    )} */}


    {seller?.status === "verified" && (
  <div className="verified-box">

    <p className="verified-text">
      Votre compte vendeur est vérifié. bautique {seller.shop_name}
    </p>

    <button
      className="seller-dashboard-btn"
      onClick={() => setShowAddProduct(true)}
    >
      + Ajouter un produit
    </button>

    {/* 👇 Seller products */}
    <h3>Mes produits</h3>

    {/* {sellerProducts?.length > 0 ? (
      sellerProducts.map((p) => (
        <div key={p.id_produit} className="seller-product-card">
          <img
      src={
        p.image
          ? `${image_url}${p.image}`
          : "https://via.placeholder.com/50"
      }
      className="cart-img"
      alt={p.nom_produit}
    />
          <p>{p.nom_produit}</p>
          <p>{p.prix} €</p>
          <p>Stock: {p.stock}</p>
        </div>
      ))
    ) : (
      <p>Aucun produit encore</p>
    )} */}

    {sellerProducts?.length > 0 ? (
  <table className="clients-table-wrapper">
    <thead>
      <tr>
        <th>Image</th>
        <th>Nom</th>
        <th>Prix</th>
        <th>Stock</th>
        <th>action</th>
      </tr>
    </thead>

    <tbody>
      {sellerProducts.map((p) => (
        <tr key={p.id_produit}>
          <td>
            <img
              src={
                p.image
                  ? `${image_url}${p.image}`
                  : "https://via.placeholder.com/50"
              }
              alt={p.nom_produit}
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
          </td>

          <td>{p.nom_produit}</td>
          <td>{p.prix} €</td>
          <td>{p.stock}</td>
          <td className='seller-product-actions'>
            
                <button className="adminproductactions btn-edit btn-edit-seller" onClick={() => handleEdit(p)}>
  modifier
</button>
                <button className="adminproductactions btn-delete" onClick={() => handleDelete(p.id)}>
  supprimer
</button>
            
          </td>
        </tr>
      ))}
    </tbody>
  </table>
) : (
  <p>Aucun produit encore</p>
)}

    {showAddProduct && (
  <div className="modal-overlay Addproduct-vendeur">
    <div className="modal-box modal-box-Addproduct-vendeur">
      
      <button
        className="modal-close modal-close-Addproduct-vendeur"
        onClick={() => setShowAddProduct(false)}
      >
        ✕
      </button>

     <CreateProduit
  user={user}
  seller={seller}
  product={editingProduct}
  onClose={() => {
    setShowAddProduct(false);
    setEditingProduct(null); // reset after close
  }}
/>

    </div>
  </div>
)}
  </div>
)}

    {seller?.status === "rejected" && (
  <div className="rejected-box">
    <div className="rejected-icon">⛔</div>

    {/* <h3 className="rejected-title">
      Compte vendeur refusé
    </h3> */}

    <p className="rejected-text">
      Votre demande a été refusée. <br />
      <strong>
        Vous pourrez refaire une demande dans 3 mois.
      </strong>
    </p>

    <div className="rejected-note">
      Si vous pensez qu’il s’agit d’une erreur, <Link to="/ContactUs"> contactez le support. </Link>
    </div>
  </div>
)}

    {seller?.status === "pending" && (
      <div className="pending-box">
        <p className="pending-status">
          Votre demande est en cours de validation.
        </p>
      </div>
    )}

    {!seller && (
      <form
        className="seller-form"
        onSubmit={handleSellerApplication}
      >
        <input
          type="text"
          className="seller-input"
          placeholder="Nom de la boutique"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
        />

        <textarea
          className="seller-textarea"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          className="seller-btn"
        >
          Demander le statut vendeur
        </button>
      </form>
    )}
  </div>
)}

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