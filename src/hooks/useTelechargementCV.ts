import React from 'react'

function useTelechargementCV() {
    const handleDownload = () => {
        // Créer un lien invisible pour télécharger le fichier PDF
        const link = document.createElement("a");
        link.href = "/pdf/cv_Delord.pdf"; // Le chemin vers le fichier dans le dossier public
        link.download = "cv_Delord.pdf"; // Nom du fichier qui sera téléchargé
        link.click(); // Simule le clic pour initier le téléchargement
      };
  return {
    handleDownload
  }
}

export default useTelechargementCV
