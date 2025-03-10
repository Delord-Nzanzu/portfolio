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
import { useNavigate } from "react-router-dom";

function HMenu() {
  const navItems = [
    {
      text: "Accueil",
      id: 1,
      link: "/",
    },
    {
      text: "Mes services",
      id: 2,
      link: "/services",
    },
    {
      text: "Contact",
      id: 3,
      link: "/contact",
    },
  ];
  const [open, setOpen] = useState<boolean>(false);
  const nav = useNavigate();

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
              fontFamily: "Courier Prime",
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
              fontFamily: "Courier Prime",
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
              <Button
                key={item.id}
                sx={{ color: "#fff", fontFamily: "Courier Prime" }}
                onClick={() => nav(item.link)}>
                {item.text}
              </Button>
            ))}
            <Button
              component="a"
              href="https://calendly.com/wayirenzanzu/30min"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                bgcolor: "#00FF99",
                color: "#000",
                fontFamily: "Courier Prime",
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
              <Button
                fullWidth
                key={item.id}
                sx={{ color: "#000", fontFamily: "Lato" }}
                onClick={() => nav(item.link)}>
                {item.text}
              </Button>
            ))}
            <Button
              component="a"
              href="https://calendly.com/wayirenzanzu/30min"
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              fullWidth
              sx={{
                //   bgcolor: "#00FF99",
                color: "#000",
                fontFamily: "Lato",
                borderRadius: 50,
                fontWeight: 700,
                textAlign: "center",
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
