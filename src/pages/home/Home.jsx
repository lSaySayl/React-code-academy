import { RiTeamFill, RiFileListFill, RiCalendarTodoLine } from "react-icons/ri";
import CardOne from "../../components/CardOne/CardOne";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Oursucces from "../../components/Oursucces/Oursucces";
import ContainerText from "../../components/ContainerText/ContainerText";
import CardTwo from "../../components/CardTwo/CardTwo";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <section className="home">
      <header className="header">
        <Navbar />
        <Hero />
      </header>
      <main className="main">
        <section className="container">
          <Oursucces />
          <section className="container__info">
            <ContainerText
              tittleOne={"All-In-One "}
              tittleTwo={"Course Academy"}
              text={
                "AICA is a comprehensive online platform that brings together all the resources and tools required to create a thriving learning environment."
              }
            />

            <section className="container__all-cards">
              <CardOne
                icon={<RiFileListFill className="icon__one" />}
                tittle={"Programming Course Management"}
                text={
                  "Streamline financial and legal transactions for your programming courses with our software suite designed for academies."
                }
              />
              <CardOne
                icon={<RiCalendarTodoLine className="icon__two" />}
                tittle={"Easy Schedule & Code Tracking"}
                text={
                  "Simplify scheduling, attendance, and coding progress tracking for seamless programming course management."
                }
              />
              <CardOne
                icon={<RiTeamFill className="icon__three" />}
                tittle={"Integrated Student Management"}
                text={
                  "Streamline student management with automated communication, progress tracking, and personalized support for an enhanced learning experience."
                }
              />
            </section>
            <section className="container__what">
              <ContainerText
                tittleOne={"What is"}
                tittleTwo={"Code Academy?"}
                text={
                  "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place."
                }
              />
              <section className="container__what__imgs">
                <CardTwo
                  style={"container__card-instructors"}
                  tittle={"for instructors"}
                  text={"Start a class today"}
                />
                <CardTwo
                  style={"container__card-students"}
                  tittle={"for students"}
                  text={"Enter access code"}
                />
              </section>
            </section>
          </section>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default Home;
