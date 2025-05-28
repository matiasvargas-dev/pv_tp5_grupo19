const AlumnoCard = ({ alumno, onDelete }) => {
  const { id, nombre, apellido, curso } = alumno;
  return (
    <div>
      <h3>{nombre} {apellido}</h3>
      <p><strong>Curso:</strong> {curso}</p>
      <div>
        <Link to={`/alumno/${id}`}>Ver</Link>
        <Link to={`/alumno/${id}/editar`}>Editar</Link>
        <button onClick={() => onDelete(id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default AlumnoCard