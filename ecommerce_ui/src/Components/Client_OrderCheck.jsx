
// import "../Styles/ClientOrderCheck.css";
// import supabase from "../utils/supabase";
// import { useEffect, useState } from "react";

// const ClientOrderCheck = () => {
//     const [orderId, setOrderId] = useState("");
//     const [order, setOrder] = useState(null);
//     const [status, setStatus] = useState("");
//     const [loading, setLoading] = useState(false);

//     async function fetchOrder(id) {
//         const { data, error } = await supabase
//             .from("exports")
//             .select("*")
//             .eq("id", id)
//             .single();

//         if (error) {
//             console.error(error);
//             return null;
//         }

//         return data;
//     }

//     const handleSearch = async () => {
//         if (!orderId) return;

//         setLoading(true);

//         const data = await fetchOrder(orderId);

//         if (data) {
//             setOrder(data);
//             setStatus(data.status);
//         } else {
//             setOrder(null);
//             setStatus("");
//         }

//         setLoading(false);
//     };

//     useEffect(() => {
//     if (!order) return;

//     const interval = setInterval(async () => {
//         const updated = await fetchOrder(order.id);

//         if (updated) {
//             setOrder(updated);
//             setStatus(updated.status);
//         }
//     }, 5000); // refresh every 5s

//     return () => clearInterval(interval);
// }, [order]);

//     return (
//         <div className="client-check-wrapper">

//             {/* SEARCH */}
//             <div className="search-box">
//                 <input
//                     type="text"
//                     placeholder="Enter Order ID..."
//                     value={orderId}
//                     onChange={(e) => setOrderId(e.target.value)}
//                 />

//                 <button onClick={handleSearch}>
//                     Track Order
//                 </button>
//             </div>

//             {/* LOADING */}
//             {loading && <p>Loading order...</p>}

//             {/* NOT FOUND */}
//             {!loading && orderId && !order && (
//                 <p className="not-found">Order not found</p>
//             )}

//             {/* ORDER VIEW */}
//             {order && (
//                 <>
//                     {/* ORDER INFO */}
//                     <div className="order-card">
//                         <h2>Order #{order.id}</h2>

//                         <p><strong>Client:</strong> {order.client}</p>
//                         <p><strong>Product:</strong> {order.product}</p>
//                         <p><strong>Country:</strong> {order.country}</p>
//                         <p><strong>Amount:</strong> {order.amount} MAD </p>
//                         <p><strong>Status:</strong> {status}</p>
//                         <p><strong>Created:</strong> {order.created_at}</p>
//                     </div>

//                     {/* STATUS TRACKER (READ ONLY) */}
//                     <div className="status-wrapper">

//                         <span className={`export-cercle-status pending ${status === "pending" ? "active" : ""}`}></span>

//                         <span className={`export-cercle-status en_route ${status === "en_route" ? "active" : ""}`}></span>

//                         <span className={`export-cercle-status a_la_diwan ${status === "a_la_diwan" ? "active" : ""}`}></span>

//                         <span className={`export-cercle-status chez_la_poste ${status === "chez_la_poste" ? "active" : ""}`}></span>

//                     </div>

//                     {/* LABELS */}
//                     <div className="labels">
//                         <p>Pending</p>
//                         <p>En route</p>
//                         <p>A la diwan</p>
//                         <p>Chez la poste</p>
//                     </div>

//                     {/* LIVE MAP */}
//                     <div className="map-section">
//                         <h3>Live Delivery Map</h3>

//                         <div className="map-placeholder">
//                             {/* Replace later with Google Maps / Leaflet */}
//                             📍 Tracking map will appear here
//                         </div>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default ClientOrderCheck;


// import "../Styles/ClientOrderCheck.css";
// import { useEffect, useState } from "react";

// const ClientOrderCheck = () => {
//     const [orderId, setOrderId] = useState("");
//     const [order, setOrder] = useState(null);
//     const [status, setStatus] = useState("");
//     const [loading, setLoading] = useState(false);

//     // GET order from Laravel
//  const fetchOrder = async (id) => {
//     if (!id) return null; // prevent fetching undefined
//     try {
//         const res = await fetch(`http://127.0.0.1:8000/api/commandes/${id}`);
//         if (!res.ok) return null;
//         return await res.json();
//     } catch (err) {
//         console.error(err);
//         return null;
//     }
// };

