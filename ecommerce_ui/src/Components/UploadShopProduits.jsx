// import { useState, useEffect } from "react";
// import "../Styles/produitform.css";

// export default function CreateProduit({ onClose, product, user, seller }) {
//   const isEdit = !!product;

//   const [form, setForm] = useState({
//     nom_produit: "",
//     prix: "",
//     stock: "",
//     image: null,
//     existingImage: null,
    
//   });

//   useEffect(() => {
//     if (product) {
//       setForm({
//         nom_produit: product.nom_produit ?? "",
//         prix: product.prix ?? "",
//         stock: product.stock ?? "",
//         image: null,
//         existingImage: product.image || null,
//       });
//     }
//   }, [product]);

//   const handleChange = (e) => {
//     if (e.target.name === "image") {
//       setForm({ ...form, image: e.target.files[0] });
//     } else {
//       setForm({ ...form, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     formData.append("nom_produit", form.nom_produit);
//     formData.append("prix", form.prix);
//     formData.append("stock", form.stock);

//     // 👇 IMPORTANT: link to seller
//     formData.append("user_id", user.id_client);
//     formData.append("shop_name", seller.shop_name);

//     if (form.image) {
//       formData.append("image", form.image);
//     }

//     let url = "http://127.0.0.1:8000/api/shop-produits";
//     let method = "POST";

//     if (isEdit) {
//       url = `http://127.0.0.1:8000/api/shop-produits/${product.id}`;
//       formData.append("_method", "PUT");
//     }

//     try {
//       const res = await fetch(url, {
//         method,
//         body: formData,
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         console.log(data);
//         alert(data.message || "Erreur");
//         return;
//       }

//       alert(isEdit ? "Produit modifié" : "Produit ajouté");

//       setForm({
//         nom_produit: "",
//         prix: "",
//         stock: "",
//         image: null,
//         existingImage: null,
//       });

//       onClose();
//     } catch (err) {
//       console.error(err);
//       alert("Erreur serveur");
//     }
//   };

//   return (
//     <div className="product-container">
//       <h2 className="product-title">
//         {isEdit ? "Modifier produit" : "Ajouter un produit"}
//       </h2>

//       <form className="product-form" onSubmit={handleSubmit}>
        
//         <input
//           type="text"
//           name="nom_produit"
//           placeholder="Nom produit"
//           value={form.nom_produit}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="number"
//           name="prix"
//           placeholder="Prix"
//           value={form.prix}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="number"
//           name="stock"
//           placeholder="Stock"
//           value={form.stock}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="file"
//           name="image"
//           onChange={handleChange}
//         />

//         {form.image && (
//           <img
//             src={URL.createObjectURL(form.image)}
//             alt="preview"
//             style={{ width: "100px", marginTop: "10px" }}
//           />
//         )}

//         <button type="submit" className="submit-btn">
//           {isEdit ? "Modifier" : "Ajouter"}
//         </button>

//       </form>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import "../Styles/produitform.css";

