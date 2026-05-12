

// import "../Styles/OrderStatusMap.css";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// const OrderStatusMap = () => {
//     const { id } = useParams();

//     const [order, setOrder] = useState(null);
//     const [status, setStatus] = useState("");

//     // GET single order
//     const fetchOrder = async () => {
//         try {
//             const res = await fetch(`http://127.0.0.1:8000/api/commandes/${id}`);
//             if (!res.ok) return null;

//             return await res.json();
//         } catch (err) {
//             console.error(err);
//             return null;
//         }
//     };

//     // UPDATE status (Laravel PUT)
//     const handleStatusChange = async (newStatus) => {
//         setStatus(newStatus);

//         try {
//             await fetch(`http://127.0.0.1:8000/api/commandes/${id}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     statut: newStatus,
//                 }),
//             });
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     // live fetch
//     useEffect(() => {
//         const load = async () => {
//             const data = await fetchOrder();

//             if (data) {
//                 setOrder(data);
//                 setStatus(data.statut);
//             }
//         };

//         load();

//         const interval = setInterval(load, 5000);

//         return () => clearInterval(interval);
//     }, [id]);

//     return (
//         <div className="OrderStatusMap-wrapper">
//             <h1>Order Status Map</h1>
//             <p>Order ID: {id}</p>

//             {order && (
//                 <>
//                     <div className="status-wrapper">
//                         <span
//                             className={`export-cercle-status pending ${status === "pending" ? "active" : ""}`}
//                             onClick={() => handleStatusChange("pending")}
//                         />

//                         <span
//                             className={`export-cercle-status en_route ${status === "en_route" ? "active" : ""}`}
//                             onClick={() => handleStatusChange("en_route")}
//                         />

//                         <span
//                             className={`export-cercle-status a_la_diwan ${status === "a_la_diwan" ? "active" : ""}`}
//                             onClick={() => handleStatusChange("a_la_diwan")}
//                         />

//                         <span
//                             className={`export-cercle-status chez_la_poste ${status === "chez_la_poste" ? "active" : ""}`}
//                             onClick={() => handleStatusChange("chez_la_poste")}
//                         />
//                     </div>

//                     <div className="exports-liveStatus-wrapper">
//                         <p className={status === "pending" ? "active" : ""}>pending</p>
//                         <p className={status === "en_route" ? "active" : ""}>en route</p>
//                         <p className={status === "a_la_diwan" ? "active" : ""}>a la diwan</p>
//                         <p className={status === "chez_la_poste" ? "active" : ""}>chez la poste</p>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default OrderStatusMap;


// import "../Styles/ClientOrderCheck.css";
// import { useEffect, useState } from "react";

// const ClientOrderCheck = () => {
//     const [orderId, setOrderId] = useState("");
//     const [order, setOrder] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const fetchOrder = async (id) => {
//         try {
//             const res = await fetch(`http://127.0.0.1:8000/api/commandes/${id}`);
//             if (!res.ok) return null;

//             return await res.json();
//         } catch (err) {
//             console.error(err);
//             return null;
//         }
//     };

//     const handleSearch = async () => {
//         if (!orderId) return;

//         setLoading(true);

//         const data = await fetchOrder(orderId);

//         setOrder(data || null);
//         setLoading(false);
//     };

//     useEffect(() => {
//         if (!order) return;

//         const interval = setInterval(async () => {
//             const updated = await fetchOrder(order.id_commande);
//             if (updated) setOrder(updated);
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

//             {order && (
//                 <>
//                     <div className="order-card">
//                         <h2>Order #{order.id_commande}</h2>

//                         <p><strong>Total:</strong> {order.total} MAD</p>
//                         <p><strong>Status:</strong> {order.statut}</p>
//                         <p><strong>Date:</strong> {order.date_commande}</p>
//                     </div>

//                     <div className="status-wrapper">
//                         <span className={`export-cercle-status pending ${order.statut === "pending" ? "active" : ""}`} />
//                         <span className={`export-cercle-status en_route ${order.statut === "en_route" ? "active" : ""}`} />
//                         <span className={`export-cercle-status a_la_diwan ${order.statut === "a_la_diwan" ? "active" : ""}`} />
//                         <span className={`export-cercle-status chez_la_poste ${order.statut === "chez_la_poste" ? "active" : ""}`} />
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default ClientOrderCheck;



// import "../Styles/OrderStatusMap.css";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// const OrderStatusMap = () => {
//     const { id } = useParams();

//     const [order, setOrder] = useState(null);

//     // GET single order from Laravel API
//     const fetchOrder = async () => {
//         try {
//             const res = await fetch(`http://127.0.0.1:8000/api/commandes/${id}`);
//             if (!res.ok) return null;
//             return await res.json();
//         } catch (err) {
//             console.error(err);
//             return null;
//         }
//     };

//     // UPDATE order status (PUT request)
// //     const handleStatusChange = async (newStatus) => {
// //         try {
// //             await fetch(`http://127.0.0.1:8000/api/commandes/${id}`, {
// //   method: "PUT",
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// //   body: JSON.stringify({
// //     statut: newStatus,
// //   }),
// // });

// //             // re-fetch updated order from backend
// //             const updated = await fetchOrder();
// //             if (updated) setOrder(updated);

