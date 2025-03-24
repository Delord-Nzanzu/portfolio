import { useRef } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { dataEntre } from "../data/Data";

// Définition des données

const ScrollableCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fonction pour faire défiler les cartes
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Ajuste la valeur selon le besoin
      scrollRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div>
      <Typography
        sx={{
          fontFamily: "Courier Prime",
          mt: 3,
          fontSize: {
            xs: 30,
            md: 40,
          },
          color: "#fff",
          fontWeight: 700,
          textAlign: "center",
        }}>
        Où j'ai été
      </Typography>
      <Box
        display={{ xs: "block", sm: "flex" }}
        alignItems="center"
        justifyContent={"center"}>
        {/* Bouton Gauche */}
        <IconButton
          sx={{ display: { xs: "none", sm: "flex" } }}
          onClick={() => scroll("left")}>
          <ArrowBackIos sx={{ color: "#fff" }} />
        </IconButton>

        {/* Conteneur Scrollable */}
        <Box
          ref={scrollRef}
          sx={{
            display: { xs: "block", sm: "flex" },
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: 3,
            m: {
              xs: 1,
              sm: 0,
            },
            "&::-webkit-scrollbar": { display: "none" }, // Cache la scrollbar
          }}>
          {dataEntre.map((item, index) => (
            <Card
              key={index}
              sx={{
                mt: { xs: 2, sm: 0 },
                minWidth: 350,
                maxWidth: 350,
                borderRadius: 2,
                boxShadow: 3,
                ":hover": {
                  bgcolor: "#fff",
                  cursor: "pointer",
                  transform: "scale(1.05)", // Agrandir légèrement la carte au survol
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Ajoute une ombre portée lors du survol
                  transition: "transform 1s ease, box-shadow 1s ease", // Transition fluide pour l'agrandissement et l'ombre
                },
              }}>
              <CardMedia
                component="img"
                // height="140"
                image={item.image}
                alt={item.title}
                sx={{ height: 140, width: "100%", objectFit: "contain" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Courier Prime",
                    fontSize: 20,
                    fontWeight: 700,
                    textAlign: "center",
                    color: "#000",
                  }}>
                  {item.title.toUpperCase()}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Bouton Droite */}
        <IconButton
          sx={{ display: { xs: "none", sm: "flex" } }}
          onClick={() => scroll("right")}>
          <ArrowForwardIos sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
    </div>
  );
};

export default ScrollableCards;
