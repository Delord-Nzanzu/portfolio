import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navItems } from "../data/Data";
import useMyContext from "../hooks/useMyContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function HMenu() {
  const { mode, setMode } = useMyContext();
  const [open, setOpen] = useState<boolean>(false);
  const nav = useNavigate();
  const [changeColor, SetChangeColor] = useState("");
  const theme = useTheme(); // Obtenez le thème de MUI

  const handleToggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light"); // Bascule entre les modes
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const goTo = (link: string) => {
    SetChangeColor(link);
    nav(link);
  };

  return (
    <div>
      <AppBar
        component={"nav"}
        sx={{ bgcolor: mode === "light" ? "#fff" : "#1C1C22" }}
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
              color: mode === "light" ? "#000" : "#fff",
            }}>
            Delord<span style={{ color: "#00FF99" }}>.</span>
          </Typography>
          <Typography
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "none",
                lg: "block",
                xl: "block",
                md: "block",
              },
              fontFamily: "Courier Prime",
              fontSize: 30,
              fontWeight: "bold",
              color: mode === "light" ? "#000" : "#fff",
            }}>
            Delord<span style={{ color: "#00FF99" }}>.</span>
          </Typography>
          <Box
            sx={{
              // ml:"-20%",
              display: {
                xs: "none",
                sm: "none",
                lg: "block",
                xl: "block",
                md: "block",
              },
            }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                sx={{
                  // color: changeColor === item.link ? "#00FF99" : "#fff",
                  fontFamily: "Courier Prime",
                  fontWeight: 700,
                  color: mode === "light" ? "#000" : "#fff",
                }}
                onClick={() => goTo(item.link)}>
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
                fontWeight: 700,
              }}>
              Rendez-vous gratuit
            </Button>

            <IconButton
              onClick={handleToggleTheme}
              sx={{
                marginLeft: 2,
                backgroundColor:
                  mode === "light"
                    ? "#fff"
                    : "auto",
                color:
                  mode === "light"
                    ? theme.palette.common.black
                    : theme.palette.text.secondary,
                "&:hover": {
                  backgroundColor:
                    mode === "light"
                      ? theme.palette.primary.dark
                      : theme.palette.secondary.dark,
                },
              }}>
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Box>
          <Box
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
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
            <IconButton
              onClick={handleToggleTheme}
              sx={{
                marginLeft: 2,
                backgroundColor:
                  mode === "light"
                    ? "#fff"
                    : "auto",
                color:
                  mode === "light"
                    ? theme.palette.common.black
                    : theme.palette.text.secondary,
                "&:hover": {
                  backgroundColor:
                    mode === "light"
                      ? theme.palette.primary.dark
                      : theme.palette.secondary.dark,
                },
              }}>
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              bgcolor: "#1C1C22", // Appliquer le fond au contenu du Drawer
              color: "#FFF", // Modifier la couleur du texte si nécessaire
            },
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
                fontFamily: "Courier Prime",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 30,
                margin: 5,
                color: "#fff",
              }}>
              Delord<span style={{ color: "#00FF99" }}>.</span>
            </Typography>
            {navItems.map((item) => (
              <Button
                fullWidth
                key={item.id}
                sx={{
                  color: changeColor === item.link ? "#00FF99" : "#fff",
                  fontFamily: "Courier Prime",
                }}
                onClick={() => goTo(item.link)}>
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
                color: "#fff",
                fontFamily: "Courier Prime",
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
