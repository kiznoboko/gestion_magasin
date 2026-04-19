// import { useState } from "react";
// import "../Styles/produitform.css";
// export default function CreateProduit() {
//   const [form, setForm] = useState({
//     nom_produit: "",
//     prix: "",
//     stock: "",
//     image: null,
//   });

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
//     formData.append("image", form.image);

//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/produits", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       console.log("Produit ajouté:", data);

//       alert("Produit ajouté avec succès");

//       // reset form
//       setForm({
//         nom_produit: "",
//         prix: "",
//         stock: "",
//         image: null,
//       });

//     } catch (err) {
//       console.error(err);
//       alert("Erreur lors de l'ajout");
//     }
//   };

//   return (
//     <div>
//       <h2>Ajouter un produit</h2>

//       <form onSubmit={handleSubmit}>
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

//         <button type="submit">Ajouter</button>
//       </form>
//     </div>
//   );
// }


// import { useState } from "react";
// import "../Styles/produitform.css";

// export default function CreateProduit({ onClose }) {
//   const [form, setForm] = useState({
//     nom_produit: "",
//     prix: "",
//     stock: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     if (e.target.name === "image") {
//       setForm({ ...form, image: e.target.files[0] });
//     } else {
//       setForm({ ...form, [e.target.name]: e.target.value });
//     }
//   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append("nom_produit", form.nom_produit);
// //     formData.append("prix", form.prix);
// //     formData.append("stock", form.stock);
// //     formData.append("image", form.image);

// //     await fetch("http://127.0.0.1:8000/api/produits/", {
// //       method: "POST",
// //       body: formData,
// //     });

// //     alert("Produit ajouté avec succès");
// //   };

//     const handleSubmit = async (e) => {
//   e.preventDefault();

//   const formData = new FormData();
//   formData.append("nom_produit", form.nom_produit);
//   formData.append("prix", form.prix);
//   formData.append("stock", form.stock);
//   formData.append("image", form.image);

//   await fetch("http://127.0.0.1:8000/api/produits", {
//     method: "POST",
//     body: formData,
//   });

//   alert("Produit ajouté avec succès");

//   setForm({
//     nom_produit: "",
//     prix: "",
//     stock: "",
//     image: null,
//   });

//   onClose(); // CLOSE MODAL + REFRESH TRIGGER
// };

//   return (
//     <div className="product-container">
//       <h2 className="product-title">Ajouter un produit</h2>

//       <form className="product-form" onSubmit={handleSubmit}>

//         <div className="form-group">
//           <input
//             type="text"
//             name="nom_produit"
//             placeholder="Nom produit"
//             value={form.nom_produit}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="number"
//             name="prix"
//             placeholder="Prix"
//             value={form.prix}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="number"
//             name="stock"
//             placeholder="Stock"
//             value={form.stock}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="file"
//             name="image"
//             onChange={handleChange}
//           />
//         </div>

//         {form.image && (
//           <div className="preview">
//             <img src={URL.createObjectURL(form.image)} alt="preview" />
//           </div>
//         )}

//         <button className="submit-btn" type="submit">
//           Ajouter
//         </button>
//       </form>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import "../Styles/produitform.css";

// export default function CreateProduit({ onClose, product }) {
//   const isEdit = !!product;

//   const [form, setForm] = useState({
//     nom_produit: "",
//     prix: "",
//     stock: "",
//     image: null,
//   });

//   // 🟢 Fill form when editing
//   useEffect(() => {
//     if (product) {
//       setForm({
//         nom_produit: product.nom_produit || "",
//         prix: product.prix || "",
//         stock: product.stock || "",
//         image: null, // keep null unless user changes image
//       });
//     }
//   }, [product]);

//   // 🟢 Handle inputs
//   const handleChange = (e) => {
//     if (e.target.name === "image") {
//       setForm({ ...form, image: e.target.files[0] });
//     } else {
//       setForm({ ...form, [e.target.name]: e.target.value });
//     }
//   };

//   // 🟢 Submit (CREATE + UPDATE)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("nom_produit", form.nom_produit);
//     formData.append("prix", form.prix);
//     formData.append("stock", form.stock);

//     if (form.image) {
//       formData.append("image", form.image);
//     }

//     let url = "http://127.0.0.1:8000/api/produits/";
//     let method = "POST";

//     // 🟡 EDIT MODE
//     if (isEdit) {
//       url = `http://127.0.0.1:8000/api/produits/${product.id_produit}`;
//       formData.append("_method", "PUT"); // Laravel trick
//     }

    

