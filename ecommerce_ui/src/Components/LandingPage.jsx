// import React from 'react';
// import { ShoppingCart, User, Star } from 'lucide-react';
// import '../Styles/LandingPage.css'; // Import the vanilla CSS

// const LandingPage = ({ products }) => {
//     const categories = ['Tous', 'Smartphones', 'Ordinateurs', 'Audio', 'Accessoires', 'Tablettes'];

//     return (
//         <div className="page-wrapper">
//             <header className="header">
//                 <div className="container header-content">
//                     <div className="logo">
//                         <div className="logo-icon"></div>
//                         <span>ElectroShop</span>
//                     </div>
//                     <nav className="nav-links">
//                         <a href="#">Accueil</a>
//                         <ShoppingCart size={20} className="icon-btn" />
//                         <button className="admin-btn">
//                             <User size={16} /> <span>Admin</span>
//                         </button>
//                     </nav>
//                 </div>
//             </header>

//             <section className="hero">
//                 <div className="container">
//                     <h1>Bienvenue chez ElectroShop</h1>
//                     <p>Découvrez notre sélection de produits électroniques de qualité</p>
//                     <div className="hero-stats">
//                         <div className="stat-item">
//                             <div className="stat-label">Livraison gratuite</div>
//                             <div className="stat-value">Dès 50€</div>
//                         </div>
//                         <div className="stat-item">
//                             <div className="stat-label">Garantie</div>
//                             <div className="stat-value">2 ans</div>
//                         </div>
//                         <div className="stat-item">
//                             <div className="stat-label">Support</div>
//                             <div className="stat-value">7j/7</div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <main className="container">
//                 <div className="section-header">
//                     <h2>Nos Produits</h2>
//                     <div className="category-list">
//                         {categories.map((cat, i) => (
//                             <button key={cat} className={`cat-pill ${i === 0 ? 'active' : ''}`}>
//                                 {cat}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="product-grid">
//                     {products.map((product) => (
//                         <div key={product.id_produit} className="product-card">
//                             <div className="product-img-box">
//                                 <img src={product.image_url || 'https://via.placeholder.com/400'} alt={product.nom_produit} />
//                             </div>
//                             <div className="product-info">
//                                 <div className="rating">
//                                     <Star size={14} fill="currentColor" />
//                                     <Star size={14} fill="currentColor" />
//                                     <Star size={14} fill="currentColor" />
//                                     <Star size={14} fill="currentColor" />
//                                     <span style={{color: '#9ca3af', marginLeft: '5px'}}>(4.8)</span>
//                                 </div>
//                                 <h3 className="product-name">{product.nom_produit}</h3>
//                                 <div className="product-price">{product.prix}€</div>
//                                 <div className="product-footer">
//                                     <span className="stock-label">Stock: {product.stock}</span>
//                                     <button className="add-btn">
//                                         <ShoppingCart size={16} /> Ajouter
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default LandingPage;


// import React, { useState, useEffect } from 'react'; // Added useState and useEffect
// import { ShoppingCart, User, Star } from 'lucide-react';
// import '../Styles/LandingPage.css';

// const LandingPage = () => {
//     // 1. Initialize state as an empty array to prevent .map() from crashing
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const categories = ['Tous', 'Smartphones', 'Ordinateurs', 'Audio', 'Accessoires', 'Tablettes'];
//     const image_url = "http://127.0.0.1:8000/storage/"
//     // 2. Fetch data from your Laravel endpoint on component mount
//    useEffect(() => {
//     // Note the added /api/ prefix
//     fetch('http://localhost:8000/api/produits') 
//         .then(response => {
//             if (!response.ok) {
//                 // This helps you catch errors BEFORE trying to parse JSON
//                 throw new Error('Server returned HTML instead of JSON');
//             }
//             return response.json();
//         })
//         .then(data => {
//             setProducts(data);
//             console.log('products')
//             setLoading(false);
//         })
//         .catch(error => {
//             console.error('Error fetching products:', error);
//             setLoading(false);
//         });
// }, []);

//     // 3. Show a loading state or return null until data is ready
//     if (loading) {
//         return <div className="container">Chargement...</div>;
//     }

