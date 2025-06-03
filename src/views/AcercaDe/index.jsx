import AboutLayout from "./layout/AboutLayout";
import { Card, CardContent, CardActions, Avatar, Typography, Button, Grid } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const integrantes = [
  {
    nombre: "GIANFRANCO PEDRAZZANI",
    github: "https://github.com/GianPedr",
    imagen: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    nombre: "MATÍAS EMANUEL VARGAS",
    github: "https://github.com/MatiasVargasDev",
    imagen: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    nombre: "BRISA ANAHÍ BARRO",
    github: "https://github.com/BarroBrisa",
    imagen: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    nombre: "DARIO ABEL MARTINEZ",
    github: "https://github.com/martinezcabj12",
    imagen: "https://randomuser.me/api/portraits/men/4.jpg"
  }
];
const AcercaDe = () => (<AboutLayout>
    <Typography variant="h4" align="center" gutterBottom>
      Integrantes del grupo
    </Typography>
    <Grid container spacing={3} justifyContent="center">
      {integrantes.map((integrante) => (
        <Grid item xs={12} sm={6} md={4} key={integrante.nombre}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <Avatar
              src={integrante.imagen}
              alt={integrante.nombre}
              sx={{ width: 80, height: 80, margin: "16px auto", borderRadius: "50%" }}
            />
            <CardContent>
              <Typography variant="h6">{integrante.nombre}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                variant="outlined"
                color="primary"
                href={integrante.github}
                target="_blank"
                endIcon={<OpenInNewIcon />}
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </AboutLayout>
);


export default AcercaDe;
