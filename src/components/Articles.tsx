import { Button, Card, Divider, Grid2, Typography } from "@mui/material";
import { dataArticle } from "../data/Data";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <Grid2 container sx={{ bgcolor: "#232329", p: 1 }}>
      <Grid2
        size={{
          xs: 12,
          sm: 12,
          md: 12,
        }}>
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
          Dernières Écrites
        </Typography>
        {/* <Divider sx={{ bgcolor: "#fff" }} /> */}
        {dataArticle.map((e) => (
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            key={e.id}
            target="_blank"
            rel="noopener noreferrer"
            to={`${e.link}`}>
            <Card
              key={e.id}
              sx={{
                bgcolor: "#232329",
                p: 2,
                m: 1,
                mt: 0,
                ":hover": {
                  bgcolor: "#f0f0f0",
                  cursor: "pointer",
                  transform: "scale(1.05)", // Agrandir légèrement la carte au survol
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Ajoute une ombre portée lors du survol
                  transition: "transform 1s ease, box-shadow 1s ease", // Transition fluide pour l'agrandissement et l'ombre
                },
                ":hover .title": {
                  color: "#232329", // Change la couleur du texte au survol (sur l'élément avec la classe 'title')
                },
              }}>
              <Typography
                className="title"
                sx={{
                  fontFamily: "Courier Prime",
                  fontSize: 25,
                  color: "#fff",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}>
                {e.title?.toUpperCase()}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Courier Prime",
                  fontSize: 16,
                  color: "gray",
                }}>
                {e.description}
              </Typography>
            </Card>
          </Link>
        ))}
        <Button
          component={Link}
          target="_blank"
          to="https://medium.com/@wayirenzanzu"
          variant="text"
          sx={{
            fontFamily: "Courier Prime",
            fontSize: 20,
            color: "#00FF99",
            textDecoration: "underLine",
          }}>
          Voir plus
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default Articles;
