import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import {PAGES} from "../../utils/main-pages";

export default function Layout(props){
    const {children} = props;

    return(
        <div className="layoutContainer">
            <NavBar pages = {PAGES} area= "Navbar" />
            {children}

            <Footer area= "Footer" />

        </div>
    );

}