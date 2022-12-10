import "./Contact.css";

export default function Contact() {
  return (
    <div className="contactContainer">
      <span className="title">Nos puedes contactar: </span>
      <div>
          <i class="fa fa-phone"></i>
          <p> (+54) 341 000 000</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="#"> superchevere@gmail.com</a></p>
        </div>
    </div>
  );
}