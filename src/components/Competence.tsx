import { Card, Container, Grid2, Tooltip, Typography } from "@mui/material";
import HMenu from "./HMenu";
import useMyContext from "../hooks/useMyContext";

const data = [
  {
    id: 1,
    text: "Nodejs",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    id: 2,
    text: "JavaScrypt",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 3,
    text: "TypeScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/800px-Typescript.svg.png",
  },
  {
    id: 4,
    text: "Reactjs",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },

  {
    id: 5,
    text: "Material UI",
    img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iYjEzYWViNTFjNTQ0MjFhN2E1NTQwYTcxMzI4OTVkYz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.FnWJxluT5VvnfpnQsm2K2I1GK-k0_NAmWtu3G-u3fE0",
  },
  {
    id: 6,
    text: "CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    id: 7,
    text: "React native",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 8,
    text: "Sequelize",
    img: "https://sequelize.org/img/logo.svg",
  },
  {
    id: 9,
    text: "Express",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/120px-Expressjs.png",
  },
];

function Competence() {
  const { mode } = useMyContext();
  return (
    <div
      style={{
        background: mode === "light" ? "#fff" : "#1C1C22",
        marginTop: 70,
        minHeight: "100vh",
      }}>
      <HMenu />
      <Grid2 container direction={"column"}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} sx={{ p: 2 }}>
          <Typography
            sx={{
              fontSize: {
                xs: 30,
                sm: 30,
                md: 50,
                lg: 50,
                xl: 50,
              },
              color: mode === "light" ? "#000" : "#fff",
              fontFamily: "Courier Prime",
              fontWeight: 700,
              mt: {
                xs: 0,
                sm: 0,
                md: 0,
                lg: 0,
                xl: 0,
              },
              ml: {
                xs: 0,
                sm: 0,
                md: 5,
                lg: 5,
                xl: 5,
              },
            }}>
            Mes compétences
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
              color: mode === "light" ? "#000" : "#fff",
              fontFamily: "Courier Prime",
              mt: {
                xs: 0,
                sm: 0,
                md: 0,
                lg: 0,
                xl: 0,
              },
              ml: {
                xs: 0,
                sm: 0,
                md: 5,
                lg: 5,
                xl: 5,
              },
            }}>
            <span
              style={{
                color: "#00FF99",
              }}>
              Développeur Fullstack JS/TS
            </span>
            , passionné par les technologies modernes. Expert en UI/UX design,
            analyse des systèmes, programmation, architecture frontend et
            intégration d’APIs.
          </Typography>
          <Container
            style={{
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap",
              padding: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              width: "100%",
              minHeight: "100vh",
            }}>
            {data.map((e, key) => (
              <Card
                key={key}
                sx={{
                  maxWidth: {
                    xs: 500,
                    sm: 500,
                    md: 360,
                  },
                  ml: {
                    xs: 0,
                    sm: 0,
                    md: 3,
                  },
                  mt: {
                    xs: 3,
                    sm: 3,
                    md: 3,
                  },
                  width: {
                    xs: 200,
                    sm: 200,
                    md: 150,
                    lg: 150,
                    xl: 150,
                  },
                  height: {
                    xs: 200,
                    sm: 200,
                    md: 150,
                    lg: 150,
                    xl: 150,
                  },
                  bgcolor: mode === "light" ? "#fff" : "#232329",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  margin: 1,
                  p: 1,
                }}>
                <Tooltip
                  title={e.text}
                  style={{
                    color: "#fff",
                    fontSize: 25,
                    fontFamily: "Courier Prime",
                  }}>
                  <img
                    src={e.img}
                    alt={e.text}
                    style={{
                      width: 150,
                      height: 150,
                      objectFit: "contain",
                    }}
                  />
                </Tooltip>
              </Card>
            ))}
          </Container>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Competence;
