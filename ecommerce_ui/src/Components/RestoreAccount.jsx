// import React, { useState } from "react";
// import "../Styles/RestoreAccount.css"
// const RestoreAccount = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleRestore = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/restore-account", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setMessage("Un email de récupération a été envoyé !");
//       } else {
//         setMessage(result.message || "Erreur lors de la récupération.");
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("Erreur serveur.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//      <div className="restore-container">
//     <div className="restore-box">
//       <h2>Récupération de compte</h2>

//       <form onSubmit={handleRestore}>
//         <input
//           type="email"
//           placeholder="Votre email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Envoi..." : "Récupérer"}
//         </button>
//       </form>

//       {message && (
//         <p className="restore-message">{message}</p>
//       )}
//     </div>
//   </div>

//     )
// };


// export default RestoreAccount;


import React, { useState } from "react";
import "../Styles/RestoreAccount.css";
import {Link, useNavigate} from "react-router-dom";
import {ArrowLeft} from "lucide-react";

const RestoreAccount = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    password_confirmation: ""
  });

  const navigate = useNavigate()

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleRestore = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage("");

  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/api/restore-account", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json",
  //       },
  //       body: JSON.stringify(form),
  //     });

  //     const result = await response.json();

  //     if (result.success) {
  //       setMessage("Mot de passe mis à jour avec succès !");
  //       setForm({
  //         email: "",
  //         password: "",
  //         password_confirmation: ""
  //       });
  //     } else {
  //       setMessage(result.message || "Erreur.");
  //     }

  //   } catch (error) {
  //     setMessage("Erreur serveur.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleRestore = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  try {
    const response = await fetch("http://127.0.0.1:8000/api/restore-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    // 🔥 HANDLE LARAVEL ERRORS (422 / 401)
    if (!response.ok) {
      setMessage(result.message || "Erreur lors de la récupération.");
      return;
    }

    if (result.success) {
      setMessage("Mot de passe mis à jour avec succès !");
      setForm({
        email: "",
        password: "",
        password_confirmation: ""
      });

      setTimeout(() => {
        navigate("/AuthPage");
      }, 1500);
    }

  } catch (error) {
    console.error(error);
    setMessage("Erreur serveur.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="restore-container">
      <div className="restore-box">
        <ArrowLeft size={30} onClick={() => navigate('/AuthPage')} />
        <h2>Récupération de compte</h2>

        <form onSubmit={handleRestore}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Nouveau mot de passe"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirmer mot de passe"
            value={form.password_confirmation}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Envoi..." : "Réinitialiser"}
          </button>
        </form>

        {message && <p className="restore-message">{message}</p>}
      </div>
    </div>
  );
};

export default RestoreAccount;