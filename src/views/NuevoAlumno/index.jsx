import { useState } from "react";
import { useNavigate } from "react-router";
import Title from "../../components/ui/Title";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";
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
      <Box className="form-container">
        <Title description="Crear Nuevo Alumno" />

        <Box component="form" onSubmit={handleSubmit} className="alumno-form">
          {errores.general && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errores.general}
            </Alert>
          )}

          <TextField
            label="LU *"
            name="lu"
            value={formData.lu}
            onChange={handleChange}
            error={!!errores.lu}
            helperText={errores.lu}
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 8 }}
          />
          <TextField
            label="Nombre *"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            error={!!errores.nombre}
            helperText={errores.nombre}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Apellido *"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            error={!!errores.apellido}
            helperText={errores.apellido}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Curso *"
            name="curso"
            value={formData.curso}
            onChange={handleChange}
            error={!!errores.curso}
            helperText={errores.curso}
            fullWidth
            margin="normal"
          >
            <MenuItem value="">Seleccionar curso</MenuItem>
            <MenuItem value="Primero">Primero</MenuItem>
            <MenuItem value="Segundo">Segundo</MenuItem>
            <MenuItem value="Tercero">Tercero</MenuItem>
            <MenuItem value="Cuarto">Cuarto</MenuItem>
            <MenuItem value="Quinto">Quinto</MenuItem>
          </TextField>
          <TextField
            label="Email *"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errores.email}
            helperText={errores.email}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Domicilio"
            name="domicilio"
            value={formData.domicilio}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 2 }}>
            <Button
              type="button"
              onClick={handleLimpiar}
              variant="outlined"
              color="secondary"
              disabled={enviando}
            >
              Limpiar
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={enviando}
            >
              {enviando ? "Creando..." : "Crear Alumno"}
            </Button>
          </Box>
        </Box>
      </Box>
    </NuevoLayout>
  );
}

export default NuevoAlumno;
