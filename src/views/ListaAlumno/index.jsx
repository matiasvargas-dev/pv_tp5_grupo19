import { useState } from "react";
import ListaLayout from "./layout/ListaLayout";
import AlumnoCard from "./components/AlumnoCard";
import Title from "../../components/ui/Title";
import Modal from "../../components/Modal";

const ListaAlumnos = ({ alumnos, eliminarAlumno, editarAlumno }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [alumnoEditar, setAlumnoEditar] = useState(null);

  const handleEditarClick = (alumno) => {
    setAlumnoEditar(alumno);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setAlumnoEditar(null);
  };

  return (
    <>
      <ListaLayout>
        <Title description={"Lista de Alumnos"} />
        {alumnos.length === 0 ? (
          <p>No hay alumnos registrados.</p>
        ) : (
          alumnos.map((alumno) => (
            <AlumnoCard
              key={alumno.id}
              alumno={alumno}
              onDelete={eliminarAlumno}
              onEditar={() => handleEditarClick(alumno)}
            />
          ))
        )}
      </ListaLayout>
      <Modal
        alumno={alumnoEditar}
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onEditarAlumno={editarAlumno}
        alumnos={alumnos}
      />
    </>
  );
};

export default ListaAlumnos;
