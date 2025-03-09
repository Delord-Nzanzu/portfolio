import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

function HMenu() {
  const navItems = ["Accueil", "Mes services", "Contact"];
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      <AppBar
        component={"nav"}
        sx={{ bgcolor: "#1C1C22" }}
        elevation={0}
        position="absolute">
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              display: {
                xs: "blocak",
                sm: "block",
                lg: "none",
                xl: "none",
                md: "none",
              },
              fontFamily: "Lato",
              fontSize: 30,
              fontWeight: "bold",
            }}>
            Delord<span style={{ color: "#00FF99" }}> .</span>
          </Typography>
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
                borderRadius: 50,
              }}>
              Rendez-vous gratuit
            </Button>
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "block",
                lg: "none",
                xl: "none",
                md: "none",
              },
            }}>
            <IconButton onClick={toggleDrawer(true)}>
              <Menu
                sx={{
                  color: "#00FF99",
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          sx={{
            bgcolor: "#1C1C22",
          }}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}>
            <Typography
              sx={{
                display: {
                  xs: "blocak",
                  sm: "block",
                  lg: "none",
                  xl: "none",
                  md: "none",
                },
                fontFamily: "Lato",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 30,
                margin: 5,
              }}>
              Delord<span style={{ color: "#00FF99" }}> .</span>
            </Typography>
            {navItems.map((item) => (
              <Button fullWidth key={item} sx={{ color: "#000", fontFamily: "Lato" }}>
                {item}
              </Button>
            ))}
            <Button
              variant="text"
              fullWidth
              sx={{
                //   bgcolor: "#00FF99",
                color: "#000",
                fontFamily: "Lato",
                borderRadius: 50,
                fontWeight: 700,
                textAlign:"center"
              }}>
              Rendez-vous gratuit
            </Button>
          </Box>
        </Drawer>
      </AppBar>
    </div>
  );
}

export default HMenu;
