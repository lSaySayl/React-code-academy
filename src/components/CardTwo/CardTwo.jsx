import ButtonCard from "../ButtonCard/ButtonCard";
import "./CardTwo.css"

// eslint-disable-next-line react/prop-types
const CardTwo = ({style,tittle,text}) => {
    return (
        <section className={style}>
        <h3>{tittle}</h3>
        <ButtonCard
        text={text}
        />

        </section>
    );
}

export default CardTwo;
