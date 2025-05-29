import { useState } from 'react';
import { AppRouter } from "./AppRouter";
import "./App.css";

function App() {
  // Estado global de alumnos
  const [alumnos, setAlumnos] = useState([
    // Datos de ejemplo para pruebas
    {
      id: 1,
      lu: "APU00999",
      nombre: "María Eugenia",
      apellido: "Díaz",
      curso: "Tercero",
      email: "mariadiaz@mail.com",
      domicilio: "Av. Congreso 125",
      telefono: "3884895999"
    },
    {
      id: 2,
      lu: "APU00100",
      nombre: "Juan Carlos",
      apellido: "Pérez",
      curso: "Segundo",
      email: "jperez@mail.com",
      domicilio: "San Martín 456",
      telefono: "3884123456"
    }
  ]);

  // Función para agregar un nuevo alumno (la que tu formulario usará)
  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos(prev => [...prev, nuevoAlumno]);
  };

  // Función para editar un alumno (la usarán tus compañeros)
  const editarAlumno = (alumnoEditado) => {
    setAlumnos(prev => 
      prev.map(alumno => 
        alumno.id === alumnoEditado.id ? alumnoEditado : alumno
      )
    );
  };

  // Función para eliminar un alumno (la usarán tus compañeros)
  const eliminarAlumno = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este alumno?')) {
      setAlumnos(prev => prev.filter(alumno => alumno.id !== id));
    }
  };

  return (
    <AppRouter 
      alumnos={alumnos}
      agregarAlumno={agregarAlumno}
      editarAlumno={editarAlumno}
      eliminarAlumno={eliminarAlumno}
    />
  );
}

export default App;