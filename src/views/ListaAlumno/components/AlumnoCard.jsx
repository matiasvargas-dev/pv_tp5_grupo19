import { Link } from "react-router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AlumnoCard = ({ alumno, onDelete, onEditar }) => {
  const { id, nombre, apellido, curso, lu } = alumno;
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle2" component="div" color="text.secondary">
          <em>{lu}</em>
        </Typography> 
        <Typography variant="h6" component="div">
          {nombre} {apellido}
        </Typography>
        <Typography color="text.secondary">
          Curso: {curso}
        </Typography>
        <Typography color="text.secondary">
         Fecha de creación: {new Date(id).toLocaleDateString('es-AR')} {new Date(id).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
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
