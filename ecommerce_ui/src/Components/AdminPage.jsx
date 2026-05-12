import React, { useState, useEffect } from "react";
import "../Styles/AdminDashboard.css";
import {
  Home,
  Box,
  ShoppingCart,
  ArrowLeft,
  LogOut
} from "lucide-react";
import {MapPin} from  "lucide-react";
import {User as ProfileIcon} from "lucide-react";
import {ChartNoAxesCombined  as StatsIcon} from "lucide-react";
import {Truck, Contact, ShoppingBag, MessageSquareWarning} from "lucide-react";
import {useNavigate} from "react-router-dom";
import Logo from "../assets/AdminLogo.svg";
import { useModal } from "./ModalContext.jsx";


const AdminDashboard = () => {
  const [active, setActive] = useState("dashboard");
  const [user, setUserData] = useState();

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/')
}

const { showModal } = useModal()

const handledisconnect = () => {
  localStorage.removeItem('userStatus');
  localStorage.removeItem('user');
  navigate('/')
}

 useEffect(() => {
      const storedUser = localStorage.getItem("user");
  
      if (!storedUser) {
          showModal("error", "you must login first to access Admin dashboard");
          navigate("/");
          return;
      }
  
      const parsedUser = JSON.parse(storedUser);
  
      if (parsedUser?.nom_client !== "admin") {
          navigate("/UserDashboard");
          return;
      }
  
      setUserData(parsedUser);
  
     
  
  }, []);

  return (
    <div className="dashboard-container">
      
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div>
          <div className="logo">
            <img src={Logo} alt="" />
            {/* <h1 className="admin-title">Plateforme d'admin</h1> */}
            
            {/* <p>ElectroMart</p> */}
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
            <button
              className={`nav-item ${active === "statistiques" ? "active" : ""}`}
              onClick={() => setActive("statistiques")}
            >
              <StatsIcon size={18} /> Statistiques
            </button>


             <button
              className={`nav-item ${active === "contacts" ? "active" : ""}`}
              onClick={() => setActive("contacts")}
            >


              <Contact size={18} /> Contacts review
            </button>



               <button
              className={`nav-item ${active === "clients" ? "active" : ""}`}
              onClick={() => setActive("clients")}
            >


              <ShoppingBag size={18} /> Clients
            </button>


              <button
              className={`nav-item ${active === "vendeure" ? "active" : ""}`}
              onClick={() => setActive("vendeure")}
            >


              <MessageSquareWarning size={18} /> vendeure demande
            </button>



             
              
           
          </nav>
        </div>

        <div className="bottom">
          <button
              className={`nav-item ${active === "profile" ? "active" : ""}`}
              onClick={() => setActive("profile")}
            >
              <ProfileIcon size={18} /> profile
            </button>
          
          <button className="back-btn" onClick={handleHome}>
            <ArrowLeft size={16}  /> Retour au site
          </button>
          <button className="disconnect-btn" onClick={handledisconnect}>
                <LogOut size={25} />
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main">
        {active === "dashboard" && <Dashboard />}
        {active === "products" && <Products />}
        {active === "orders" && <Orders />}
        {active === "statistiques" && <Statistiques />}
        {active === "profile" && <Profile />}
        {active === "clients" && <Clients />}
        {active === "contacts" && <Contacts />}
        {active === "vendeure" && <Sellers />}
         
        
      </main>
    </div>
  );
};

export default AdminDashboard;

/* ================= SECTIONS ================= */

// const Dashboard = () => {
//   return (
//     <>
//       <h1 className="title">Dashboard</h1>
//       <div className="cards">
//         <div className="card">Revenu: 3024€</div>
//         <div className="card">Commandes: 3</div>
//         <div className="card">Produits: 6</div>
//         <div className="card">Stock: 200</div>
//       </div>
//     </>
//   );
// };


// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     total_commandes: 0,
//     total_produits: 0,
//     total_sold_products: 0,
//     total_revenue: 0,
//     best_product: null,
//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const res = await fetch(
//           "http://127.0.0.1:8000/api/dashboard-stats",
//           {
//             headers: {
//               Accept: "application/json",
//             },
//           }
//         );

//         const data = await res.json();
//         setStats(data);
//       } catch (error) {
//         console.error("Dashboard fetch error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   if (loading) {
//     return <h2>Loading dashboard...</h2>;
//   }

//   return (
//     <>
//       <h1 className="title">Dashboard</h1>

//       <div className="cards">
//         <div className="card">
//           Revenu: <strong>1000$ </strong> 
//         </div>

//         <div className="card">
//           Commandes: <strong> 50 </strong>
//         </div>

//         <div className="card">
//           Produits: <strong>35 </strong> 
//         </div>

//         <div className="card">
//           Produits vendus: <strong>25 </strong> 
//         </div>

//         <div className="card">
//           Meilleur produit:
//           <br />
//           <strong>
//             Samsung A15
//           </strong>
//         </div>
//       </div>
//     </>
//   );
// };




