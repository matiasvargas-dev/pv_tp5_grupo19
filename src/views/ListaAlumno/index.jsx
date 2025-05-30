import ListaLayout from "./layout/ListaLayout";
import AlumnoCard from "./components/AlumnoCard";
import Title from "../../components/ui/Title";

const ListaAlumnos = ({ alumnos, eliminarAlumno }) => {
  return (
    <>
      <ListaLayout>
        <Title description={"Lista de Alumnos"} />
        {
          alumnos.length === 0 ? (
            <p>No hay alumnos registrados.</p>
          ) : (
            alumnos.map(alumno => (
              <AlumnoCard
                key={alumno.id}
                alumno={alumno}
                onDelete={eliminarAlumno}
              />
            ))
          )}
      </ListaLayout>
    </>
  );
};

export default ListaAlumnos;