//     return (
//         <div className="page-wrapper">
//             <header className="header">
//                 <div className="container header-content">
//                     <div className="logo">
//                         <div className="logo-icon"></div>
//                         <span>ElectroShop</span>
//                     </div>
//                     <nav className="nav-links">
//                         <a href="#">Accueil</a>
//                         <ShoppingCart size={20} className="icon-btn" />
//                         <button className="admin-btn">
//                             <User size={16} /> <span>Admin</span>
//                         </button>
//                     </nav>
//                 </div>
//             </header>

//             <section className="hero">
//                 <div className="container">
//                     <h1>Bienvenue chez ElectroShop</h1>
//                     <p>Découvrez notre sélection de produits électroniques de qualité</p>
//                     <div className="hero-stats">
//                         <div className="stat-item">
//                             <div className="stat-label">Livraison gratuite</div>
//                             <div className="stat-value">Dès 50€</div>
//                         </div>
//                         <div className="stat-item">
//                             <div className="stat-label">Garantie</div>
//                             <div className="stat-value">2 ans</div>
//                         </div>
//                         <div className="stat-item">
//                             <div className="stat-label">Support</div>
//                             <div className="stat-value">7j/7</div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <main className="container">
//                 <div className="section-header">
//                     <h2>Nos Produits</h2>
//                     <div className="category-list">
//                         {categories.map((cat, i) => (
//                             <button key={cat} className={`cat-pill ${i === 0 ? 'active' : ''}`}>
//                                 {cat}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="product-grid">
//                     {/* products is now guaranteed to be an array */}
//                     {products.map((product) => (
//                         <div key={product.id_produit} className="product-card">
//                             <div className="product-img-box">
//                                 <img 
//   src={
//     product.image
//       ? `${image_url}${product.image}`
//       : 'https://via.placeholder.com/400'
//   }
//   alt={product.nom_produit}
// />
//                             </div>
//                             <div className="product-info">
//                                 <div className="rating">
//                                     <Star size={14} fill="currentColor" />
//                                     <Star size={14} fill="currentColor" />
//                                     <Star size={14} fill="currentColor" />
//                                     <Star size={14} fill="currentColor" />
//                                     <span style={{color: '#9ca3af', marginLeft: '5px'}}>(4.8)</span>
//                                 </div>
//                                 <h3 className="product-name">{product.nom_produit}</h3>
//                                 <div className="product-price">{product.prix}€</div>
//                                 <div className="product-footer">
//                                     <span className="stock-label">Stock: {product.stock}</span>
//                                     <button className="add-btn">
//                                         <ShoppingCart size={16} /> Ajouter
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default LandingPage;

// working

// import React, { useState, useEffect } from 'react';
// import { ShoppingCart, User, Star, Eye, X } from 'lucide-react'; // Added Eye and X
// import '../Styles/LandingPage.css';

// const LandingPage = () => {
//     const [selectedCategory, setSelectedCategory] = useState("Tous");
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedProduct, setSelectedProduct] = useState(null); // State for modal
//     const [cartCount, setCartCount] = useState(0);
// const [cart, setCart] = useState([]);

//     const categories = ['Tous', 'Smartphones', 'Ordinateurs', 'Audio', 'Accessoires', 'Tablettes'];
//     const image_url = "http://127.0.0.1:8000/storage/";
//     const filteredProducts =
//   selectedCategory === "Tous"
//     ? products
//     : products.filter((p) => p.category === selectedCategory);

//     const addToCart = (product) => {
//   const existing = JSON.parse(localStorage.getItem("cart")) || [];

//   const updated = [...existing, product];

//   localStorage.setItem("cart", JSON.stringify(updated));
// };

//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/api/produits') 
//             .then(response => {
//                 if (!response.ok) throw new Error('Server error');
//                 return response.json();
//             })
//             .then(data => {
//                 setProducts(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 setLoading(false);
//             });
//     }, []);

//     useEffect(() => {
//   const stored = JSON.parse(localStorage.getItem("cart")) || [];
//   setCart(stored);
//   setCartCount(stored.length);
// }, []);

//     if (loading) return <div className="loading-state">Chargement...</div>;

//     return (
//         <div className="page-wrapper">
//             {/* --- HEADER --- */}
//             <header className="header">
//                 <div className="container header-content">
//                     <div className="logo">
//                         <div className="logo-icon"></div>
//                         <span>ElectroShop</span>
//                     </div>
//                     <nav className="nav-links">
//                         <a href="#">Accueil</a>
//                         {/* <ShoppingCart size={20} className="icon-btn" /> */}
//                         <div className="cart-wrapper">
//   <ShoppingCart size={20} className="icon-btn" />

