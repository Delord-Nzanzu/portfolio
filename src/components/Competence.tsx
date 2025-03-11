import { Card, Container, Grid2, Tooltip, Typography } from "@mui/material";
import HMenu from "./HMenu";

const data = [
  {
    id: 1,
    text: "Nodejs",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    id: 2,
    text: "Javascrypt",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 3,
    text: "Reactjs",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },

  {
    id: 4,
    text: "Material UI",
    img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iYjEzYWViNTFjNTQ0MjFhN2E1NTQwYTcxMzI4OTVkYz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.FnWJxluT5VvnfpnQsm2K2I1GK-k0_NAmWtu3G-u3fE0",
  },
  {
    id: 4,
    text: "CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    id: 3,
    text: "React native",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 4,
    text: "Sequelize",
    img: "https://sequelize.org/img/logo.svg",
  },
];

function Competence() {
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
              color: "gray",
              fontFamily: "Courier Prime",
              mt: 2,
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
              padding: 5,
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
                  bgcolor: "#232329",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  margin: 2,
                  p: 5,
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
