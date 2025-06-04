import { AppRouter } from "./AppRouter";
import { useState } from "react";
import alumnosIniciales from "./data/alumnos";
import "./App.css";

function App() {
  const [alumnos, setAlumnos] = useState(alumnosIniciales);

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos((prev) => [...prev, nuevoAlumno]);
  };

  const editarAlumno = (alumnoEditado) => {
    setAlumnos((prev) =>
      prev.map((alumno) =>
        alumno.id === alumnoEditado.id ? { ...alumnoEditado } : alumno,
      ),
    );
  };

  const eliminarAlumno = (id) => {
    const confirmacion = window.confirm(
      "Seguro que queres eliminar este alumno?",
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
        editarAlumno={editarAlumno}
      />
    </>
  );
}

export default App;
