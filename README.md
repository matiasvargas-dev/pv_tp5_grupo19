# PV TP5 Grupo 19 - Gestión de Alumnos

## Descripción
Aplicación web desarrollada en React para la gestión de alumnos. Permite listar, crear, editar y eliminar alumnos, mostrando detalles individuales y utilizando modales para edición. Incluye navegación, estilos modernos con Material UI y CSS, y buenas prácticas de estructura y accesibilidad.

## Características
- Listado de alumnos con tarjetas (cards) y acciones (ver, editar, eliminar)
- Vista de detalle de alumno con información completa y botón para editar
- Modal reutilizable para edición de alumnos
- Navbar y estructura modular de componentes
- Estilos personalizados y uso de Material UI (MUI)
- Formato de fecha y hora local (Argentina)
- Accesibilidad y responsividad

## Estructura del proyecto
```
pv_tp5_grupo19/
├── README.md
├── package.json
├── vite.config.js
├── index.html
├── biome.json
├── public/
│   └── applogo.png
└── src/
    ├── App.jsx
    ├── AppRouter.jsx
    ├── main.jsx
    ├── App.css
    ├── index.css
    ├── components/
    │   ├── Navbar/
    │   │   ├── index.jsx
    │   │   └── style.css
    │   ├── Modal/
    │   │   ├── index.jsx
    │   │   └── style.css
    │   └── ui/
    │       ├── ImageLogo/
    │       │   ├── index.jsx
    │       │   └── style.css
    │       └── Title/
    │           ├── index.jsx
    │           └── style.css
    ├── data/
    │   └── alumnos.js
    └── views/
        ├── Home/
        │   ├── index.jsx
        │   ├── style.css
        │   ├── component/
        │   │   ├── Presentation.jsx
        │   │   └── Presentation.css
        │   └── Layout/
        │       └── HomeLayout.jsx
        ├── ListaAlumno/
        │   ├── AlumnoDetalle.jsx
        │   ├── index.jsx
        │   ├── style.css
        │   ├── components/
        │   │   └── AlumnoCard.jsx
        │   └── layout/
        │       └── ListaLayout.jsx
        ├── NuevoAlumno/
        │   ├── index.jsx
        │   ├── style.css
        │   └── layout/
        │       ├── NuevoLayout.jsx
        │       └── style.css
        └── AcercaDe/
            ├── index.jsx
            ├── style.css
            └── layout/
                └── AboutLayout.jsx
                
```

## Instalación y uso
1. **Clonar el repositorio:**
   ```
   git clone <url-del-repo>
   cd pv_tp5_grupo19
   ```
2. **Instalar dependencias:**
   ```
   npm install
   ```
3. **Iniciar la app:**
   ```
   npm run dev
   ```
   La app estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

## Dependencias principales
- React
- React Router
- Material UI (`@mui/material`, `@mui/icons-material`)
- Vite

## Créditos
- Grupo 19 — PV 2025 — UNJu

## INTEGRANTES

- BRISA ANAHÍ BARRO [GitHub](https://github.com/BarroBrisa)
- DARIO ABEL MARTINEZ [GitHub](https://github.com/martinezcabj12)
- GIANFRANCO PEDRAZZANI [GitHub](https://github.com/GianPedr)
- MATÍAS EMANUEL VARGAS [GitHub](https://github.com/matiasvargas-dev)

---

> Para dudas o mejoras, contacta al equipo o revisa los comentarios en el código.