// //         } catch (err) {
// //             console.error(err);
// //         }
// //     };

// const handleStatusChange = async (newStatus) => {
//     if (!order || !order.id_commande) return; // make sure we have an order

//     setStatus(newStatus);

//     try {
//         await fetch(`http://127.0.0.1:8000/api/commandes/${order.id_commande}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 statut: newStatus,
//             }),
//         });
//     } catch (err) {
//         console.error(err);
//     }
// };

//     // Live polling every 5 seconds
//     useEffect(() => {
//         const load = async () => {
//             const data = await fetchOrder();
//             if (data) setOrder(data);
//         };

//         load();
//         const interval = setInterval(load, 5000);

//         return () => clearInterval(interval);
//     }, [id]);

//     return (
//         <div className="OrderStatusMap-wrapper">
//             <h1>Order Status Map</h1>
//             <p>Order ID: {id}</p>

//             {order ? (
//                 <>
//                     <div className="status-wrapper">
//                         <span
//                             className={`export-cercle-status pending ${order.statut === "pending" ? "active" : ""}`}
//                             onClick={() => handleStatusChange("pending")}
//                         />
//                         <span
//                             className={`export-cercle-status en_route ${order.statut === "en_route" ? "active" : ""}`}
//                             onClick={() => handleStatusChange("en_route")}
//                         />
//                         <span
//                             className={`export-cercle-status a_la_diwan ${order.statut === "a_la_diwan" ? "active" : ""}`}
//                             onClick={() => handleStatusChange("a_la_diwan")}
//                         />
//                         <span
//                             className={`export-cercle-status chez_la_poste ${order.statut === "chez_la_poste" ? "active" : ""}`}
//                             onClick={() => handleStatusChange("chez_la_poste")}
//                         />
//                     </div>

//                     <div className="exports-liveStatus-wrapper">
//                         <p className={order.statut === "pending" ? "active" : ""}>pending</p>
//                         <p className={order.statut === "en_route" ? "active" : ""}>en route</p>
//                         <p className={order.statut === "a_la_diwan" ? "active" : ""}>a la diwan</p>
//                         <p className={order.statut === "chez_la_poste" ? "active" : ""}>chez la poste</p>
//                     </div>
//                 </>
//             ) : (
//                 <p>Loading order...</p>
//             )}
//         </div>
//     );
// };

// export default OrderStatusMap;


import "../Styles/OrderStatusMap.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { Link } from "lucide-react";

import { ArrowLeft } from "lucide-react";

import  { Link } from "react-router-dom";

const OrderStatusMap = () => {
    const { id } = useParams();

    const [order, setOrder] = useState(null);
    const [status, setStatus] = useState(""); // local status for UI

    // GET single order from Laravel API
    const fetchOrder = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/commandes/${id}`);
            if (!res.ok) return null;

            const data = await res.json();
            // Laravel API returns { data: order }
            return data.data || data;
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    // UPDATE order status (PUT request)
    const handleStatusChange = async (newStatus) => {
        if (!order || !order.id_commande) return;

        // update UI immediately
        setStatus(newStatus);
        setOrder({ ...order, statut: newStatus });

        try {
            await fetch(`http://127.0.0.1:8000/api/commandes/${order.id_commande}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ statut: newStatus }),
            });
        } catch (err) {
            console.error("Error updating status:", err);
        }
    };

    // Live polling every 5 seconds
    useEffect(() => {
        const load = async () => {
            const data = await fetchOrder();
            if (data) {
                setOrder(data);
                setStatus(data.statut); // sync local status
            }
        };

        load(); // initial fetch

        const interval = setInterval(load, 5000); // poll every 5s
        return () => clearInterval(interval);
    }, [id]);

    return (
        <div className="OrderStatusMap-wrapper">
                <Link to="/AdminDashboard">
                    <ArrowLeft />
                </Link>
            <h1>Order Status Map</h1>
            <p>Order ID: {id}</p>

            {order ? (
                <>
                    <div className="status-wrapper">
                        <span
                            className={`export-cercle-status pending ${status === "pending" ? "active" : ""}`}
                            onClick={() => handleStatusChange("pending")}
                        />
                        <span
                            className={`export-cercle-status en_route ${status === "en_route" ? "active" : ""}`}
                            onClick={() => handleStatusChange("en_route")}
                        />
                        <span
                            className={`export-cercle-status a_la_diwan ${status === "a_la_diwan" ? "active" : ""}`}
                            onClick={() => handleStatusChange("a_la_diwan")}
                        />
                        <span
                            className={`export-cercle-status chez_la_poste ${status === "chez_la_poste" ? "active" : ""}`}
                            onClick={() => handleStatusChange("chez_la_poste")}
                        />
                    </div>

                    <div className="exports-liveStatus-wrapper">
                        <p className={status === "pending" ? "active" : ""}>pending</p>
                        <p className={status === "en_route" ? "active" : ""}>en route</p>
                        <p className={status === "a_la_diwan" ? "active" : ""}>a la diwan</p>
                        <p className={status === "chez_la_poste" ? "active" : ""}>chez la poste</p>
                    </div>
                </>
            ) : (
                <p>Loading order...</p>
            )}
        </div>
    );
};

export default OrderStatusMap;