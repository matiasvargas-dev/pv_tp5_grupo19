import { useState } from "react";
import { useNavigate } from "react-router";
import Title from "../../components/ui/Title";
import "./style.css";
import NuevoLayout from "./layout/NuevoLayout";

function NuevoAlumno({ agregarAlumno, alumnos }) {
  const navigate = useNavigate();

  // Estado inicial del formulario
  const [formData, setFormData] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
  });

  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error del campo si existía
    if (errores[name]) {
      setErrores((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validar formulario
  const validarFormulario = () => {
    const nuevosErrores = {};

    // Validaciones requeridas
    if (!formData.lu.trim()) {
      nuevosErrores.lu = "La LU es requerida";
    } else if (!/^[A-Z]{3}\d{5}$/.test(formData.lu.trim())) {
      nuevosErrores.lu = "La LU debe tener el formato ABC12345";
    }

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es requerido";
    }

    if (!formData.apellido.trim()) {
      nuevosErrores.apellido = "El apellido es requerido";
    }

    if (!formData.curso.trim()) {
      nuevosErrores.curso = "El curso es requerido";
    }

    if (!formData.email.trim()) {
      nuevosErrores.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nuevosErrores.email = "Email inválido";
    }

    // Validar que no existe otra LU igual
    if (alumnos) {
      const luExistente = alumnos.find(
        (a) => a.lu === formData.lu.trim().toUpperCase(),
      );
      if (luExistente) {
        nuevosErrores.lu = "Ya existe un alumno con esta LU";
      }
    }

    return nuevosErrores;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevosErrores = validarFormulario();

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setEnviando(true);

    try {
      // Preparar datos del alumno
      const nuevoAlumno = {
        id: Date.now(), // ID simple para el ejemplo
        lu: formData.lu.trim().toUpperCase(),
        nombre: formData.nombre.trim(),
        apellido: formData.apellido.trim(),
        curso: formData.curso.trim(),
        email: formData.email.trim().toLowerCase(),
        domicilio: formData.domicilio.trim(),
        telefono: formData.telefono.trim(),
      };

      // Agregar el nuevo alumno
      agregarAlumno(nuevoAlumno);

      // Limpiar formulario
      setFormData({
        lu: "",
        nombre: "",
        apellido: "",
        curso: "",
        email: "",
        domicilio: "",
        telefono: "",
      });

      // Mostrar mensaje de éxito (opcional)
      alert("¡Alumno creado exitosamente!");

      // Opcional: redirigir a la lista de alumnos
      // navigate("/lista-alumnos");
    } catch (error) {
      console.error("Error al crear alumno:", error);
      setErrores({ general: "Error al crear el alumno. Intente nuevamente." });
    } finally {
      setEnviando(false);
    }
  };

  // Limpiar formulario
  const handleLimpiar = () => {
    setFormData({
      lu: "",
      nombre: "",
      apellido: "",
      curso: "",
      email: "",
      domicilio: "",
      telefono: "",
    });
    setErrores({});
  };

  return (
    <NuevoLayout>
      <div className="form-container">
        <Title description="Crear Nuevo Alumno" />

        <form onSubmit={handleSubmit} className="alumno-form">
          {errores.general && (
            <div className="error-general">{errores.general}</div>
          )}

          <div className="form-grid">
            {/* LU */}
            <div className="form-group">
              <label htmlFor="lu">LU *</label>
              <input
                type="text"
                id="lu"
                name="lu"
                value={formData.lu}
                onChange={handleChange}
                className={errores.lu ? "error" : ""}
                placeholder="Ej: APU00999"
                maxLength="8"
              />
              {errores.lu && (
                <span className="error-message">{errores.lu}</span>
              )}
            </div>

            {/* Nombre */}
            <div className="form-group">
              <label htmlFor="nombre">Nombre *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={errores.nombre ? "error" : ""}
                placeholder="Ej: María Eugenia"
              />
              {errores.nombre && (
                <span className="error-message">{errores.nombre}</span>
              )}
            </div>

            {/* Apellido */}
            <div className="form-group">
              <label htmlFor="apellido">Apellido *</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                className={errores.apellido ? "error" : ""}
                placeholder="Ej: Díaz"
              />
              {errores.apellido && (
                <span className="error-message">{errores.apellido}</span>
              )}
            </div>

            {/* Curso */}
            <div className="form-group">
              <label htmlFor="curso">Curso *</label>
              <select
                id="curso"
                name="curso"
                value={formData.curso}
                onChange={handleChange}
                className={errores.curso ? "error" : ""}
              >
                <option value="">Seleccionar curso</option>
                <option value="Primero">Primero</option>
                <option value="Segundo">Segundo</option>
                <option value="Tercero">Tercero</option>
                <option value="Cuarto">Cuarto</option>
                <option value="Quinto">Quinto</option>
              </select>
              {errores.curso && (
                <span className="error-message">{errores.curso}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-group full-width">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errores.email ? "error" : ""}
                placeholder="Ej: mariadiaz@mail.com"
              />
              {errores.email && (
                <span className="error-message">{errores.email}</span>
              )}
            </div>

            {/* Domicilio */}
            <div className="form-group full-width">
              <label htmlFor="domicilio">Domicilio</label>
              <input
                type="text"
                id="domicilio"
                name="domicilio"
                value={formData.domicilio}
                onChange={handleChange}
                placeholder="Ej: Av. Congreso 125"
              />
            </div>

            {/* Teléfono */}
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ej: 3884895999"
              />
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={handleLimpiar}
              className="btn-secondary"
              disabled={enviando}
            >
              Limpiar
            </button>
            <button type="submit" className="btn-primary" disabled={enviando}>
              {enviando ? "Creando..." : "Crear Alumno"}
            </button>
          </div>
        </form>
      </div>
    </NuevoLayout>
  );
}

export default NuevoAlumno;
