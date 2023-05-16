import { RiPlayCircleFill } from "react-icons/ri";
import person from "../../assets/person-hero.svg"
import "./Hero.css"
import NavbarBtn from "../NavbarBtn/NavbarBtn";
const Hero = () => {
    return (
        <>
         <section className="header__hero">
          <section className="header__hero-text">
            <h1>
              <span>Studying</span> Online is now much easier
            </h1>
            <p>
              TOTC is an interesting platform that will teach you in more an
              interactive way
            </p>
            <section className="header__hero-btn">
              <NavbarBtn style={"join"} text={"Join for free"} />
              <section className="header__hero-btn-action">
                <section>
                  
                  <RiPlayCircleFill className="icon"/>
                </section>
                <section>
                  <p>Watch how it works</p>
                </section>
              </section>
            </section>
          </section>
          <section className="header__hero-img-person">
            <img src={person} alt="hero-img" />
          </section>
        </section>
            
        </>
    );
}

export default Hero;
