import HomeLayout from "../Layout/HomeLayout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router";

const Presentation = () => {
  return (
    <HomeLayout>
      <Box
      sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

      <Paper elevation={3} 
      sx={{
        background: "linear-gradient(135deg, #ffa07a 0%, #cd5c5c 100%)",
        borderRadius: 4,
        p: { xs: 2, sm: 4 },
        m: { xs: 2, sm: 4 },
        maxWidth: 600,
        mx: "auto",
      }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#34495e",
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "1.4rem", sm: "2rem" },
          }}
     
      align="center"
>
  Bienvenido a la Aplicación de Gestión de Alumnos
         </Typography>
   
     <Typography
          variant="body1"
          sx={{
            color: "#34495e",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            mb: 3,
          }}
          align="center"
          >
   Esta aplicación fue desarrollada por el Grupo 19 para el trabajo practico n°5 fue diseñada para facilitar 
   la gestión de alumnos, permitiendo a los docentes llevar un control eficiente de la información académica y personal de los estudiantes.
    </Typography>  <Typography
     variant="h5"
      sx={{
      color: "#2c3e50",
      fontWeight: 500,
      mt: 2,
      mb: 1,
      fontSize: { xs: "1.1rem", sm: "1.25rem" },
      }}
     align="center"
        >
      Facultad de Ingeneria - Programacion Visual 2025
    </Typography>
     <Box display="flex" justifyContent="center">
          <Button
           component={Link}
            to="/acercade"
            variant= "contained"
           color="primary"
            sx={{ borderRadius: 2, px: 4, py: 1 }}
          >
            Ver Alumnos
          </Button>
        </Box>
</Paper>
     </Box>
    </HomeLayout>
  );
};
export default Presentation;
