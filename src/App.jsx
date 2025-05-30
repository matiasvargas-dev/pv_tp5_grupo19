import { AppRouter } from "./AppRouter";
import alumnosIniciales from "./data/alumnos";
import "./App.css";

function App() {
  const [alumnos, setAlumnos] = useState(alumnosIniciales);

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos((prev) => [...prev, nuevoAlumno]);
  };
  const eliminarAlumno = (id) => {
    const confirmacion = window.confirm(
      "Seguro que queres eliminar este alumno?"
    );
    if (confirmacion) {
      setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
    }
  };
  return (
    <>
      <AppRouter
        alumnos={alumnos}
        eliminarAlumno={eliminarAlumno}
        agregarAlumno={agregarAlumno}
      />
    </>
  );
}

export default App;
