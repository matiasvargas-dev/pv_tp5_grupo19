import { useParams, Link } from "react-router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./style.css";

const AlumnoDetalle = ({ alumnos }) => {
  const { id } = useParams();
  const alumno = alumnos.find((a) => a.id === parseInt(id));

  if (!alumno) return <p>Alumno no encontrado</p>;

  return (
    <Card sx={{ maxWidth: 600, margin: "2rem auto", p: 2}}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Detalle de <strong>{alumno.nombre} {alumno.apellido}</strong>
        </Typography>
        <Typography variant="body1">
          <strong>LU:</strong> {alumno.lu}
        </Typography>
        <Typography variant="body1">
          <strong>Curso:</strong> {alumno.curso}
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {alumno.email}
        </Typography>
        <Typography variant="body1">
          <strong>Domicilio:</strong> {alumno.domicilio || "No especificado"}
        </Typography>
        <Typography variant="body1">
          <strong>Teléfono:</strong> {alumno.telefono || "No especificado"}
        </Typography>
        <Button
          component={Link}
          to="/lista-alumnos"
          size="small"
          color="primary"
          sx={{ mt: 2 }}
        >
          Volver a la lista
        </Button>
      </CardContent>
    </Card>
  );
};

export default AlumnoDetalle;