const Dashboard = () => {

  const [stats, setStats] = useState({
    total_commandes: 0,
    total_produits: 0,
    total_sold_products: 0,
    total_revenue: 0,
    best_product: null,
  });

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/dashboard-stats")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setStats(data);
      });

  }, []);

  return (
    <>
      <h1 className="title">Dashboard</h1>

      <div className="dashboard-cards">

        <div className="stat-card">
          Revenu: {stats.total_revenue}€
        </div>

        <div className="stat-card">
          Commandes: {stats.total_commandes}
        </div>

        <div className="stat-card">
          Produits: {stats.total_produits}
        </div>

        <div className="stat-card">
          Produits vendus: {stats.total_sold_products}
        </div>

        <div className="stat-card">
          Produit le plus vendu:
          <br />

          {stats.best_product?.nom_produit || "Aucun"}
        </div>

      </div>
    </>
  );
};




const Contacts = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch contacts from Laravel API
  const fetchContacts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/contacts");

      const result = await response.json();

      if (result.success) {
        setContacts(result.data);
      }

    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    // <div style={{ padding: "20px" }}>
    //   <h1>Contacts</h1>

    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : contacts.length === 0 ? (
    //     <p>No contacts found.</p>
    //   ) : (
    //     <table
    //       border="1"
    //       cellPadding="10"
    //       cellSpacing="0"
    //       width="100%"
    //     >
    //       <thead>
    //         <tr>
    //           <th>ID</th>
    //           <th>Name</th>
    //           <th>Lastname</th>
    //           <th>Company</th>
    //           <th>Email</th>
    //           <th>Phone</th>
    //           <th>Message</th>
    //         </tr>
    //       </thead>

    //       <tbody>
    //         {contacts.map((contact) => (
    //           <tr key={contact.id}>
    //             <td>{contact.id}</td>
    //             <td>{contact.name}</td>
    //             <td>{contact.lastname}</td>
    //             <td>{contact.company}</td>
    //             <td>{contact.email}</td>
    //             <td>{contact.phone}</td>
    //             <td>{contact.message}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   )}
    <div className="clients-table-wrapper">

  <table className="clients-table">

    <thead>
      <tr>
        <th>Nom</th>
        <th>Email</th>
        <th>Sujet</th>
        <th>Message</th>
        <th>Date</th>
      </tr>
    </thead>

    <tbody>
      {contacts.map((contact) => (
        <tr key={contact.id}>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.subject}</td>
          <td>{contact.message}</td>
          <td>
            {new Date(contact.created_at).toLocaleDateString()}
          </td>
        </tr>
      ))}
    </tbody>

  </table>

</div>
  );
};


// const Clients = () => {
//   return (
//     <>
//         <h1>Clients</h1>
//     </>
//   )
// }


