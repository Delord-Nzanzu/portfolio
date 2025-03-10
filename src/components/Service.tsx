import { Divider, Grid2, Typography } from "@mui/material";
import HMenu from "./HMenu";

interface service {
  id: number;
  text: string;
  descr: React.ReactNode;
}

function Service() {
  const data: service[] = [
    {
      id: 1,
      text: "Développement Front-End",
      descr: (
        <>
          Création d’interfaces modernes et performantes avec{" "}
          <span style={{ color: "#00FF99" }}>React.js</span>,{" "}
          <span style={{ color: "#00FF99" }}>TypeScript</span> et{" "}
          <span style={{ color: "#00FF99" }}>Material UI</span>, centrées sur
          une expérience utilisateur optimale.
        </>
      ),
    },
    {
      id: 2,
      text: "Développement Back-End",
      descr: (
        <>
          Conception et développement de solutions robustes avec{" "}
          <span style={{ color: "#00FF99" }}>Node.js</span> et{" "}
          <span style={{ color: "#00FF99" }}>TypeScript</span>, incluant la
          création et l’intégration d’API performantes.
        </>
      ),
    },
    {
      id: 3,
      text: "Développement Mobile",
      descr: (
        <>
          Développement d'interfaces mobiles modernes et performantes avec
          <span style={{ color: "#00FF99" }}>React native</span>,{" "}
          <span style={{ color: "#00FF99" }}>TypeScript</span>, et{" "}
          <span style={{ color: "#00FF99" }}>React Native Paper</span> ,
          centrées sur une expérience utilisateur fluide et intuitive.
        </>
      ),
    },
  ];

  return (
    <div
      style={{
        background: "#1C1C22",
        marginTop: 60,
        minHeight: "100vh",
      }}>
      <HMenu />
      <div data-aos="zoom-in-up">
        <Grid2 container direction={"row"} spacing={5} p={5}>
          {data.map((e) => (
            <Grid2 key={e.id} size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Typography
                sx={{
                  fontSize: 50,
                  fontFamily: "Courier Prime",
                  color: "#fff",
                  ":hover": {
                    color: "#00FF99",
                  },
                }}>
                {e.id}
              </Typography>
              <Typography
                sx={{
                  fontSize: 40,
                  fontFamily: "Courier Prime",
                  color: "#fff",
                  ":hover": {
                    color: "#00FF99",
                  },
                }}>
                {e.text}
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: "Courier Prime",
                  color: "#fff",
                }}>
                {e.descr}
              </Typography>
              <Divider
                sx={{
                  borderWidth: 2,
                  color: "#fff",
                  m: 1,
                  borderColor: "#fff",
                  borderStyle: "solid",
                }}
              />
            </Grid2>
          ))}
        </Grid2>
      </div>
    </div>
  );
}

export default Service;
