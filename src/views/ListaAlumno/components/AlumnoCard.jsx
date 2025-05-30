import { Link } from "react-router";
const AlumnoCard = ({ alumno, onDelete }) => {
  const { id, nombre, apellido, curso } = alumno;
  return (
    <div className="alumno-card">
      <h3>LU: {alumno.lu}</h3>
      <h3>{nombre} {apellido}</h3>
      <p className="alumno-curso"><strong>Curso:</strong> {curso}</p>
      <div>
        <Link to={`/alumno/${id}`} className="alumno-link">Ver</Link>
        <Link to={`/alumno/${id}/editar`} className="alumno-link">Editar</Link>
        <button onClick={() => onDelete(id)} className="alumno-btn">Eliminar</button>
      </div>
    </div>
  )
}

export default AlumnoCard