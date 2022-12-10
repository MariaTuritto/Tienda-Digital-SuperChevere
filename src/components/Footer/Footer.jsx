import "./Footer.css";


export default function Footer() {
    return (
      <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span>Desde El Caribe creamos este hermoso espacio...</span> Emprendimiento Familiar @superchevere.ar
        </p>
        <div className="icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>Tienda Digital</span> Rosario, Argentina</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+54) 341 000 000</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="#"> superchevere@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        
        <p className="menu">
          <a href="#"> Inicio</a> |
          <a href="#"> Nosotros</a> |
          <a href="#"> Productos</a> |
          <a href="#"> Contactanos</a>
        </p>
        <p className="name"> Create by Maria Turitto &copy; 2022</p>
      </div>
    </footer>
    );
  }