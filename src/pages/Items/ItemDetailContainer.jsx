import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/index";
import CartWidget from "../../components/CartWidget/CartWidget";
import ItemCounter from "../Items/ItemCounter";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const [productsData, setProductData] = useState(null);
  const { Products } = useParams();

  useEffect(() => {
    getProducts(Products).then((productsData) => {
      setProductData(productsData);
    });
  }, [Products]);

  return (
    <>
      {productsData ? (
        <div className="productContainer">
          <div className="productTitle">
            <h3>{productsData.title}</h3>
          </div>
          <div className="productDetail">{productsData.detail}</div>
          <div className="productLink">
            <button>
              {" "}
              u$s {productsData.repo.price} Agregar <CartWidget />
            </button>
          </div>
          <div className="counter">
            <ItemCounter />
          </div>
        </div>
      ) : (
        <p>Loading products.....</p>
      )}
    </>
  );
}
