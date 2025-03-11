import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import HMenu from "./HMenu";
import fraude from "../assets/fraude.png";
import dh from "../assets/droit_humain.png";
import ht from "../assets/hT.png";
import bs from "../assets/bs.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    link: "#",
    text: "Efficacity Syteme de Lutte Contre la Fraude",
    img: fraude,
    descr:
      "Dans le secteur minier est un enjeu crucial pour garantir la transparence et la sécurité des opérations. Grâce aux technologies avancées et aux méthodes de surveillance renforcées, ces systèmes permettent de détecter, prévenir et réduire les fraudes, qu'il s'agisse de vols, de falsifications de données ou d'exploitation illégale. L'optimisation des contrôles et l'utilisation de solutions numériques renforcent la traçabilité et la conformité, assurant ainsi une gestion plus fiable et équitable des ressources minières. ⛏️🔍",
  },

  {
    id: 3,
    link: "#",
    text: "Gestion de Doneur du Sang",
    img: bs,
    descr:
      "Il est un processus crucial pour assurer la disponibilité et la qualité des stocks de sang nécessaires aux traitements médicaux. Ce système repose sur un suivi rigoureux des donneurs, leur qualification, ainsi que sur des protocoles de sécurité et de confidentialité des données. Grâce à l'automatisation et à l'intégration de technologies modernes, la gestion des donneurs permet de garantir une collecte optimale, une distribution efficace et une traçabilité des dons. Cela assure une réponse rapide et adaptée aux besoins médicaux tout en respectant les normes sanitaires et éthiques. 💉❤️",
  },

  {
    id: 2,
    link: "https://hubtechnologie.com/",
    text: "Hub Technologie",
    img: ht,
    descr:
      "est une startup innovante spécialisée dans la création de solutions technologiques avancées pour répondre aux défis contemporains. Nous nous engageons à développer des outils et des services permettant aux entreprises de rester à la pointe de la technologie tout en simplifiant leur gestion et en optimisant leurs processus. Notre équipe passionnée travaille avec des technologies de pointe pour offrir des solutions sur-mesure, adaptées aux besoins spécifiques de nos clients. ",
  },
  {
    id: 2,
    link: "#",
    text: "Efficacity Systeme Droit Humain",
    img: dh,
    descr:
      "Il  est essentielle pour garantir la protection des individus et des communautés, en particulier dans les secteurs sensibles. Ces systèmes visent à prévenir les violations des droits fondamentaux, à promouvoir l'égalité et à assurer une justice équitable. En utilisant des mécanismes de surveillance, des outils de rapport et des politiques de conformité, ils contribuent à renforcer la responsabilité des entreprises et des gouvernements dans le respect des droits humains. L'optimisation de ces systèmes permet une meilleure protection des populations vulnérables et assure le respect des normes internationales en matière de droits humains. 🌍⚖️",
  },
];

function Realisation() {
  const [hidden, setHidden] = useState<any>(4);
  const handleToggleClamp = () => {
    setHidden((e: any) => (e === 4 ? 500 : 4)); // Basculer entre 2 et 4 lignes
  };
  return (
    <div
      style={{
        background: "#1C1C22",
        marginTop: 70,
        minHeight: "100vh",
      }}>
      <HMenu />
      <Grid2 container direction={"column"}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} sx={{ p: 5 }}>
          <Typography
            sx={{
              fontSize: {
                xs: 30,
                sm: 30,
                md: 50,
                lg: 50,
                xl: 50,
              },
              color: "#fff",
              fontFamily: "Courier Prime",
              fontWeight: 700,
            }}>
            Réalisations
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: 20,
                sm: 20,
                md: 25,
                lg: 25,
                xl: 25,
              },
              color: "gray",
              fontFamily: "Courier Prime",
              mt: 2,
            }}>
            vous découvrirez nos projets accomplis, mettant en avant notre
            expertise et notre savoir-faire. Chaque{" "}
            <span
              style={{
                color: "#00FF99",
              }}>
              réalisation
            </span>{" "}
            témoigne de notre engagement à fournir des solutions innovantes et
            adaptées aux besoins de nos clients. 🚀✨
          </Typography>
          <Container
            style={{
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap",
              padding: 5,
              justifyContent: "start",
              alignItems: "start",
              marginTop: 20,
              width: "100%",
              minHeight: "100vh",
            }}>
            {data.map((e) => (
              <Card sx={{ maxWidth: 370, ml: 3, mt: 3 }}>
                <CardMedia sx={{ height: 250 }} image={e.img} title={e.text} />
                <CardContent>
                  <Link
                    to={e.link} // Remplace par ton lien GitHub
                    target="_blank" // Ouvre le lien dans un nouvel onglet
                    style={{ textDecoration: "none", color: "#000" }} // Pour enlever le souligné du lien
                  >
                    <Typography
                      gutterBottom
                      // variant="h3"
                      component="div"
                      sx={{
                        fontFamily: "Courier Prime",
                        fontWeight: 700,
                        fontSize: 20,
                        ":hover": {
                          color: "#00FF99",
                          cursor: "pointer",
                        },
                      }}>
                      {e.text}
                    </Typography>
                  </Link>
                  <Divider />
                  <Typography
                    sx={{
                      color: "text.secondary",
                      //   fontWeight: 700,
                      fontFamily: "Courier Prime",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: hidden, // Limite le texte à 2 lignes (ajuste selon tes besoins)
                      textOverflow: "ellipsis",
                      fontSize: 18,
                    }}>
                    {e.descr}
                  </Typography>
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "end",
                    }}>
                    <Button
                      variant="text"
                      color="info"
                      onClick={handleToggleClamp}>
                      {hidden === 2 ? "Réduire" : "Lire plus"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Container>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Realisation;
