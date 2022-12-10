import {Routes , Route} from "react-router-dom";
import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound"
import ItemDetailContainer from "./pages/Items/ItemDetailContainer";





function  App() {
    return (
    <div className="App">
        <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route caseSensitive path="/AboutUs" element={<AboutUs />}>
       </Route>
        <Route path="/AboutUs/Home" element={<Home />} />
        <Route path="/Products" element={<ItemDetailContainer/>}/>
        <Route caseSensitive path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}/>  
        </Routes>
        </Layout>  
    </div>
    );
}

export default App;