//     try {
//       const res = await fetch(url, {
//         method,
//         body: formData,
//       });

//       if (!res.ok) throw new Error("API error");

//       const data = await res.json();
//       console.log("Success:", data);

//       alert(isEdit ? "Produit modifié" : "Produit ajouté");

//       // reset form
//       setForm({
//         nom_produit: "",
//         prix: "",
//         stock: "",
//         image: null,
//       });

//       onClose(); // close modal + refresh list
//     } catch (err) {
//       console.error(err);
//       alert("Erreur lors de l'envoi");
//     }
//   };

//   return (
//     <div className="product-container">
//       <h2 className="product-title">
//         {isEdit ? "Modifier produit" : "Ajouter un produit"}
//       </h2>

//       <form className="product-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             name="nom_produit"
//             placeholder="Nom produit"
//             value={form.nom_produit}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="number"
//             name="prix"
//             placeholder="Prix"
//             value={form.prix}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="number"
//             name="stock"
//             placeholder="Stock"
//             value={form.stock}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input type="file" name="image" onChange={handleChange} />
//         </div>

//         {/* Preview new image */}
//         {form.image && (
//           <div className="preview">
//             <img src={URL.createObjectURL(form.image)} alt="preview" />
//           </div>
//         )}

//         <button className="submit-btn" type="submit">
//           {isEdit ? "Modifier" : "Ajouter"}
//         </button>
//       </form>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import "../Styles/produitform.css";

export default function CreateProduit({ onClose, product }) {
  const isEdit = !!product;

  const [form, setForm] = useState({
    nom_produit: "",
    prix: "",
    stock: "",
    image: null,
    existingImage: null,
  });

  // 🟢 Fill form when editing
  useEffect(() => {
    if (product) {
      setForm({
        nom_produit: product.nom_produit ?? "",
        prix: product.prix ?? "",
        stock: product.stock ?? "",
        image: null,
        existingImage: product.image || null,
      });
    } else {
      setForm({
        nom_produit: "",
        prix: "",
        stock: "",
        image: null,
        existingImage: null,
      });
    }
  }, [product]);

  // 🟢 Handle inputs
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  // 🟢 Submit (CREATE + UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nom_produit", form.nom_produit);
    formData.append("prix", form.prix);
    formData.append("stock", form.stock);

    if (form.image) {
      formData.append("image", form.image);
    }

    let url = "http://127.0.0.1:8000/api/produits/";
    let method = "POST";

    if (isEdit) {
      url = `http://127.0.0.1:8000/api/produits/${product.id_produit}/`;
      formData.append("_method", "PUT");
    }

    try {
      const res = await fetch(url, {
        method,
        body: formData,
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      console.log("Success:", data);

      alert(isEdit ? "Produit modifié" : "Produit ajouté");

      setForm({
        nom_produit: "",
        prix: "",
        stock: "",
        image: null,
        existingImage: null,
      });

      onClose();
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi");
    }
  };

  return (
    <div className="product-container">
      <h2 className="product-title">
        {isEdit ? "Modifier produit" : "Ajouter un produit"}
      </h2>

      <form className="product-form" onSubmit={handleSubmit}>
        {/* NAME */}
        <div className="form-group">
          <input
            type="text"
            name="nom_produit"
            placeholder="Nom produit"
            value={form.nom_produit}
            onChange={handleChange}
            required
          />
        </div>

        {/* PRICE */}
        <div className="form-group">
          <input
            type="number"
            name="prix"
            placeholder="Prix"
            value={form.prix}
            onChange={handleChange}
            required
          />
        </div>

        {/* STOCK */}
        <div className="form-group">
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            required
          />
        </div>

        {/* EXISTING IMAGE */}
        {form.existingImage && !form.image && (
          <div className="preview">
            <p>Image actuelle :</p>
            <img
              src={`http://127.0.0.1:8000/storage/${form.existingImage}`}
              alt="current"
            />
          </div>
        )}

        {/* NEW IMAGE PREVIEW */}
        <div className="form-group">
          <input type="file" name="image" onChange={handleChange} />
        </div>

        {form.image && (
          <div className="preview">
            <p>Nouvelle image :</p>
            <img src={URL.createObjectURL(form.image)} alt="preview" />
          </div>
        )}

        {/* BUTTON */}
        <button className="submit-btn" type="submit">
          {isEdit ? "Modifier" : "Ajouter"}
        </button>
      </form>
    </div>
  );
}