import { Box, Button, Grid2, Typography } from "@mui/material";
import HMenu from "./HMenu";
import { Email, GpsFixed, Phone } from "@mui/icons-material";
import TextFiels from "./Forms/TextFiels";
import Combobox from "./Forms/Combobox";

function Contacter() {
  return (
    <div
      style={{
        background: "#1C1C22",
        marginTop: 70,
        minHeight: "100vh",
      }}>
      <HMenu />
      <Grid2 container direction={"row"} spacing={5}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} m={2}>
          <Box
            sx={{
              minHeight: "80vh",
              borderRadius: 2,
              bgcolor: "#27272C",
              p: 5,
            }}>
            <Typography
              style={{
                fontSize: 30,
                color: "#00FF99",
                fontFamily: "Courier Prime",
              }}>
              Contactez-moi
            </Typography>
            <Typography
              style={{
                fontSize: 20,
                color: "gray",
                fontFamily: "Courier Prime",
                marginTop: 10,
              }}>
              Vous avez un projet ou une question ? Envoyez-moi un message et
              discutons de vos besoins.
            </Typography>
            <Grid2 container flexDirection={"row"} spacing={3} mt={5}>
              <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                <TextFiels label="Prenom" placeholder="ex: jean" />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                <TextFiels label="Nom" placeholder="ex: kambale" />
              </Grid2>
            </Grid2>
            <Grid2 container flexDirection={"row"} spacing={3} mt={2}>
              <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                <TextFiels label="Adresse" placeholder="ex: Nord-kivu | Goma" />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                <TextFiels label="Phone" placeholder="ex: +24399..." />
              </Grid2>
            </Grid2>
            <Box>
              <Combobox label="Choisissez un service" />
              <div style={{ marginTop: 20 }}>
                <TextFiels
                  label="Decrivez votre message ic"
                  placeholder="ex: ..."
                  multiline
                />
              </div>
            </Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#00FF99",
                color: "#000",
                fontFamily: "Courier Prime",
                borderRadius: 50,
                width:"25%",
                p:2
              }}>
              Envoyer
            </Button>
          </Box>
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}
          sx={{ mt: 40, ml: 1 }}>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
            }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                bgcolor: "#27272C",
                flexDirection: "row",
                display: "flex",
              }}>
              <Phone fontSize="large" sx={{ color: "#00FF99" }} />
            </Box>
            <Box sx={{ ml: 3, mt: 2 }}>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: "Courier Prime",
                  color: "gray",
                }}>
                Téléphone
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: "Courier Prime",
                  color: "#fff",
                }}>
                +243 994 296 872
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              mt: 3,
            }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                bgcolor: "#27272C",
                flexDirection: "row",
                display: "flex",
              }}>
              <Email fontSize="large" sx={{ color: "#00FF99" }} />
            </Box>
            <Box sx={{ ml: 3, mt: 2 }}>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: "Courier Prime",
                  color: "gray",
                }}>
                Email
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: "Courier Prime",
                  color: "#fff",
                }}>
                wayirenzanzu@gmail.com
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              mt: 3,
            }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                bgcolor: "#27272C",
                flexDirection: "row",
                display: "flex",
              }}>
              <GpsFixed fontSize="large" sx={{ color: "#00FF99" }} />
            </Box>
            <Box sx={{ ml: 3, mt: 2 }}>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: "Courier Prime",
                  color: "gray",
                }}>
                Adresse
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: "Courier Prime",
                  color: "#fff",
                }}>
                Republique Democratique du Congo | Nord-Kivu | Goma
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Contacter;
