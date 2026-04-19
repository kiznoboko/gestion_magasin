// import React from "react";
// import "../Styles/AdminDashboard.css";
// import {
//   Home,
//   Box,
//   ShoppingCart,
//   ArrowLeft,
// } from "lucide-react";

// const AdminDashboard = () => {
//   return (
//     <div className="dashboard-container">
//       {/* SIDEBAR */}
//       <aside className="sidebar">
//         <div>
//           <div className="logo">
//             <h1>Admin Panel</h1>
//             <p>ElectroShop</p>
//           </div>

//           <nav className="nav">
//             <button className="nav-item active">
//               <Home size={18} /> Dashboard
//             </button>

//             <button className="nav-item">
//               <Box size={18} /> Produits
//             </button>

//             <button className="nav-item">
//               <ShoppingCart size={18} /> Commandes
//             </button>
//           </nav>
//         </div>

//         <div className="bottom">
//           <button className="back-btn">
//             <ArrowLeft size={16} /> Retour au site
//           </button>
//         </div>
//       </aside>

//       {/* MAIN */}
//       <main className="main">
//         <h1 className="title">Dashboard</h1>

//         {/* CARDS */}
//         <div className="cards">
//           <Card title="Revenu total" value="3024.00€" color="blue" />
//           <Card title="Commandes" value="3" color="green" />
//           <Card title="Produits" value="6" color="purple" />
//           <Card title="Stock total" value="200" color="orange" />
//         </div>

//         {/* TABLE */}
//         <div className="table-container">
//           <h2>Commandes récentes</h2>

//           <table>
//             <thead>
//               <tr>
//                 <th>N° Commande</th>
//                 <th>Client</th>
//                 <th>Date</th>
//                 <th>Total</th>
//                 <th>Statut</th>
//               </tr>
//             </thead>

//             <tbody>
//               <Row
//                 id="ORD-003"
//                 client="Sophie Bernard"
//                 date="2026-04-18"
//                 total="428.00€"
//                 status="En cours"
//               />

//               <Row
//                 id="ORD-002"
//                 client="Jean Martin"
//                 date="2026-04-17"
//                 total="1299.00€"
//                 status="Expédiée"
//               />

//               <Row
//                 id="ORD-001"
//                 client="Marie Dubois"
//                 date="2026-04-15"
//                 total="1297.00€"
//                 status="Livrée"
//               />
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// };

// /* CARD */
// const Card = ({ title, value, color }) => {
//   return (
//     <div className="card">
//       <div className={`icon ${color}`}></div>
//       <p>{title}</p>
//       <h3>{value}</h3>
//     </div>
//   );
// };

// /* ROW */
// const Row = ({ id, client, date, total, status }) => {
//   return (
//     <tr>
//       <td>{id}</td>
//       <td>{client}</td>
//       <td>{date}</td>
//       <td>{total}</td>
//       <td>
//         <span className={`status ${status}`}>
//           {status}
//         </span>
//       </td>
//     </tr>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from "react";
import "../Styles/AdminDashboard.css";
import {
  Home,
  Box,
  ShoppingCart,
  ArrowLeft,
} from "lucide-react";

import {useNavigate} from "react-router-dom";


const AdminDashboard = () => {
  const [active, setActive] = useState("dashboard");

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/')
}


  return (
    <div className="dashboard-container">
      
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div>
          <div className="logo">
            <h1>Admin Panel</h1>
            <p>ElectroShop</p>
          </div>

          <nav className="nav">
            <button
              className={`nav-item ${active === "dashboard" ? "active" : ""}`}
              onClick={() => setActive("dashboard")}
            >
              <Home size={18} /> Dashboard
            </button>

            <button
              className={`nav-item ${active === "products" ? "active" : ""}`}
              onClick={() => setActive("products")}
            >
              <Box size={18} /> Produits
            </button>

            <button
              className={`nav-item ${active === "orders" ? "active" : ""}`}
              onClick={() => setActive("orders")}
            >
              <ShoppingCart size={18} /> Commandes
            </button>
          </nav>
        </div>

        <div className="bottom">
          <button className="back-btn">
            <ArrowLeft size={16}  onClick={handleHome}/> Retour au site
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main">
        {active === "dashboard" && <Dashboard />}
        {active === "products" && <Products />}
        {active === "orders" && <Orders />}
      </main>
    </div>
  );
};

/* ================= SECTIONS ================= */

const Dashboard = () => {
  return (
    <>
      <h1 className="title">Dashboard</h1>
      <div className="cards">
        <div className="card">Revenu: 3024€</div>
        <div className="card">Commandes: 3</div>
        <div className="card">Produits: 6</div>
        <div className="card">Stock: 200</div>
      </div>
    </>
  );
};


// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//     const image_url = "http://127.0.0.1:8000/storage/";

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/produits")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="card">Chargement des produits...</div>;
//   }

//   return (
//     <>

//         <div className="AdminPage-product-header">
//                 <h1 className="title">Produits</h1>
//                  <button className="submit-btn" type="submit">
//           Ajouter
//         </button>

//         </div>
      

//       <div className="products-grid">
//         {products.map((p) => (
//           <div className="product-card-admin" key={p.id_produit}>
//             <img 
//                                     src={p.image ? `${image_url}${p.image}` : 'https://via.placeholder.com/400'} 
//                                     alt={p.nom_produit} 
//                                     className="product-image"
//                                 />
//             <h3>{p.nom_produit}</h3>
//             <p><strong>Prix:</strong> {p.prix}€</p>
//             <p><strong>Stock:</strong> {p.stock}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };



