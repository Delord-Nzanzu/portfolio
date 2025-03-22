import { jwtDecode } from "jwt-decode";
import emailjs from "@emailjs/browser";

const ServiceID = import.meta.env.VITE_APP_SERVICEID;
const templeteID = import.meta.env.VITE_APP_TEMPLETEID;
const idKey = import.meta.env.VITE_APP_APIKEY;

export const handleLoginSuccess = (response: any) => {
  if (!response.credential) {
    console.error("Token Google non reçu.");
    return;
  }

  try {
    // Décoder l'ID Token pour obtenir les infos utilisateur
    const userData = jwtDecode(response.credential);
    console.log("Utilisateur connecté :", userData);
  } catch (error) {
    console.error("Erreur lors du décodage du token :", error);
  }
};

export const senEmaiAuto = (ip:string) => {
  emailjs
    .send(
      ServiceID, // Remplace par ton ID de service
      templeteID, // Remplace par ton ID de modèle
      {
        email: "invite@gmail.com",
        message: `On vient de visite le portofolio avec ip public ${ip}`,
        name: `visite`,
      },
      idKey // Remplace par ton User ID EmailJS
    )
    .then(
      () => {},
      () => {}
    );
};