//   {cartCount > 0 && (
//     <span className="cart-badge">{cartCount}</span>
//   )}

//   {/* Hover dropdown */}
//   <div className="cart-dropdown">
//     {cart.length === 0 ? (
//       <p>Panier vide</p>
//     ) : (
//       <>
//         {cart.map((item, i) => (
//           <div key={i} className="cart-item">
//             <strong>{item.nom_produit}</strong>
//             <p>{item.prix}€</p>
//             <small>{item.category}</small>
//           </div>
//         ))}

//         <button className="checkout-btn">
//           Proceed to checkout
//         </button>
//       </>
//     )}
//   </div>
// </div>
//                         <button className="admin-btn">
//                             <User size={16} /> <span>Admin</span>
//                         </button>
//                     </nav>
//                 </div>
//             </header>

//             {/* --- HERO --- */}
//             <section className="hero">
//                 <div className="hero-container">
//                     <h1>Bienvenue chez ElectroShop</h1>
//                     <p>Découvrez notre sélection de produits électroniques de qualité</p>
//                     <div className="hero-stats">
//                         <div className="stat-item">
//                             <div className="stat-label">Livraison gratuite</div>
//                             <div className="stat-value">Dès 50€</div>
//                         </div>
//                         <div className="stat-item">
//                             <div className="stat-label">Garantie</div>
//                             <div className="stat-value">2 ans</div>
//                         </div>
//                         <div className="stat-item">
//                             <div className="stat-label">Support</div>
//                             <div className="stat-value">7j/7</div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* --- MAIN CONTENT --- */}
//             <main className="container">
//                 <div className="section-header">
//                     <h2>Nos Produits</h2>
//                     <div className="category-list">
//   {categories.map((cat) => (
//     <button
//       key={cat}
//       onClick={() => setSelectedCategory(cat)}
//       className={`cat-pill ${selectedCategory === cat ? "active" : ""}`}
//     >
//       {cat}
//     </button>
//   ))}
// </div>
//                 </div>

//                 <div className="product-grid">
//                     {filteredProducts.map((product) => (
//                         <div key={product.id_produit} className="product-card">
//                             <div className="product-img-box">
//                                 <img 
//                                     src={product.image ? `${image_url}${product.image}` : 'https://via.placeholder.com/400'} 
//                                     alt={product.nom_produit} 
//                                 />
//                             </div>
//                             <div className="product-info">
//                                 <div className="rating">
//                                     <Star size={14} fill="currentColor" />
//                                     <Star size={14} fill="currentColor" />
//                                     <Star size={14} fill="currentColor" />
//                                     <Star size={14} fill="currentColor" />
//                                     <span style={{color: '#9ca3af', marginLeft: '5px'}}>(4.8)</span>
//                                 </div>
                                
//                                 <h3 className="product-name">{product.nom_produit}</h3>
//                                 <strong className='product-category'>{product.category}</strong>
//                                 <div className="product-price">{product.prix}€</div>
                                
//                                 <div className="product-footer">
//                                     <span className="stock-label">Stock: {product.stock}</span>
//                                     <div className="action-buttons">
//                                         <button 
//                                             className="preview-btn" 
//                                             onClick={() => setSelectedProduct(product)}
//                                         >
//                                             <Eye size={16} />
//                                         </button>
//                                        <button className="add-btn" onClick={() => addToCart(product)}>
//   <ShoppingCart size={16} /> Ajouter
// </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </main>

//             {/* --- FOOTER --- */}
//             <footer className="footer">
//     <div className="footer-content">
//         <div className="footer-section">
//             <h4>ElectroShop</h4>
//             <p>Votre destination high-tech préférée.</p>
//         </div>
//         <div className="footer-section">
//             <h4>Liens Rapides</h4>
//             <ul>
//                 <li><a href="#">Produits</a></li>
//                 <li><a href="#">Panier</a></li>
//             </ul>
//         </div>
//         <div className="footer-section">
//             <h4>Contact</h4>
//             <p>Email: contact@electroshop.ma</p>
//         </div>
//     </div>
//     <div className="footer-bottom">
//         <p>&copy; 2026 ElectroShop - Tous droits réservés.</p>
//     </div>
// </footer>

