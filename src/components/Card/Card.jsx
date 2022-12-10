import "./Card.css";

function Card(props) {
  const { children } = props;

  return <div className="cardContainer">{children}</div>;
}

export default Card;