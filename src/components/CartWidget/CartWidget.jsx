import React from "react";
import "./CartWidget.css";
import {MdShoppingCart} from "react-icons/md"


function Cartwidget () {
    return (
      <div className="containerCart">
          <button type="button" className="btn btn-light iconCart" >
        
        <MdShoppingCart/>
        <span className="itemTotal">0</span>
          </button>
      </div>
    )
  }
  
  export default Cartwidget;