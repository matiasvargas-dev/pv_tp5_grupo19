import { useParams, Link } from "react-router";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Modal from "../../components/Modal";
import "./style.css";

const AlumnoDetalle = ({ alumnos, editarAlumno }) => {
  const { id } = useParams();
  const alumno = alumnos.find((a) => a.id === parseInt(id));
  const [modalOpen, setModalOpen] = useState(false);

  if (!alumno) return <p>Alumno no encontrado</p>;

  const handleEditarClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "2rem auto", p: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Detalle de <strong>{alumno.nombre} {alumno.apellido}</strong>
        </Typography>
        <Typography variant="body1">
          <strong>LU:</strong> {alumno.lu}<br />
          <strong>Curso:</strong> {alumno.curso}<br />
          <strong>Email:</strong> {alumno.email}<br />
          <strong>Domicilio:</strong> {alumno.domicilio || "No especificado"}<br />
          <strong>Teléfono:</strong> {alumno.telefono || "No especificado"}
        </Typography>
      </CardContent>
      <CardActions sx={{mt: 0.1}}>
        <Button
          component={Link}
          to="/lista-alumnos"
          size="small"
          color="secondary"
        >
          Volver a la lista
        </Button>
        <Button
          onClick={handleEditarClick}
          size="small"
          color="primary"
        >
          Editar
        </Button>
        
      </CardActions>
      <Modal
        alumno={alumno}
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onEditarAlumno={editarAlumno}
        alumnos={alumnos}
      />
    </Card>
  );
};

export default AlumnoDetalle;