import { BrowserRouter, Routes, Route } from "react-router";
import { Navigate } from "react-router";

import NavBar from "./components/Navbar";
import Home from "./views/Home";
import AcercaDe from "./views/AcercaDe";
import ListaAlumnos from "./views/ListaAlumno";
import NuevoAlumno from "./views/NuevoAlumno";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Home */}
        <Route index path="/" element={<Home />} />

        {/* Lista Alumnos */}
        <Route path="/lista-alumnos" element={<ListaAlumnos />} />

        {/* Nuevo Alumno */}
        <Route path="/nuevo-alumno" element={<NuevoAlumno />} />

        {/* Acerca de */}
        <Route path="/acerca" element={<AcercaDe />} />

        {/* Default */}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};
