import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Card from "../../components/Card/Card";
import { getAllProducts } from "../../services/index";
import { isEmpty } from "../../utils/array";
import "./ItemListContainer.css";


export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((products) => setProducts(products));
       }, []);

  return (
    <div className="produtsListContainer" area="content">
      {isEmpty(products) ? (
        <span className="loadingText">Loading Products...</span>
      ) : (
        <div className="productsList">
          {products.map((product) => (
             <Card key={product.id} 
             title={product.title} 
             img = {product.img} 
             detail={product.detail}
             price ={product.price}>
       
      </Card>
         
        
     
             
          ))}
        </div>
      )}
      <div className="productsDetail">
        <Outlet/>
      </div>
    </div>
  );
}


