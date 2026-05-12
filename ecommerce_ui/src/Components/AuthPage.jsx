import React, { useState } from "react";
import "../Styles/AuthPage.css";
import { LogIn, UserPlus, ArrowLeft} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const AuthPage = () => {
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nom: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleHome = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  // 🟢 REGISTER
  
  const login = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password
      })
    });

    const data = await res.json();

    console.log("LOGIN RESPONSE:", data); // 🔥 DEBUG

    if (data.success || data.data) {
      localStorage.setItem("user", JSON.stringify(data.data));
      localStorage.setItem("userStatus", JSON.stringify("isLoggedIn"));


      if (form.email === "admin@admin.com") {
        navigate("/AdminDashboard");
      } else {
        navigate("/UserDashboard");
      }
    } else {
      alert(data.message || "Login failed");
    }

  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};


  const register = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        nom_client: form.nom,
        email: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();

    console.log("STATUS:", res.status);
    console.log("DATA:", data);

    if (!res.ok) {
      alert(data.message || "Registration failed");
      return;
    }

    alert("Compte créé !");
  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "login") {
      login();
    } else {
      if (form.password !== form.password_confirmation) {
        alert("Passwords do not match");
        return;
      }
      register();
    }
  };

  return (
    <div className="auth-container">

      {/* TOP BAR */}
      <div className="top-bar">

        <button className="back-btn" onClick={handleHome}>
          <ArrowLeft size={16} /> Retour au site
        </button>

        <div className="toggle">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => setMode("login")}
          >
            Connexion
          </button>

          <button
            className={mode === "register" ? "active" : ""}
            onClick={() => setMode("register")}
          >
            Inscription
          </button>
        </div>

      </div>

      {/* CARD */}
      <div className="card">

        <div className="icon">
          {mode === "login" ? <LogIn /> : <UserPlus />}
        </div>

        <h2>
          {mode === "login" ? "Connexion" : "Créer un compte"}
        </h2>

        <p className="subtitle">
          {mode === "login"
            ? "Connectez-vous pour continuer vos achats"
            : "Inscrivez-vous pour commencer vos achats"}
        </p>

        {/* FORM */}
        <form className="form" onSubmit={handleSubmit}>

          {mode === "register" && (
            <input
              name="nom"
              type="text"
              placeholder="Nom complet"
              onChange={handleChange}
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChange}
          />

          {mode === "register" && (
            <input
              name="password_confirmation"
              type="password"
              placeholder="Confirmer le mot de passe"
              onChange={handleChange}
            />
          )}

          <button className="submit" type="submit">
            {mode === "login" ? "Se connecter" : "Créer un compte"}
          </button>

          <Link className="recuperer-votre-compte" to="/restore_account">recuperer votre compte!</Link>

        </form>

        {/* SWITCH LINK */}
        <p className="switch">
          {mode === "login" ? (
            <>
              Pas encore de compte ?{" "}
              <span onClick={() => setMode("register")}>
                S'inscrire
              </span>
            </>
          ) : (
            <>
              Déjà un compte ?{" "}
              <span onClick={() => setMode("login")}>
                Se connecter
              </span>
            </>
          )}
        </p>

      </div>
    </div>
  );
};

export default AuthPage;