//             {/* --- PRODUCT MODAL --- */}
//             {selectedProduct && (
//                 <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
//                     <div className="modal-content" onClick={e => e.stopPropagation()}>
//                         <button className="close-modal" onClick={() => setSelectedProduct(null)}>
//                             <X size={24} />
//                         </button>
//                         <div className="modal-body">
//                             <div className="modal-image">
//                                 <img 
//                                     src={selectedProduct.image ? `${image_url}${selectedProduct.image}` : 'https://via.placeholder.com/400'} 
//                                     alt={selectedProduct.nom_produit} 
//                                 />
//                             </div>
//                             <div className="modal-details">
//                                 <span className="modal-category">Électronique</span>
//                                 <h2>{selectedProduct.nom_produit}</h2>
//                                 <p className="modal-price">{selectedProduct.prix}€</p>
//                                 <p className="modal-description">
//                                     Découvrez le nouveau {selectedProduct.nom_produit}. Un produit de haute qualité conçu pour répondre à vos besoins technologiques les plus exigeants.
//                                 </p>
//                                 <div className="modal-meta">
//                                     <p><strong>Disponibilité:</strong> {selectedProduct.stock > 0 ? 'En stock' : 'Rupture'}</p>
//                                     <p><strong>Quantité restante:</strong> {selectedProduct.stock} unités</p>
//                                 </div>
//                                 <button className="add-btn large">
//                                     <ShoppingCart size={20} /> Ajouter au panier
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default LandingPage;


import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Star, Eye, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LandingPage.css';

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  const categories = ['Tous', 'Smartphones', 'Ordinateurs', 'Audio', 'Accessoires', 'Tablettes'];
  const image_url = "http://127.0.0.1:8000/storage/";

  // ---------------- FILTER ----------------
  const filteredProducts =
    selectedCategory === "Tous"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // ---------------- FETCH PRODUCTS ----------------
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/produits')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // ---------------- LOAD CART ----------------
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];

    const normalized = stored.map(item => ({
      ...item,
      quantity: item.quantity || 1
    }));

    setCart(normalized);

    setCartCount(
      normalized.reduce((sum, item) => sum + item.quantity, 0)
    );
  }, []);

  // ---------------- ADD TO CART ----------------
//   const addToCart = (product) => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     const index = cart.findIndex(
//       (item) => item.id_produit === product.id_produit
//     );

//     if (index !== -1) {
//       cart[index].quantity += 1;
//     } else {
//       cart.push({
//         ...product,
//         quantity: 1,
//       });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));

//     setCart(cart);

//     setCartCount(
//       cart.reduce((sum, item) => sum + item.quantity, 0)
//     );
//   };
        const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const index = cart.findIndex(
    (item) => item.id_produit === product.id_produit
  );

  if (index !== -1) {
    // ✅ SAME PRODUCT → increase quantity only
    cart[index] = {
      ...cart[index],
      quantity: cart[index].quantity + 1,
    };
  } else {
    // 🆕 NEW PRODUCT
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  setCart(cart);

  setCartCount(
    cart.reduce((sum, item) => sum + item.quantity, 0)
  );
};

const updateCart = (newCart) => {
  setCart(newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));

  setCartCount(
    newCart.reduce((sum, item) => sum + item.quantity, 0)
  );
};

