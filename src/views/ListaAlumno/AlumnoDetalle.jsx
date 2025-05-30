import { useParams } from "react-router";

const AlumnoDetalle = ({ alumnos }) => {
  const { id } = useParams(); // Extraemos el id del parámetro de la URL
  const alumno = alumnos.find(a => a.id === parseInt(id));

  if (!alumno) return <p>Alumno no encontrado</p>;

  return (
    <div>
      <h2>Detalle de {alumno.nombre} {alumno.apellido}</h2>
      <p><strong>LU:</strong> {alumno.lu}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio || 'No especificado'}</p>
      <p><strong>Teléfono:</strong> {alumno.telefono || 'No especificado'}</p>
    </div>
  );
};

export default AlumnoDetalle;