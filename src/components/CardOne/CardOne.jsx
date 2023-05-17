import "./CardOne.css";

// eslint-disable-next-line react/prop-types
const CardOne = ({ tittle, text, icon }) => {
  return (
    <section className="container__card">
      {icon}
      <section className="container__card-info">
        <h3>{tittle}</h3>
        <p>{text}</p>
      </section>
    </section>
  );
};

export default CardOne;
