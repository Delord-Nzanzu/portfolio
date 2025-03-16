import { Box, Button, Grid2, Typography } from "@mui/material";
import HMenu from "./HMenu";
import { Email, GpsFixed, Phone } from "@mui/icons-material";
import TextFiels from "./Forms/TextFiels";
import Combobox from "./Forms/Combobox";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const DataTypeCollect = [
  {
    value: "Développement Front-End",
    label: "Développement Front-End",
  },
  {
    value: "Développement Back-End",
    label: "Développement Back-End",
  },
  {
    value: "Développement Mobile",
    label: "Développement Mobile",
  },
];

const ServiceID = import.meta.env.VITE_APP_SERVICEID;
const templeteID = import.meta.env.VITE_APP_TEMPLETEID;
const idKey = import.meta.env.VITE_APP_APIKEY;

function Contacter() {
  const [selectDataType, setSelectDataType] = useState<any>();
  const [desable, setDesable] = useState<boolean>(false);

  const sendEmail = useFormik({
    enableReinitialize: false,
    initialValues: {
      prenom: "",
      nom: "",
      email: "",
      desce: "",
      phone: "",
    },
    validationSchema: yup.object().shape({
      prenom: yup.string().required("les champs est obligatoire"),
      nom: yup.string().required("les champs est obligatoire"),
      email: yup.string().required("les champs est obligatoire"),
      desce: yup.string().required("les champs est obligatoire"),
      phone: yup.string().required("les champs est obligatoire"),
    }),
    onSubmit: (e, { resetForm }) => {
      setDesable(true);
      emailjs
        .send(
          ServiceID, // Remplace par ton ID de service
          templeteID, // Remplace par ton ID de modèle
          {
            email: e.email,
            message: `service: ${selectDataType.value}\n description: ${e.desce} \n phone: ${e.phone} \n Nom: ${e.nom}-${e.prenom} \n email :${e.email}`,
            name: `${e.nom}-${e.prenom}`,
          },
          idKey // Remplace par ton User ID EmailJS
        )
        .then(
          () => {
            resetForm();
            setDesable(false);
            toast.success("E-mail envoyé avec succès ✅.", {
              position: "top-center",
              autoClose: 3000, // Durée d'affichage en ms
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          },
          () => {
            toast.error("Erreur lors de l'envoi ❌.", {
              position: "top-center",
              autoClose: 3000, // Durée d'affichage en ms
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
            setDesable(false);
          }
        );
    },
  });

  return (
    <div
      style={{
        background: "#1C1C22",
        marginTop: 70,
        minHeight: "100vh",
      }}>
      <HMenu />
      <Grid2 container direction={"row"} spacing={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} m={2}>
          <Box
            sx={{
              minHeight: "80vh",
              borderRadius: 2,
              bgcolor: "#27272C",
              p: 1,
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
                <TextFiels
                  label="Prenom"
                  placeholder="ex: jean"
                  id="prenom"
                  value={sendEmail.values.prenom}
                  onChange={sendEmail.handleChange}
                  onBlur={sendEmail.handleBlur}
                  error={
                    sendEmail.touched.prenom && sendEmail.errors.prenom && true
                  }
                  labelError={
                    sendEmail.touched.prenom && sendEmail.errors.prenom
                      ? sendEmail.errors.prenom // Utilise le message d'erreur ici
                      : null
                  }
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                <TextFiels
                  label="Nom"
                  placeholder="ex: kambale"
                  id="nom"
                  value={sendEmail.values.nom}
                  onChange={sendEmail.handleChange}
                  onBlur={sendEmail.handleBlur}
                  error={sendEmail.touched.nom && sendEmail.errors.nom && true}
                  labelError={
                    sendEmail.touched.nom && sendEmail.errors.nom
                      ? sendEmail.errors.nom // Utilise le message d'erreur ici
                      : null
                  }
                />
              </Grid2>
            </Grid2>
            <Grid2 container flexDirection={"row"} spacing={3} mt={2}>
              <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                <TextFiels
                  label="Adresse email"
                  placeholder="ex: toto@gmail.com"
                  id="email"
                  value={sendEmail.values.email}
                  onChange={sendEmail.handleChange}
                  onBlur={sendEmail.handleBlur}
                  error={
                    sendEmail.touched.email && sendEmail.errors.email && true
                  }
                  labelError={
                    sendEmail.touched.email && sendEmail.errors.email
                      ? sendEmail.errors.email // Utilise le message d'erreur ici
                      : null
                  }
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                <TextFiels
                  label="Phone"
                  placeholder="ex: +24399..."
                  id="phone"
                  value={sendEmail.values.phone}
                  onChange={sendEmail.handleChange}
                  onBlur={sendEmail.handleBlur}
                  error={
                    sendEmail.touched.phone && sendEmail.errors.phone && true
                  }
                  labelError={
                    sendEmail.touched.phone && sendEmail.errors.phone
                      ? sendEmail.errors.phone // Utilise le message d'erreur ici
                      : null
                  }
                />
              </Grid2>
            </Grid2>
            <Box>
              <Combobox
                data={DataTypeCollect}
                value={selectDataType}
                onChange={(e) => setSelectDataType(e)}
                label="Choisissez un service"
              />
              <div style={{ marginTop: 20 }}>
                <TextFiels
                  label="Décrivez votre message ic"
                  placeholder="ex: ..."
                  multiline
                  id="desce"
                  value={sendEmail.values.desce}
                  onChange={sendEmail.handleChange}
                  onBlur={sendEmail.handleBlur}
                  error={
                    sendEmail.touched.desce && sendEmail.errors.desce && true
                  }
                  labelError={
                    sendEmail.touched.desce && sendEmail.errors.desce
                      ? sendEmail.errors.desce // Utilise le message d'erreur ici
                      : null
                  }
                />
              </div>
            </Box>
            <Button
              disabled={desable}
              onClick={(_: React.MouseEvent<HTMLButtonElement>) =>
                sendEmail.handleSubmit()
              }
              variant="contained"
              sx={{
                bgcolor: "#00FF99",
                color: "#000",
                fontFamily: "Courier Prime",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "25%",
                },
                p: 1,
              }}>
              Envoyer
            </Button>
          </Box>
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}
          sx={{
            mt: {
              xs: 1,
              sm: 1,
              md: 40,
            },
            ml: {
              xs: 3,
              sm: 3,
              md: 1,
            },
          }}>
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
                République Democratique du Congo | Nord-Kivu | Goma
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Contacter;
