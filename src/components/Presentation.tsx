import {
  Box,
  Button,
  Card,
  Container,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import HMenu from "./HMenu";
import imageDelord from "../assets/del1.jpg";
import { Download, GitHub, LinkedIn, X } from "@mui/icons-material";
import useCounter from "../hooks/useCompte";
import { Link, useNavigate } from "react-router-dom";
import useTelechargementCV from "../hooks/useTelechargementCV";
//
function Presentation() {
  const AnneExperience = useCounter(5);
  const projetContribue = useCounter(15);
  const TechnologiesMaitriser = useCounter(5);
  const CommuniteCode = useCounter(100);
  const nav = useNavigate();

  const { handleDownload } = useTelechargementCV();

  return (
    <div
      style={{
        background: "#1C1C22",
        marginTop: 70,
        minHeight: "100vh",
        overflow: "hidden",
      }}>
      <HMenu />
      <Grid2
        display={{
          xs: "none",
          // sm: "none",
          md: "block",
          sm: "none",
          lg: "block",
          xl: "block",
        }}>
        <Grid2
          container
          direction={"row"}
          spacing={5}
          position={"relative"}
          p={5}>
          <Grid2 size={{ xs: 0, sm: 0, md: 8, lg: 8, xl: 8 }}>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <Typography
                sx={{
                  fontFamily: "Courier Prime",
                  fontSize: 40,
                  color: "#fff",
                  letterSpacing: 5,
                  fontWeight: "bold",
                }}>
                Bonjour, je suis Delord
                <span style={{ color: "#00FF99" }}>.</span>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Courier Prime",
                  fontSize: 20,
                  color: "#fff",
                  letterSpacing: 2,
                  mt: 3,
                  lineHeight: 1.8,
                }}>
                <span style={{ color: "#00FF99" }}>Développeur FullStack </span>
                avec 5+ ans d’expérience !
                <span style={{ color: "#00FF99" }}>
                  Expert en Architecture, Expert en programation
                </span>{" "}
                et Licencié{" "}
                <span style={{ color: "#00FF99" }}>
                  en Conception et Programmation du Systeme Informatique
                </span>
                , j’accompagne mes clients vers une digitalisation réussie, de
                la maquette au développement !
              </Typography>
            </div>

            <Grid2 container direction={"row"} mt={5} spacing={0}>
              <Grid2 size={4}>
                <Button
                  onClick={handleDownload}
                  endIcon={
                    <Download
                      sx={{
                        color: "#00FF99",
                        fontSize: 20,
                        ":hover": { color: "#000" },
                      }}
                    />
                  }
                  variant="outlined"
                  sx={{
                    borderColor: "#00FF99",
                    borderStyle: "solid",
                    borderWidth: 2,
                    color: "#00FF99",
                    fontFamily: "Courier Prime",
                    borderRadius: 50,
                    fontSize: 18,
                    ":hover": {
                      background: "#00FF99",
                      color: "#000",
                    },
                  }}>
                  Telecharge mon CV
                </Button>
              </Grid2>
              <Grid2 size={3}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}>
                  <Link
                    to="https://github.com/Delord-Nzanzu" // Remplace par ton lien GitHub
                    target="_blank" // Ouvre le lien dans un nouvel onglet
                    style={{ textDecoration: "none" }} // Pour enlever le souligné du lien
                  >
                    <IconButton
                      sx={{
                        borderStyle: "solid",
                        borderColor: "#00FF99",
                        borderWidth: 2,
                      }}>
                      <GitHub sx={{ color: "#00FF99", fontSize: 20 }} />
                    </IconButton>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/nzanzu-wayire-a9a079210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Remplace par ton lien GitHub
                    target="_blank" // Ouvre le lien dans un nouvel onglet
                    style={{ textDecoration: "none" }} // Pour enlever le souligné du lien
                  >
                    <IconButton
                      sx={{
                        borderStyle: "solid",
                        borderColor: "#00FF99",
                        borderWidth: 2,
                      }}>
                      <LinkedIn sx={{ color: "#00FF99", fontSize: 20 }} />
                    </IconButton>
                  </Link>
                  <Link
                    to="https://x.com/DelordNzanzu?s=09" // Remplace par ton lien GitHub
                    target="_blank" // Ouvre le lien dans un nouvel onglet
                    style={{ textDecoration: "none" }} // Pour enlever le souligné du lien
                  >
                    <IconButton
                      sx={{
                        borderStyle: "solid",
                        borderColor: "#00FF99",
                        borderWidth: 2,
                      }}>
                      <X sx={{ color: "#00FF99", fontSize: 20 }} />
                    </IconButton>
                  </Link>
                </div>
              </Grid2>
            </Grid2>
            <Container sx={{ mt: 5, ml: -3, bgcolor: "##232329" }}>
              <Card sx={{ bgcolor: "#232329", p: 5 }}>
                <Typography
                  sx={{
                    fontFamily: "Courier Prime",
                    fontSize: 25,
                    color: "#fff",
                  }}>
                  Vous cherche un{" "}
                  <span style={{ color: "#00FF99" }}>Développeur</span>{" "}
                  intelligent ?
                </Typography>
                <Typography sx={{ color: "#fff", mb: 2 }}>
                  __________ _____ ___
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Courier Prime",
                    fontSize: 20,
                    color: "#fff",
                  }}>
                  Avez-vous{" "}
                  <span style={{ color: "#00FF99" }}>
                    une idée d'innovation
                  </span> qui vous trotte dans la tête ? N'hésitez pas à{" "}
                  <span style={{ color: "#00FF99" }}>me contacter</span> afin
                  que nous puissions enrichir cette idée ensemble.
                </Typography>
                <Button
                  onClick={() => nav("/contact")}
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    borderWidth: 2,
                    borderColor: "#00FF99",
                    color: "#00FF99",
                    mt: 2,
                  }}>
                  Engagez-mois
                </Button>
              </Card>
            </Container>
          </Grid2>
          <Grid2
            size={{ xs: 0, sm: 0, md: 4, lg: 4, xl: 4 }}
            justifyContent={"center"}
            alignItems={"center"}>
            <div data-aos="zoom-in-up">
              <Box
                sx={{
                  width: 400,
                  height: 400,
                  border: "5px solid green",
                  borderRadius: "50%", // Coins arrondis
                  overflow: "hidden", // Pour éviter les débordements d'image
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#EBE9E8",
                }}>
                <img
                  src={imageDelord}
                  alt="Delord"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "50%", // Contient l'image dans le conteneur sans la couper
                  }}
                />
              </Box>
            </div>
          </Grid2>
        </Grid2>

        <Grid2
          container
          direction={"row"}
          spacing={2}
          pl={5}
          justifyContent={"center"}
          alignItems={"center"}>
          <Grid2 size={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Typography
                style={{
                  fontFamily: "Courier Prime",
                  color: "#fff",
                  fontSize: 80,
                  fontWeight: 700,
                }}>
                {AnneExperience}
              </Typography>
              <div style={{ marginLeft: 5, marginTop: 25 }}>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 25,
                  }}>
                  Années
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 25,
                  }}>
                  d'expérience
                </Typography>
              </div>
            </div>
          </Grid2>
          <Grid2 size={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Typography
                style={{
                  fontFamily: "Courier Prime",
                  color: "#fff",
                  fontSize: 80,
                  fontWeight: 700,
                }}>
                {projetContribue}
              </Typography>
              <div style={{ marginLeft: 5, marginTop: 50 }}>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 25,
                  }}>
                  Projet
                </Typography>
              </div>
            </div>
          </Grid2>
          <Grid2 size={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Typography
                style={{
                  fontFamily: "Courier Prime",
                  color: "#fff",
                  fontSize: 80,
                  fontWeight: 700,
                }}>
                {TechnologiesMaitriser}
              </Typography>
              <div style={{ marginLeft: 5, marginTop: 25 }}>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 25,
                  }}>
                  Technologies
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 25,
                  }}>
                  maîtrisées
                </Typography>
              </div>
            </div>
          </Grid2>
          <Grid2 size={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}>
              <Typography
                style={{
                  fontFamily: "Courier Prime",
                  color: "#fff",
                  fontSize: 65,
                  fontWeight: 700,
                }}>
                {CommuniteCode === 100 ? "9999+" : CommuniteCode}
              </Typography>
              <div style={{ marginLeft: 5, marginTop: -15 }}>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 25,
                  }}>
                  Commits de code
                </Typography>
              </div>
            </div>
          </Grid2>
        </Grid2>
      </Grid2>
      {
        //mobiel
      }
      <Grid2
        display={{
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        }}>
        <HMenu />
        <div
          data-aos="zoom-in-up"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          }}>
          <Box
            sx={{
              width: 200,
              height: 200,
              border: "5px solid green",
              borderRadius: "50%", // Coins arrondis
              overflow: "hidden", // Pour éviter les débordements d'image
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#EBE9E8",
              flexDirection: "row",
            }}>
            <img
              src={imageDelord}
              alt="Delord"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "50%", // Contient l'image dans le conteneur sans la couper
              }}
            />
          </Box>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <Typography
            sx={{
              fontFamily: "Courier Prime",
              fontSize: 25,
              color: "#fff",
              letterSpacing: 5,
              fontWeight: "bold",
              textAlign: "center",
              p: 2,
            }}>
            Bonjour, je suis Delord<span style={{ color: "#00FF99" }}>.</span>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Courier Prime",
              fontSize: 20,
              color: "#fff",
              letterSpacing: 2,
              mt: 0,
              lineHeight: 1.8,
              textAlign: "center",
            }}>
            <span style={{ color: "#00FF99" }}>Développeur FullStack </span>
            avec 5+ ans d’expérience!{" "}
            <span style={{ color: "#00FF99" }}>
              Expert en Architecture, Expert en programation
            </span>{" "}
            et Licencié{" "}
            <span style={{ color: "#00FF99" }}>
              en Conception et Programmation du Systeme Informatique
            </span>
            , j’accompagne mes clients vers une digitalisation réussie, de la
            maquette au développement !
          </Typography>
        </div>

        <Grid2
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={2}
          spacing={0}>
          <Button
            onClick={handleDownload}
            endIcon={
              <Download
                sx={{
                  color: "#00FF99",
                  fontSize: 20,
                  ":hover": { color: "#000" },
                }}
              />
            }
            variant="outlined"
            sx={{
              borderColor: "#00FF99",
              borderStyle: "solid",
              borderWidth: 2,
              color: "#00FF99",
              fontFamily: "Courier Prime",
              borderRadius: 50,
              fontSize: 18,
              ":hover": {
                background: "#00FF99",
                color: "#000",
              },
            }}>
            Telecharge mon CV
          </Button>
          <Grid2 size={12} mb={2} mt={2}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}>
              <Link
                to="https://github.com/Delord-Nzanzu" // Remplace par ton lien GitHub
                target="_blank" // Ouvre le lien dans un nouvel onglet
                style={{ textDecoration: "none" }} // Pour enlever le souligné du lien
              >
                <IconButton
                  sx={{
                    borderStyle: "solid",
                    borderColor: "#00FF99",
                    borderWidth: 2,
                  }}>
                  <GitHub sx={{ color: "#00FF99", fontSize: 20 }} />
                </IconButton>
              </Link>
              <Link
                to="https://www.linkedin.com/in/nzanzu-wayire-a9a079210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Remplace par ton lien GitHub
                target="_blank" // Ouvre le lien dans un nouvel onglet
                style={{ textDecoration: "none" }} // Pour enlever le souligné du lien
              >
                <IconButton
                  sx={{
                    borderStyle: "solid",
                    borderColor: "#00FF99",
                    borderWidth: 2,
                  }}>
                  <LinkedIn sx={{ color: "#00FF99", fontSize: 20 }} />
                </IconButton>
              </Link>
              <Link
                to="https://x.com/DelordNzanzu?s=09" // Remplace par ton lien GitHub
                target="_blank" // Ouvre le lien dans un nouvel onglet
                style={{ textDecoration: "none" }} // Pour enlever le souligné du lien
              >
                <IconButton
                  sx={{
                    borderStyle: "solid",
                    borderColor: "#00FF99",
                    borderWidth: 2,
                  }}>
                  <X sx={{ color: "#00FF99", fontSize: 20 }} />
                </IconButton>
              </Link>
            </div>
          </Grid2>
          <Container sx={{ mt: 5, bgcolor: "##232329" }}>
            <Card sx={{ bgcolor: "#232329", p: 1 }}>
              <Typography
                sx={{
                  fontFamily: "Courier Prime",
                  fontSize: 20,
                  color: "#fff",
                }}>
                Vous cherche un{" "}
                <span style={{ color: "#00FF99" }}>Développeur</span>{" "}
                intelligent ?
              </Typography>
              <Typography sx={{ color: "#fff", mb: 2 }}>_____ ___ _</Typography>
              <Typography
                sx={{
                  fontFamily: "Courier Prime",
                  fontSize: 16,
                  color: "#fff",
                }}>
                Avez-vous{" "}
                <span style={{ color: "#00FF99" }}>une idée d'innovation</span>
                qui vous trotte dans la tête ? N'hésitez pas à{" "}
                <span style={{ color: "#00FF99" }}>me contacter</span> afin que
                nous puissions enrichir cette idée ensemble.
              </Typography>
              <Button
                onClick={() => nav("/contact")}
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  borderWidth: 2,
                  borderColor: "#00FF99",
                  color: "#00FF99",
                  mt: 2,
                }}>
                Engagez-mois
              </Button>
            </Card>
          </Container>
        </Grid2>
        <Grid2
          container
          direction={"row"}
          spacing={0}
          mb={-3}
          ml={-5}
          // pl={5}
          justifyContent={"space-around"}
          alignItems={"center"}>
          <Grid2 size={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Typography
                style={{
                  fontFamily: "Courier Prime",
                  color: "#fff",
                  fontSize: 50,
                  fontWeight: 700,
                }}>
                {AnneExperience}
              </Typography>
              <div style={{ marginLeft: 5, marginTop: 10 }}>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 20,
                  }}>
                  Années
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 20,
                  }}>
                  d'expérience
                </Typography>
              </div>
            </div>
          </Grid2>
          <Grid2 size={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Typography
                style={{
                  fontFamily: "Courier Prime",
                  color: "#fff",
                  fontSize: 50,
                  fontWeight: 700,
                }}>
                {projetContribue}
              </Typography>
              <div style={{ marginLeft: 5, marginTop: 20 }}>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 20,
                  }}>
                  Projet
                </Typography>
              </div>
            </div>
          </Grid2>
        </Grid2>
        <Grid2
          container
          direction={"row"}
          spacing={0}
          m={-5}
          mt={2}
          //   pl={5}
          justifyContent={"space-around"}
          alignItems={"center"}>
          <Grid2 size={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}>
              <Typography
                style={{
                  fontFamily: "Courier Prime",
                  color: "#fff",
                  fontSize: 40,
                  fontWeight: 700,
                }}>
                {TechnologiesMaitriser}
              </Typography>
              <div style={{ marginLeft: 5, marginTop: 10 }}>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 20,
                  }}>
                  Technologies
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 20,
                  }}>
                  maîtrisées
                </Typography>
              </div>
            </div>
          </Grid2>
          <Grid2 size={3} mb={5}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}>
              <Typography
                style={{
                  fontFamily: "Courier Prime",
                  color: "#fff",
                  fontSize: 40,
                  fontWeight: 700,
                }}>
                {CommuniteCode === 100 ? "9999+" : CommuniteCode}
              </Typography>
              <div style={{ marginTop: -10 }}>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 20,
                  }}>
                  Commits
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Courier Prime",
                    color: "#fff",
                    fontSize: 20,
                  }}>
                  de code
                </Typography>
              </div>
            </div>
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Presentation;
