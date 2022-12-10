import {Link, Outlet} from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs(){
    return(
        <div className="aboutUsContainer" area="content">
            <div className="title">Sobre Nosotros</div>
            <div className="links">
                <Link className="linksAbout" to="Home">Volver al Inicio</Link>
            </div>
            <Outlet/>
        </div>
    );
}