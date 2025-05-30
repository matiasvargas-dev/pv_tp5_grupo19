import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";

const Modal = ({ alumno, isOpen, onClose, onEditarAlumno, alumnos }) => {
  const [formData, setFormData] = useState({
    id: "",
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

  useEffect(() => {
    if (alumno) {
      setFormData({
        id: alumno.id,
        lu: alumno.lu || "",
        nombre: alumno.nombre || "",
        apellido: alumno.apellido || "",
        curso: alumno.curso || "",
        email: alumno.email || "",
        domicilio: alumno.domicilio || "",
        telefono: alumno.telefono || "",
      });
      setErrores({});
    }
  }, [alumno, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errores[name]) {
      setErrores((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

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

    if (alumnos) {
      const luExistente = alumnos.find(
        (a) =>
          a.lu === formData.lu.trim().toUpperCase() && a.id !== formData.id,
      );
      if (luExistente) {
        nuevosErrores.lu = "Ya existe un alumno con esta LU";
      }
    }

    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = validarFormulario();

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setEnviando(true);

    try {
      const alumnoEditado = {
        ...formData,
        lu: formData.lu.trim().toUpperCase(),
        nombre: formData.nombre.trim(),
        apellido: formData.apellido.trim(),
        curso: formData.curso.trim(),
        email: formData.email.trim().toLowerCase(),
        domicilio: formData.domicilio.trim(),
        telefono: formData.telefono.trim(),
      };

      onEditarAlumno(alumnoEditado);
      onClose();
    } catch (error) {
      setErrores({ general: "Error al editar el alumno. Intente nuevamente." });
    } finally {
      setEnviando(false);
    }
  };

  const handleCancelar = () => {
    setErrores({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleCancelar} maxWidth="sm" fullWidth>
      <DialogTitle>Editar Alumno</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button
            type="button"
            onClick={handleCancelar}
            color="secondary"
            variant="outlined"
            disabled={enviando}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={enviando}
          >
            {enviando ? "Guardando..." : "Guardar Cambios"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default Modal;
