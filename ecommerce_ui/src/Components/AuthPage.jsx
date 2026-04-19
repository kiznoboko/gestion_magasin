import React, { useState } from "react";
import "../Styles/AuthPage.css";
import { LogIn, UserPlus, ArrowLeft } from "lucide-react";

const AuthPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="auth-container">
      
      {/* TOP BAR */}
      <div className="top-bar">
        <button className="back-btn">
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
        <form className="form">
          
          {mode === "register" && (
            <input type="text" placeholder="Nom complet" />
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />

          {mode === "register" && (
            <input
              type="password"
              placeholder="Confirmer le mot de passe"
            />
          )}

          <button className="submit">
            {mode === "login"
              ? "Se connecter"
              : "Créer un compte"}
          </button>
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