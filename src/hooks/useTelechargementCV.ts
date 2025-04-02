function useTelechargementCV() {
  const handleDownload = () => {
    // Créer un lien invisible pour télécharger le fichier PDF
    const link = document.createElement("a");
    link.href = "/pdf/cv_Delordd.pdf"; // Le chemin vers le fichier dans le dossier public
    link.download = "CV_Delord_Nzanzu_Wayire.pdf"; // Nom du fichier qui sera téléchargé
    link.click(); // Simule le clic pour initier le téléchargement
  };
  return {
    handleDownload,
  };
}

export default useTelechargementCV;
