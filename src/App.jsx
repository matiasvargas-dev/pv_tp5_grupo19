import { AppRouter } from "./AppRouter";

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