const Clients = () => {

  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch clients
  const fetchClients = async () => {
    try {

      const response = await fetch("http://127.0.0.1:8000/api/clients");

      const result = await response.json();

      console.log(result);

      // If Laravel returns array directly
      if (Array.isArray(result)) {
        setClients(result);
      }

      // If Laravel returns { success, data }
      else if (result.data) {
        setClients(result.data);
      }

    } catch (error) {
      console.error("Error fetching clients:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    // <div style={{ padding: "20px" }}>
    //   <h1>Clients</h1>

    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : clients.length === 0 ? (
    //     <p>No clients found.</p>
    //   ) : (
    //     <table
    //       border="1"
    //       cellPadding="10"
    //       cellSpacing="0"
    //       width="100%"
    //     >
    //       <thead>
    //         <tr>
    //           {/* <th>ID</th> */}
    //           <th>Nom</th>
    //           <th>Email</th>
    //           <th>Téléphone</th>
    //           {/* <th>Adresse</th>
    //           <th>Date</th> */}
    //         </tr>
    //       </thead>

    //       <tbody>
    //         {clients.map((client) => (
    //           <tr key={client.id}>
    //             {/* <td>{client.id}</td> */}
    //             <td>{client.nom_client}</td>
    //             <td>{client.email}</td>
    //             {/* <td>{client.telephone}</td>
    //             <td>{client.adresse}</td> */}
    //             <td>
    //               {new Date(client.created_at).toLocaleDateString()}
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   )}
    // </div>
    <div className="clients-table-wrapper">

  <table className="clients-table">

    <thead>
      <tr>
        <th>Nom</th>
        <th>Email</th>
        <th>Téléphone</th>
        <th>Date</th>
      </tr>
    </thead>

    <tbody>
      {clients.map((client) => (
        <tr key={client.id}>
          <td>{client.nom_client}</td>
          <td>{client.email}</td>
          <td>{client.telephone}</td>
          <td>
            {new Date(client.created_at).toLocaleDateString()}
          </td>
        </tr>
      ))}
    </tbody>

  </table>

</div>
  );
};

const Sellers = () => {

  const [sellers, setSellers] = useState([]);

  async function fetchSellers() {

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/api/sellers",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const data = await response.json();

      console.log(data);

      if (data.success === true) {
        setSellers(data.sellers);
      }

    } catch (error) {
      console.log("errors", error);
    }
  }


  const handleStatusChange = async (id, status) => {
  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/seller/verify/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ status }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      setSellers((prev) =>
        prev.map((s) =>
          s.id === id ? { ...s, status: status } : s
        )
      );
    } else {
      alert(data.message || "Erreur");
    }
  } catch (err) {
    console.error(err);
  }
};

  useEffect(() => {
    fetchSellers();
  }, []);

  return (
    <>
      <h1>Sellers</h1>

    <div className="sellers-table-wrapper">

  <table className="sellers-table">

    <thead>
      <tr>
        <th>ID User</th>
        <th>Boutique</th>
        <th>Description</th>
        <th>Status</th>
        <th>actions</th>
      </tr>
    </thead>

    <tbody>
      {sellers.length > 0 ? (
        sellers.map((seller) => (
          <tr key={seller.user_id}>

            <td>{seller.user_id}</td>

            <td>{seller.shop_name}</td>

            <td>{seller.description}</td>

            <td>
              <span className={`status-badge ${seller.status}`}>
                {seller.status}
              </span>
            </td>

            <td>
                
                                <select
                value={seller.status}
                onChange={(e) => handleStatusChange(seller.id, e.target.value)}
              >
                <option value="pending">En attente</option>
                <option value="verified">Accepter la demande</option>
                <option value="rejected">Refuser la demande</option>
                <option value="closed">Fermer le shop</option>
              </select>
                
                

            </td>

          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4" className="empty-row">
            No sellers found
          </td>
        </tr>
      )}
    </tbody>

  </table>

</div>
    </>
  );
};






import CreateProduit from "./Uploadproduit.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

const itemsPerPage = 6;

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


  const indexOfLastProduct = currentPage * itemsPerPage;
const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

const currentProducts = products.slice(
  indexOfFirstProduct,
  indexOfLastProduct
);

const totalPages = Math.ceil(products.length / itemsPerPage);


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
        {currentProducts.map((p) => (
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
                <button className="adminproductactions btn-edit" onClick={() => handleEdit(p)}>
  modifier
</button>
                <button className="adminproductactions btn-delete" onClick={() => handleDelete(p.id_produit)}>
  supprimer
</button>
            </div>
          </div>
        ))}
        <div className="pagination">
  <button
    onClick={() => setCurrentPage((prev) => prev - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>

  <span>
    Page {currentPage} / {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage((prev) => prev + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>
      </div>

      {/* MODAL */}
     {showModal && (
  <div className="modal-overlay">

   
    <div className="modal-box modalProductadd">
       <button
        className="modal-cancel"
        onClick={() => {
          setShowModal(false);
          setEditingProduct(null);
        }}
      >
        X
      </button>
      <CreateProduit
        product={editingProduct}   // 🟢 THIS IS MISSING
        onClose={() => {
          setShowModal(false);
          setEditingProduct(null); // 🟢 IMPORTANT RESET
          fetchProducts();
        }}
      />

      
      
    </div>
  </div>
)}
    </>
  );
};





const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(1);

const itemsPerPage = 6;

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

   const handleProductDeliveryStatus = (id_commande) => { 
      navigate(`/Order/${id_commande}`)
 }

 const indexOfLastOrder = currentPage * itemsPerPage;
const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;

const currentOrders = orders.slice(
  indexOfFirstOrder,
  indexOfLastOrder
);

const totalPages = Math.ceil(orders.length / itemsPerPage);

  return (
    <>
      <h1 className="title">Commandes</h1>

      <div className="orders-container">
        {Array.isArray(currentOrders) &&
  currentOrders.map((order) => (
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
                {/* <button >validate</button> */}
                    <button
        onClick={() => handleProductDeliveryStatus(order.id_commande)}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <Truck className="DeliveryIcon" size={20} />
      </button>
          </div>
        ))}

        <div className="pagination">
  <button
    onClick={() => setCurrentPage((prev) => prev - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>

  <span>
    Page {currentPage} / {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage((prev) => prev + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>
      </div>
    </>
  );
};




import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistiques = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommandes = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/commandes");
        if (!res.ok) return;

        const data = await res.json();
        const commandes = data.data || [];

        // Count orders by status
        const statusCounts = commandes.reduce((acc, commande) => {
          const statut = commande.statut;
          acc[statut] = (acc[statut] || 0) + 1;
          return acc;
        }, {});

        setChartData({
          labels: Object.keys(statusCounts),
          datasets: [
            {
              label: "Number of Orders",
              data: Object.values(statusCounts),
              backgroundColor: ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"]
            }
          ]
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCommandes();
  }, []);

  return (
    <div style={{ width: "80%", margin: "50px auto" }}>
      <h2>Statistiques des commandes</h2>
      {loading ? <p>Loading chart...</p> : <Bar data={chartData} />}
    </div>
  );
};








const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // parse JSON string into object
    }
  }, []);

  if (!user) return <p>No profile found. Please login.</p>;

  return (
    <div className="profile-wrapper">
      <h1>My Profile</h1>
      <p><strong>Name:</strong> {user.nom_client} {user.prenom}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {/* <p><strong>Phone:</strong> {user.telephone}</p> */}
      {/* Add more fields as stored */}
    </div>
  );
};



