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
import talia from "../assets/TALIA.png";
import tiva from "../assets/tiva.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";

const data = [
  {
    id: 5,
    link: "https://tiva.co.tz/",
    text: "TIVA",
    img: tiva,
    descr:
      "Tiva est une entreprise technologique qui propose une assurance santé abordable, des microcrédits et des services d'accompagnement quotidien. Nous aidons nos partenaires, nos membres et les communautés à lutter contre la pauvreté et le chômage en misant sur l'innovation et en favorisant la croissance économique grâce à des solutions durables.",
  },
  {
    id: 2,
    link: "https://hubtechnologie.com/",
    text: "Hub Technologie",
    img: ht,
    descr:
      "Est une startup innovante spécialisée dans la création de solutions technologiques avancées pour répondre aux défis contemporains. Nous nous engageons à développer des outils et des services permettant aux entreprises de rester à la pointe de la technologie tout en simplifiant leur gestion et en optimisant leurs processus. Notre équipe passionnée travaille avec des technologies de pointe pour offrir des solutions sur-mesure, adaptées aux besoins spécifiques de nos clients. ",
  },
  {
    id: 1,
    link: "https://efficacity-system.org/",
    text: "Efficacity Syteme de Lutte Contre la Fraude",
    img: fraude,
    descr:
      "Dans le secteur minier est un enjeu crucial pour garantir la transparence et la sécurité des opérations. Grâce aux technologies avancées et aux méthodes de surveillance renforcées, ces systèmes permettent de détecter, prévenir et réduire les fraudes, qu'il s'agisse de vols, de falsifications de données ou d'exploitation illégale. L'optimisation des contrôles et l'utilisation de solutions numériques renforcent la traçabilité et la conformité, assurant ainsi une gestion plus fiable et équitable des ressources minières. ⛏️🔍",
  },

  {
    id: 4,
    link: "https://efficacity-system.org/",
    text: "Efficacity Systeme Droit Humain",
    img: dh,
    descr:
      "Il  est essentielle pour garantir la protection des individus et des communautés, en particulier dans les secteurs sensibles. Ces systèmes visent à prévenir les violations des droits fondamentaux, à promouvoir l'égalité et à assurer une justice équitable. En utilisant des mécanismes de surveillance, des outils de rapport et des politiques de conformité, ils contribuent à renforcer la responsabilité des entreprises et des gouvernements dans le respect des droits humains. L'optimisation de ces systèmes permet une meilleure protection des populations vulnérables et assure le respect des normes internationales en matière de droits humains. 🌍⚖️",
  },
  {
    id: 3,
    link: "https://cptsnk.com/",
    text: "Gestion de Doneur de Donneur",
    img: bs,
    descr:
      "Il est un processus crucial pour assurer la disponibilité et la qualité des stocks de sang nécessaires aux traitements médicaux. Ce système repose sur un suivi rigoureux des donneurs, leur qualification, ainsi que sur des protocoles de sécurité et de confidentialité des données. Grâce à l'automatisation et à l'intégration de technologies modernes, la gestion des donneurs permet de garantir une collecte optimale, une distribution efficace et une traçabilité des dons. Cela assure une réponse rapide et adaptée aux besoins médicaux tout en respectant les normes sanitaires et éthiques. 💉❤️",
  },
  {
    id: 30,
    link: "https://taliasante.com/",
    text: "Talia Services",
    img: talia,
    descr:
      "Talia Services est une plateforme innovante dédiée à la gestion et à l'optimisation des services de santé. Elle offre une gamme complète de solutions pour les professionnels de la santé, incluant la gestion des rendez-vous, le suivi des patients, la facturation et l'analyse des données médicales. Grâce à son interface conviviale et à ses fonctionnalités avancées, Talia Services facilite la communication entre les patients et les prestataires de soins, améliorant ainsi l'efficacité et la qualité des services de santé. Notre objectif est de transformer l'expérience médicale en rendant les soins plus accessibles, organisés et centrés sur le patient. 🏥💼",
  },
];

function Realisation() {
  const [hidden, setHidden] = useState<any>(4);
  const { mode } = useMyContext();

  const handleToggleClamp = () => {
    setHidden((e: any) => (e === 4 ? 500 : 4)); // Basculer entre 2 et 4 lignes
  };
  return (
    <div
      style={{
        background: mode === "light" ? "#fff" : "#1C1C22",
        marginTop: 70,
        minHeight: "100vh",
      }}
    >
      <HMenu />
      <Grid2 container direction={"column"}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} sx={{ p: 2 }}>
          <Typography
            sx={{
              fontSize: {
                xs: 30,
                sm: 30,
                md: 50,
                lg: 50,
                xl: 50,
              },
              color: mode === "light" ? "#000" : "#fff",
              fontFamily: "Courier Prime",
              fontWeight: 700,
              ml: {
                xs: 0,
                sm: 0,
                md: 5,
                lg: 5,
                xl: 5,
              },
            }}
          >
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
              color: mode === "light" ? "#000" : "#fff",
              fontFamily: "Courier Prime",
              mt: {
                xs: 0,
                sm: 0,
                md: 0,
                lg: 0,
                xl: 0,
              },
              ml: {
                xs: 0,
                sm: 0,
                md: 5,
                lg: 5,
                xl: 5,
              },
            }}
          >
            vous découvrirez nos projets accomplis, mettant en avant notre
            expertise et notre savoir-faire. Chaque{" "}
            <span
              style={{
                color: "#00FF99",
              }}
            >
              réalisation
            </span>{" "}
            témoigne de notre engagement à fournir des solutions innovantes et
            adaptées aux besoins de nos clients.
          </Typography>
        </Grid2>
      </Grid2>
      <Container
        sx={{
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          alignItems: "start",
          maxWidth: "100%",
          minHeight: "100vh",
          pb: 5,
        }}
      >
        {data.map((e) => (
          <Card
            sx={{
              maxWidth: {
                xs: 500,
                sm: 500,
                md: 360,
              },
              ml: {
                xs: 0,
                sm: 0,
                md: 3,
              },
              mt: {
                xs: 3,
                sm: 3,
                md: 3,
              },
            }}
          >
            <CardMedia sx={{ height: 250 }} image={e.img} title={e.text} />
            <CardContent>
              <Link
                to={e.link} // Remplace par ton lien GitHub
                target="_blank" // Ouvre le lien dans un nouvel onglet
                style={{
                  textDecoration: "none",
                  color: "#013266",
                  fontWeight: "bold",
                }} // Pour enlever le souligné du lien
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
                  }}
                >
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
                }}
              >
                {e.descr}
              </Typography>
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button variant="text" color="info" onClick={handleToggleClamp}>
                  {hidden === 2 ? "Réduire" : "Lire plus"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default Realisation;
