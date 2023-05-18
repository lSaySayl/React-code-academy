import { useState } from "react";
import CardCourse from "../../components/CardCourse/CardCourse";
import Footer from "../../components/Footer/Footer";
import HeroTwo from "../../components/HeroTwo/HeroTwo";
import Navbar from "../../components/Navbar/Navbar";
import courses from "../../data/courses.json";
import "./Courses.css";

const Courses = () => {
  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  let results = [];
  if (!search) {
    results = courses;
  } else {
    results = courses.filter((dato) =>
      dato.course_name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  return (
    <section>
      <header className="header__courses">
        <Navbar />
        <HeroTwo />
      </header>
      <main className="main__courses">
        <section className="container__search">
          <input
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Search your favourite course"
            className="input__search"
          />
          <button type="button" className="btn__search">
            Search
          </button>
        </section>
        {results.map((course) => (
          <CardCourse
            key={course.id}
            image={course.image}
            time={course.duration}
            title={course.course_name}
            description={course.description}
            instructor={course.instructor}
            price={course.price}
          />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default Courses;
