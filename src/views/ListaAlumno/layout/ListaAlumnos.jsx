import AlumnoCard from "./AlumnoCard";
import ListaLayout from "./ListaLayout";

const ListaAlumnos = ({ alumnos, eliminarAlumno }) => {
  return (
    <div>
      <ListaLayout>
        {
          alumnos.map(alumno => (
            <AlumnoCard
              key={alumno.id}
              alumno={alumno}
              onDelete={eliminarAlumno}
            />
          ))
        }
      </ListaLayout>
    </div>
  )
}
export default ListaAlumnos;