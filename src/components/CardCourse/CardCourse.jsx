import { RiTimeLine, RiCodepenLine/* RiUserHeartLine */ } from "react-icons/ri";
import person from "../../assets/personcard.svg"

import "./CardCourse.css";

// eslint-disable-next-line react/prop-types
const CardCourse = ({image,time, title, description, instructor, price}) => {
  return (
    <section className="card__container">
      <img
        className="card__image"
        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&"
      />
      <section className="card__container-upper">
        <section className="card__container-upper-internal">
          <RiCodepenLine className="icon" />
          <p>Programming</p>
        </section>
        <section className="card__container-upper-internal">
          <RiTimeLine className="icon" />
          <p>{time}</p>
        </section>
      </section>
      <section className="card__container-middle">
        <h1>{title}</h1>
        <h4>{description}</h4>
      </section>
      <section className="card__container-lower">
        <section className="card__container-lower-internal">
          {/* <RiUserHeartLine className="icon" /> */}
          <img src={person}/>
          <span>{instructor}</span>
        </section>
        <h4>$ {price} USD</h4>
      </section>
    </section>
  );
};

export default CardCourse;


