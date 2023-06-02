import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo  from "../css/img/logo.png";
import {  } from "../css/Navegacion.css";


// eslint-disable-next-line react/prop-types
export const Navegacion = ({ logueado, setLogueado }) => {
  let salida = null;
  const navigate = useNavigate();

  const manejarCerrarSesion = () => {
    localStorage.removeItem('token');
    setLogueado(false);
    navigate('/iniciar-sesion');
  };

  if (logueado) {
    salida = (
      <>
        <Link className="letra" to='/privado'>Privado</Link>
        <button  className="boton" onClick={manejarCerrarSesion}>Cerrar sesión</button>
      </>
    );
  } else {
    salida = (
      <>
        <Link className="letra" to='/iniciar-sesion'>Iniciar sesión</Link>
        <Link className="letra" to='/registro'>Registrarse</Link>
      </>
    );
  }
  /* C:\Users\Tecno\bit02spa\src\components\Navegacion.jsx */
  return (
    <div className='navegacion'>
      <nav>
        <logo>
        <img src= {logo} width="200" height="200"  alt="ok" />
        </logo>
        
        <Link className="letra" to='/'>Inicio</Link>
       {/*  <Link className="letra"to='/servicios'>Servicios</Link>
        <Link className="letra"to='/productos'>Productos</Link> */}
        <Link className="letra"to='/acerca-de'>Acerca de</Link>
        <Link className="letra"to='/contacto'>Contacto</Link>
      </nav>
      <nav>{salida}</nav>
    </div>
  );
};
