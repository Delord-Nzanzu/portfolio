import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

function HMenu() {
  const navItems = ["Accueil", "Mes services", "Contact"];
  return (
    <div>
      <AppBar component={"nav"} sx={{ bgcolor: "#1C1C22" }} elevation={0} position="absolute">
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                lg: "block",
                xl: "block",
                md: "block",
              },
              fontFamily: "Lato",
              fontSize: 30,
              fontWeight: "bold",
            }}>
            Delord<span style={{ color: "#00FF99" }}> .</span>
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                lg: "block",
                xl: "block",
                md: "block",
              },
            }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff", fontFamily: "Lato" }}>
                {item}
              </Button>
            ))}
            <Button
              variant="contained"
              sx={{
                bgcolor: "#00FF99",
                color: "#000",
                fontFamily: "Lato",
                borderRadius:50
                
              }}>
              Rendez-vous gratuit
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HMenu;