//     const handleSearch = async () => {
//         if (!orderId) return;

//         setLoading(true);

//         const data = await fetchOrder(orderId);

//         if (data) {
//             setOrder(data);
//             setStatus(data.statut);
//         } else {
//             setOrder(null);
//             setStatus("");
//         }

//         setLoading(false);
//     };

//     // live refresh
//     useEffect(() => {
//         if (!order) return;

//         const interval = setInterval(async () => {
//             const updated = await fetchOrder(order.id_commande);

//             if (updated) {
//                 setOrder(updated);
//                 setStatus(updated.statut);
//             }
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [order]);

//     return (
//         <div className="client-check-wrapper">

//             <div className="search-box">
//                 <input
//                     value={orderId}
//                     onChange={(e) => setOrderId(e.target.value)}
//                     placeholder="Enter Order ID..."
//                 />

//                 <button onClick={handleSearch}>
//                     Track Order
//                 </button>
//             </div>

//             {loading && <p>Loading...</p>}

//             {!loading && orderId && !order && (
//                 <p className="not-found">Order not found</p>
//             )}

//             {order && (
//                 <>
//                     <div className="order-card">
//                         <h2>Order #{order.id_commande}</h2>

//                         <p><strong>Total:</strong> {order.total} MAD</p>
//                         <p><strong>Status:</strong> {status}</p>
//                         <p><strong>Date:</strong> {order.date_commande}</p>
//                     </div>

//                     <div className="status-wrapper">
//                         <span className={`export-cercle-status pending ${status === "pending" ? "active" : ""}`}></span>
//                         <span className={`export-cercle-status en_route ${status === "en_route" ? "active" : ""}`}></span>
//                         <span className={`export-cercle-status a_la_diwan ${status === "a_la_diwan" ? "active" : ""}`}></span>
//                         <span className={`export-cercle-status chez_la_poste ${status === "chez_la_poste" ? "active" : ""}`}></span>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default ClientOrderCheck;


import "../Styles/ClientOrderCheck.css";
import { useEffect, useState } from "react";

const ClientOrderCheck = () => {
    const [orderId, setOrderId] = useState("");
    const [order, setOrder] = useState(null);
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    // GET order from Laravel
    const fetchOrder = async (id) => {
        if (!id) return null;
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/commandes/${id}`);
            if (!res.ok) return null;

            const data = await res.json();
            return data.data || null; // <-- unwrap "data" property
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    const handleSearch = async () => {
        if (!orderId) return;

        setLoading(true);

        const data = await fetchOrder(orderId);

        if (data) {
            setOrder(data);
            setStatus(data.statut);
        } else {
            setOrder(null);
            setStatus("");
        }

        setLoading(false);
    };

    // live refresh
    useEffect(() => {
        if (!order) return;

        const interval = setInterval(async () => {
            const updated = await fetchOrder(order.id_commande);
            if (updated) {
                setOrder(updated);
                setStatus(updated.statut);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [order]);

    return (
        <div className="client-check-wrapper">
            <div className="search-box">
                <input
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="Enter Order ID..."
                />
                <button onClick={handleSearch}>Track Order</button>
            </div>

            {loading && <p>Loading...</p>}

            {!loading && orderId && !order && <p className="not-found">Order not found</p>}

            {order && (
                <>
                    <div className="order-card">
                        <h2>Order #{order.id_commande}</h2>
                        <p><strong>Total:</strong> {order.total} MAD</p>
                        <p><strong>Status:</strong> {status}</p>
                        <p><strong>Date:</strong> {order.date_commande}</p>
                    </div>

                    <div className="status-wrapper">
                        <span className={`export-cercle-status pending ${status === "pending" ? "active" : ""}`}></span>
                        <span className={`export-cercle-status en_route ${status === "en_route" ? "active" : ""}`}></span>
                        <span className={`export-cercle-status a_la_diwan ${status === "a_la_diwan" ? "active" : ""}`}></span>
                        <span className={`export-cercle-status chez_la_poste ${status === "chez_la_poste" ? "active" : ""}`}></span>
                    </div>
                </>
            )}
        </div>
    );
};

export default ClientOrderCheck;