import CreateProduit from "./Uploadproduit.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
  setEditingProduct(product);
  setShowModal(true);
};

  const image_url = "http://127.0.0.1:8000/storage/";

  const handleDelete = async (id) => {
  if (!window.confirm("Voulez-vous supprimer ce produit ?")) return;

  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/produits/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) throw new Error("Delete failed");

    // refresh list
    fetchProducts();
  } catch (err) {
    console.error(err);
    alert("Erreur lors de la suppression");
  }
};

  const fetchProducts = () => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/produits")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div className="card">Chargement des produits...</div>;

  return (
    <>
      <div className="AdminPage-product-header">
        <h1 className="title">Produits</h1>

        <button
          className="submit-btn"
          onClick={() => setShowModal(true)}
        >
          Ajouter
        </button>
      </div>

      {/* GRID */}
      <div className="products-grid-admin">
        {products.map((p) => (
          <div className="product-card-admin" key={p.id_produit}>
            <img
              src={
                p.image
                  ? `${image_url}${p.image}`
                  : "https://via.placeholder.com/400"
              }
              className="product-image"
              alt={p.nom_produit}
            />
            <h3>{p.nom_produit}</h3>
            <strong>{p.category}</strong>
            <p>{p.prix}€</p>
            <p>Stock: {p.stock}</p>
            <div className="admin-product-actions">
                <button onClick={() => handleEdit(p)}>
  edit
</button>
                <button onClick={() => handleDelete(p.id_produit)}>
  delete
</button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
     {showModal && (
  <div className="modal-overlay">
    <div className="modal-box">
      <CreateProduit
        product={editingProduct}   // 🟢 THIS IS MISSING
        onClose={() => {
          setShowModal(false);
          setEditingProduct(null); // 🟢 IMPORTANT RESET
          fetchProducts();
        }}
      />

      <button
        className="modal-cancel"
        onClick={() => {
          setShowModal(false);
          setEditingProduct(null);
        }}
      >
        Annuler
      </button>
    </div>
  </div>
)}
    </>
  );
};


// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/api/commandes", {
//           headers: {
//             Accept: "application/json",
//           },
//         });

//         const data = await res.json();
//         setOrders(data.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <>
//       <h1 className="title">Commandes</h1>

//       <div className="card">
//         {orders.map((order) => (
//           <div key={order.id_commande} className="order-box">

//             {/* ORDER HEADER */}
//             <h3>
//               ORD-{order.id_commande} - {order.statut}
//             </h3>

//             <p>Total: {order.total}€</p>
//             <p>Date: {order.date_commande}</p>

//             {/* LINES */}
//             <div className="order-lines">
//               {order.lignes.map((line) => (
//                 <div key={line.id_ligne} className="line-item">
//                   <span>{line.produit?.nom_produit}</span>
//                   <span>Qty: {line.quantite}</span>
//                   <span>{line.sous_total}€</span>
//                 </div>
//               ))}
//             </div>

//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/api/commandes");
//         const data = await res.json();
//         setOrders(data.data || data || []);
//       } catch (err) {
//         console.error("Error fetching orders", err);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <>
//       <h1 className="title">Commandes</h1>

//       <div className="orders-container">
//         {Array.isArray(orders) && orders.map((order) => (
//           <div key={order.id_commande} className="order-card">

//             <div className="order-header">
//               <h3>ORD-{order.id_commande}</h3>
//               <span className={`status ${order.statut}`}>
//                 {order.statut}
//               </span>
//             </div>

//             <p className="order-date">
//               {new Date(order.date_commande).toLocaleDateString()}
//             </p>

//             {/* LIGNES */}
//             <div className="order-lines">
//               {order.lignes?.map((line) => (
//                 <div key={line.id_ligne} className="line-item">
//                   <span>{line.produit?.nom_produit}</span>
//                   <span>x{line.quantite}</span>
//                   <span>{line.sous_total}€</span>
//                 </div>
//               ))}
//             </div>

//             <div className="order-total">
//               Total: {order.total}€
//             </div>

//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/commandes");
        const data = await res.json();

        console.log("ORDERS API:", data);

        setOrders(data.data || data || []);
      } catch (err) {
        console.error("Error fetching orders", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <h1 className="title">Commandes</h1>

      <div className="orders-container">
        {Array.isArray(orders) && orders.map((order) => (
          <div key={order.id_commande} className="order-card">

            <div className="order-header">
              <h3>ORD-{order.id_commande}</h3>
              <span className={`status ${order.statut}`}>
                {order.statut}
              </span>
            </div>

            <p className="order-date">
              {new Date(order.date_commande).toLocaleDateString()}
            </p>

            <div className="order-lines">
              {order.lignes?.map((line) => (
                <div key={line.id_ligne} className="line-item">
                  <span>{line.produit?.nom_produit}</span>
                  <strong>{line.produit?.category}</strong>
                  <span>x{line.quantite}</span>
                  <span>{line.sous_total}€</span>
                </div>
              ))}
              
            </div>

            <div className="order-total">
              Total: {order.total}€
            </div>
                <button>validate</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminDashboard;