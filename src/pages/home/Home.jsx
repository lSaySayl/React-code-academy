import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <section className="home">
      <header className="header">
        <Navbar />
        <Hero/>
      </header>
      <main className="main">

      </main>
    </section>
  );
};

export default Home;
