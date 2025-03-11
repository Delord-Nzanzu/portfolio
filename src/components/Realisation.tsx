import { Container, Grid2, Typography } from "@mui/material";
import HMenu from "./HMenu";

function Realisation() {
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
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              width: "100%",
              minHeight: "100vh",
            }}></Container>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Realisation;
