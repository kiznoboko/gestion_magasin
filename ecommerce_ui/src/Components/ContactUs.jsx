import React, { useState } from "react";
import {Link} from "react-router-dom"
import "../Styles/ContactUs.css";
import BloggeBookLogo from "../assets/ElectroMart.svg";

import { useModal } from "./ModalContext";
export default function ContactForm() {
  // State for all form fields
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const { showModal } = useModal()

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://127.0.0.1/sendContactForm.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });

//       const result = await response.json();
//       alert(result.message);

//       if (result.success) {
//         // Reset form if successful
//         setFormData({
//           name: "",
//           lastname: "",
//           company: "",
//           email: "",
//           phone: "",
//           message: ""
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Erreur lors de l'envoi du message.");
//     }
//   };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://127.0.0.1:8000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      showModal('success', 'message envoyer avec success')

      // Reset form
      setFormData({
        name: "",
        lastname: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      });
    } else {
      // Laravel validation errors
      if (result.errors) {
        const errors = Object.values(result.errors)
          .flat()
          .join("\n");

        showModal('error', `${errors}`)
      } else {
        // alert(result.message || "Erreur lors de l'envoi.");
        showModal('error', `${result.message}`)
      }
    }
  } catch (err) {
    console.error("Erreur:", err);

    // alert("Impossible de contacter le serveur.");
    showModal('error', 'Impossible de contacter le serveur.')
  }
};

  return (
    <>
      <div className="contact-page">
    
      <div className="contact-container">
        <div className="header_container">
          <Link className="LibraryPage_logo_homeLink" to="/">
            <img
              src={BloggeBookLogo}
              alt="BloggeBook Logo"
              className="LibraryPage_logo_img"
            />
          </Link>
          <h1 className="contact-title">
          Nous contacter
          </h1>
        </div>
        

        <form onSubmit={handleSubmit}>
          {/* Name Row */}
          <div className="row">
            <div className="field">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <span className="label">NOM*</span>
            </div>

            <div className="field">
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
              <span className="label">PRENOM*</span>
            </div>
          </div>

          {/* Company */}
          <div className="field">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
            />
            <span className="label">NOM DE L&apos;ENTREPRISE*</span>
          </div>

          {/* Email */}
          <div className="field">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <span className="label">COURRIEL*</span>
          </div>

          {/* Phone */}
          <div className="field">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <span className="label">TÉLÉPHONE*</span>
          </div>

          {/* Message */}
          <div className="field">
            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <span className="label label-textarea">MESSAGE*</span>
          </div>

          {/* Required note */}
          <div className="required-note">Champs obligatoires *</div>

          {/* Fake Recaptcha */}
          <div className="recaptcha">
              <input type="checkbox"  className="checkbox"/>
            
            Je ne suis pas un robot
          </div>

          {/* Submit button */}
          <button type="submit" className="btn-submit-contact">Envoyer</button>
        </form>
      </div>
    </div>
    </>
  );
}