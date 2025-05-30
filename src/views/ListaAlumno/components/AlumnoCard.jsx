import { Link } from "react-router";
const AlumnoCard = ({ alumno, onDelete, onEditar }) => {
  const { id, nombre, apellido, curso } = alumno;
  return (
    <div>
      <h3>{nombre} {apellido}</h3>
      <p><strong>Curso:</strong> {curso}</p>
      <div>
        <Link to={`/alumno/${id}`}>Ver</Link>
        <button onClick={onEditar}>Editar</button>
        <button onClick={() => onDelete(id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default AlumnoCard