export default function CreateProduit({ onClose, product, user, seller }) {
  const isEdit = !!product;

  const [form, setForm] = useState({
    user_id: "",
    nom_produit: "",
    prix: "",
    stock: "",
    category: "",
    image: null,
    existingImage: null,
    shop_name: ""
  });

  useEffect(() => {
    if (product) {
      setForm({
        nom_produit: product.nom_produit ?? "",
        prix: product.prix ?? "",
        stock: product.stock ?? "",
        image: null,
        existingImage: product.image || null,
        category: product.category || "",
        shop_name: product.shop_name || ""
      });
    }
  }, [product]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user?.id_client || !seller?.shop_name) {
//     alert("User or seller not loaded yet");
//     return;
//   }

//     const formData = new FormData();

//     formData.append("nom_produit", form.nom_produit);
//     formData.append("prix", form.prix);
//     formData.append("stock", form.stock);
//     formData.append("shop_name", seller?.shop_name || "");

//     // ✅ ONLY user_id (shop_name handled in backend)
//     formData.append("user_id", user?.id_client);

//     if (form.image) {
//       formData.append("image", form.image);
//     }

//     // let url = "http://127.0.0.1:8000/api/shop-produits";
//     // let method = "POST";

//     // if (isEdit) {
//     //   url = `http://127.0.0.1:8000/api/shop-produits/${product.id_produit}`;
//     //   formData.append("_method", "PUT");
//     // }
//     let url = "http://127.0.0.1:8000/api/shop-produits";
// let method = "POST";

// if (isEdit) {
//   url = `http://127.0.0.1:8000/api/shop-produits/${product.id_produit}`;
//   method = "POST"; // keep POST with _method spoofing
//   formData.append("_method", "PUT");
// }

//     try {
//       const res = await fetch(url, {
//         method,
//         body: formData,
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         console.log(data);
//         alert(data.message || "Erreur");
//         return;
//       }

//       alert(isEdit ? "Produit modifié" : "Produit ajouté");

//       setForm({
//         nom_produit: "",
//         prix: "",
//         stock: "",
//         image: null,
//         existingImage: null,
//       });

//       onClose();
//     } catch (err) {
//       console.error(err);
//       alert("Erreur serveur");
//     }
//   };

    const handleSubmit = async (e) => {
  e.preventDefault();

  if (!user?.id_client || !seller?.shop_name) {
    alert("User or seller not loaded yet");
    return;
  }

  const formData = new FormData();

  formData.append("nom_produit", form.nom_produit);
  formData.append("prix", form.prix);
  formData.append("stock", form.stock);
  formData.append("category", form.category);
  formData.append("shop_name", seller.shop_name);
  formData.append("user_id", user.id_client);

  if (form.image) {
    formData.append("image", form.image);
  }

  let url = "http://127.0.0.1:8000/api/shop-produits";
  let method = "POST";

  if (isEdit) {
    url = `http://127.0.0.1:8000/api/shop-produits/${product.id}`;
    formData.append("_method", "PUT");
  }

  try {
    const res = await fetch(url, {
      method,
      body: formData,
      headers: {
        Accept: "application/json", // 🔥 THIS FIXES CORS REDIRECT ISSUE
      },
    });

    // 🔥 IMPORTANT: don't crash if Laravel returns HTML error
    const text = await res.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch {
      console.log("NON-JSON RESPONSE FROM LARAVEL:", text);
      alert("Server error (check console)");
      return;
    }

    if (!res.ok) {
      console.log("Laravel error:", data);
      alert(data.message || "Erreur serveur");
      return;
    }

    alert(isEdit ? "Produit modifié" : "Produit ajouté");

    setForm({
      nom_produit: "",
      prix: "",
      stock: "",
      image: null,
      existingImage: null,
      category: "",
      shop_name: ""
    });

    onClose();

  } catch (err) {
    console.error("FETCH ERROR:", err);
    alert("Erreur serveur");
  }
};

  return (
    <div className="product-container">
      <h2 className="product-title">
        {isEdit ? "Modifier produit" : "Ajouter un produit"}
      </h2>

      <form className="product-form" onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="nom_produit"
          placeholder="Nom produit"
          value={form.nom_produit}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="prix"
          placeholder="Prix"
          value={form.prix}
          onChange={handleChange}
          required
        />

        <input
          type="string"
          name="category"
          placeholder="Categroy"
          value={form.category}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          required
        />

        <input type="file" name="image" onChange={handleChange} />

        {form.image && (
          <img
            src={URL.createObjectURL(form.image)}
            alt="preview"
            style={{ width: "100px", marginTop: "10px" }}
          />
        )}

        <button type="submit" className="submit-btn">
          {isEdit ? "Modifier" : "Ajouter"}
        </button>

        

      </form>
    </div>
  );
}