import ListaLayout from "./layout/ListaLayout";
import AlumnoCard from "./components/AlumnoCard";
import Title from "../../components/ui/Title";

const ListaAlumnos = ({ alumnos, eliminarAlumno }) => {
  return (
    <div className="lista-alumnos-container">
      <ListaLayout>
        <Title description={"Lista de Alumnos"} />
        <div className="lista-alumnos-grid">
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
          </div>
        </ListaLayout>
      </div>
  );
};

export default ListaAlumnos;