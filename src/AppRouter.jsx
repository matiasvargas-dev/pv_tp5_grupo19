import { BrowserRouter, Routes, Route } from "react-router";
import { Navigate } from "react-router";

import NavBar from "./components/Navbar";
import Home from "./views/Home";
import AcercaDe from "./views/AcercaDe";
import ListaAlumnos from "./views/ListaAlumno";
import FormularioAlumno from "./views/FormularioAlumno"; // Tu nueva vista
import AlumnoDetalle from "./views/ListaAlumno/AlumnoDetalle";

export const AppRouter = ({ alumnos, agregarAlumno, editarAlumno, eliminarAlumno }) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Home */}
        <Route index path="/" element={<Home />} />

        {/* Lista Alumnos */}
        <Route 
          path="/lista-alumnos" 
          element={
            <ListaAlumnos 
              alumnos={alumnos} 
              eliminarAlumno={eliminarAlumno} 
            />
          } 
        />
        
        {/* Detalle Alumno */}
        <Route 
          path="/alumno/:id" 
          element={<AlumnoDetalle alumnos={alumnos} />} 
        />

        {/* Tu Formulario de Alumno */}
        <Route 
          path="/formulario-alumno" 
          element={
            <FormularioAlumno 
              alumnos={alumnos}
              agregarAlumno={agregarAlumno}
            />
          } 
        />

        {/* Editar Alumno - esto lo manejará tu compañero */}
        <Route 
          path="/alumno/:id/editar" 
          element={
            <div>
              <h2>Editar Alumno</h2>
              <p>Esta funcionalidad será implementada por tus compañeros en la vista Lista de Alumnos</p>
            </div>
          } 
        />

        {/* Acerca de */}
        <Route path="/acerca" element={<AcercaDe />} />

        {/* Mantener compatibilidad con la ruta anterior */}
        <Route path="/nuevo-alumno" element={<Navigate to="/formulario-alumno" />} />

        {/* Default */}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};