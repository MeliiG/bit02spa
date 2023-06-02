import  banner1  from "../css/img/banner1.png";
import  banner2  from "../css/img/banner2.png";
import  banner3  from "../css/img/banner3.png";
import '../css/PaginaInicio.css'
import {  } from "bootstrap/dist/css/bootstrap.min.css";
import {  } from "bootstrap/js/dist/carousel";
/* import banner1  from "../css/img/banner1.png";
import banner2  from "../css/img/banner2.png"; */



export const PaginaInicio = () => {
  return (
  <div>
    <br/>

   {/*  <div className="banner1">
      <img src={banner2}  alt="ok" />
    </div> */}
    <div className='contenidobanner' style={{marginTop:20, marginBottom:20}}>

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>

    </div>


    <div>
    <p className="p1">Diseñamos joyas a la medida de las necesidades de nuestros clientes. Nuestros técnicos especializados siempre están dispuestos a asesorarlos con la actitud cálida y amable que nos ha caracterizado desde 1980.</p>
    <br/><br/>
    <p><strong>Misión</strong>
    Hacer que los momentos más importantes de nuestros clientes se conviertan en recuerdos inolvidables a través de las mejores colecciones de joyería, argollas de matrimonio, anillos de compromiso y las marcas más reconocidas de relojes.
    <br/><br/>
    <strong>Visión</strong>
    Para el año 2025 ampliaremos nuestra presencia en el país con 30 joyerías en 15 ciudades, siendo reconocida como la joyeria que por excelencia acompaña a los colombianos en sus mejores momentos.
    </p><br/><br/>
    </div>

    {/* <div className="banner2">
      <img src={banner1}  alt="ok" />
    </div> */}
    <br/><br/>
    
    </div>
    )
};
