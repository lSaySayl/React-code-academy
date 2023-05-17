import "./ContainerText.css"
// eslint-disable-next-line react/prop-types
const ContainerText = ({tittleOne,tittleTwo,text}) => {
  return (
    <section className="container__all-text">
      <h2>
    {tittleOne} <span>{tittleTwo}</span>
      </h2>
      <p>
      {text}
       
      </p>
    </section>
  );
};

export default ContainerText;
