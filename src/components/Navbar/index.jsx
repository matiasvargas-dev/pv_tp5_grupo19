import { Link } from "react-router";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ImageLogo from "../ui/ImageLogo";
import "./style.css";

const NavBar = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <ImageLogo
          classname="logo"
          src={"/applogo.png"}
          alt={"logo"}
          title={"logo"}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/lista-alumnos" color="inherit">
          Lista de Alumnos
        </Button>
        <Button component={Link} to="/nuevo-alumno" color="inherit">
          Nuevo Alumno
        </Button>
        <Button component={Link} to="/acerca" color="inherit">
          Acerca de
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
