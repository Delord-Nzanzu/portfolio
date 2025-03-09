import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

function HMenu() {
  const navItems = ["Home", "About", "Contact"];
  return (
    <div>
      <AppBar component={"nav"}>
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
              fontSize: 25,
            }}>
            Delord.
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
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HMenu;
