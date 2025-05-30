import { Link } from "react-router";
import ImageLogo from "../ui/ImageLogo";
import "./style.css";

const NavBar = () => {
  return (
    <>
      <header className="container">
        <ImageLogo
          classname="logo"
          src={"/public/applogo.png"}
          alt={"logo"}
          title={"logo"}
        />
        <nav>
          <ul className="menu">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/lista-alumnos"}>Lista de Alumnos</Link>
            </li>
            <li>
              <Link to={"/nuevo-alumno"}>Nuevo Alumnos</Link>
            </li>
            <li>
              <Link to={"/acerca"}>Acerca de</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