// ➕ increase quantity
const increaseQty = (id) => {
  const updated = cart.map(item =>
    item.id_produit === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

  updateCart(updated);
};

// ➖ decrease quantity
const decreaseQty = (id) => {
  let updated = cart.map(item =>
    item.id_produit === id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );

  // remove if quantity = 0
  updated = updated.filter(item => item.quantity > 0);

  updateCart(updated);
};

// 🗑 remove item
const removeItem = (id) => {
  const updated = cart.filter(item => item.id_produit !== id);
  updateCart(updated);
};

const handleCheckout = () => {
    const user_status = localStorage.getItem('userStatus');
    if(user_status !== 'isLoggedIn') {
            navigate('/AuthPage')
    }
    else {
        navigate('/CheckoutPage')
    }
}

  if (loading) return <div className="loading-state">Chargement...</div>;

  return (
    <div className="page-wrapper">

      {/* HEADER */}
      <header className="header">
        <div className="container header-content">

          <div className="logo">
            <div className="logo-icon"></div>
            <span>ElectroShop</span>
          </div>

          <nav className="nav-links">
            <a href="#">Accueil</a>

            {/* CART */}
            <div className="cart-wrapper">
              <ShoppingCart size={20} className="icon-btn" />

              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}

              <div className="cart-dropdown">
                {cart.length === 0 ? (
                  <p>Panier vide</p>
                ) : (
                  <>
                    {/* {cart.map((item, i) => (
                      <div key={i} className="cart-item">

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
                          <small>Qty: {item.quantity}</small>
                        </div>

                      </div>
                    ))} */}

                    {cart.map((item) => (
  <div key={item.id_produit} className="cart-item">

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
        <button onClick={() => decreaseQty(item.id_produit)}>
          -
        </button>

        <small>{item.quantity}</small>

        <button onClick={() => increaseQty(item.id_produit)}>
          +
        </button>
      </div>
    </div>

    {/* remove button */}
    <button
      className="remove-btn"
      onClick={() => removeItem(item.id_produit)}
    >
      🗑
    </button>

  </div>
))}

                    <button className="checkout-btn" onClick={handleCheckout}>
                      Proceed to checkout
                    </button>
                  </>
                )}
              </div>
            </div>

            <button className="admin-btn">
              <User size={16} /> Admin
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <h1>Bienvenue chez ElectroShop</h1>
          <p>Découvrez notre sélection de produits électroniques de qualité</p>
        </div>
      </section>

      {/* PRODUCTS */}
      <main className="container">

        <div className="section-header">
          <h2>Nos Produits</h2>

          {/* CATEGORY FILTER */}
          <div className="category-list">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cat-pill ${selectedCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id_produit} className="product-card">

              <div className="product-img-box">
                <img
                  src={
                    product.image
                      ? `${image_url}${product.image}`
                      : "https://via.placeholder.com/400"
                  }
                  alt={product.nom_produit}
                />
              </div>

              <div className="product-info">

                <h3>{product.nom_produit}</h3>

                <strong>{product.category}</strong>

                <div className="product-price">
                  {product.prix}€
                </div>

                <div className="product-footer">

                  <span>Stock: {product.stock}</span>

                  <div className="action-buttons">

                    <button
                      className="preview-btn"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      className="add-btn"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart size={16} /> Ajouter
                    </button>

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </main>

                  <footer className="footer">
    <div className="footer-content">
       <div className="footer-section">
             <h4>ElectroShop</h4>
            <p>Votre destination high-tech préférée.</p>
        </div>        <div className="footer-section">
           <h4>Liens Rapides</h4>
            <ul>
              <li><a href="#">Produits</a></li>
              <li><a href="#">Panier</a></li>
            </ul>
       </div>
        <div className="footer-section">
           <h4>Contact</h4>
           <p>Email: contact@electroshop.ma</p>
        </div>
    </div>
   <div className="footer-bottom">
       <p>&copy; 2026 ElectroShop - Tous droits réservés.</p>
    </div>
 </footer>

      {/* MODAL */}
      {selectedProduct && (
                <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setSelectedProduct(null)}>
                            <X size={24} />
                        </button>
                        <div className="modal-body">
                            <div className="modal-image">
                                <img 
                                    src={selectedProduct.image ? `${image_url}${selectedProduct.image}` : 'https://via.placeholder.com/400'} 
                                    alt={selectedProduct.nom_produit} 
                                />
                            </div>
                            <div className="modal-details">
                                <span className="modal-category">Électronique</span>
                                <h2>{selectedProduct.nom_produit}</h2>
                                <p className="modal-price">{selectedProduct.prix}€</p>
                                <p className="modal-description">
                                    Découvrez le nouveau {selectedProduct.nom_produit}. Un produit de haute qualité conçu pour répondre à vos besoins technologiques les plus exigeants.
                                </p>
                                <div className="modal-meta">
                                    <p><strong>Disponibilité:</strong> {selectedProduct.stock > 0 ? 'En stock' : 'Rupture'}</p>
                                    <p><strong>Quantité restante:</strong> {selectedProduct.stock} unités</p>
                                </div>
                                <button className="add-btn large">
                                    <ShoppingCart size={20} /> Ajouter au panier
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </div>
  );
};

export default LandingPage;