import { AppRouter } from "./AppRouter";
import alumnosIniciales from "./data/alumnos";
import "./App.css";

function App() {
  
  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos((prev) => [...prev, nuevoAlumno]);
  };

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
