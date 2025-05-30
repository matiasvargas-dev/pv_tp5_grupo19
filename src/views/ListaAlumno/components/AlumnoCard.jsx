import { Link } from "react-router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AlumnoCard = ({ alumno, onDelete, onEditar }) => {
  const { id, nombre, apellido, curso } = alumno;
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {nombre} {apellido}
        </Typography>
        <Typography color="text.secondary">
          <strong>Curso:</strong> {curso}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/alumno/${id}`} size="small">
          Ver
        </Button>
        <Button onClick={onEditar} size="small" color="primary">
          Editar
        </Button>
        <Button onClick={() => onDelete(id)} size="small" color="error">
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};

export default AlumnoCard;
