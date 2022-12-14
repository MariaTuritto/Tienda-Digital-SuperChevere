import "./Card.css";
import ItemCounter from "../../pages/Items/ItemCounter";

function Card(props) {
  return (
    <div className="ContenedorCard">
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt="  " />
      </div>
   <div className="card-detail">
        <h3>{props.title}</h3>
        <p>${props.price}</p>
        <span>{props.category}</span>
      </div>
      <ItemCounter />
    </div>
    </div>
  );
}

export default Card;