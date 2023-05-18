import CardCourse from "../../components/CardCourse/CardCourse";
import Footer from "../../components/Footer/Footer";
import HeroTwo from "../../components/HeroTwo/HeroTwo";
import Navbar from "../../components/Navbar/Navbar";
import courses from "../../data/courses.json";
import "./Courses.css";

const Courses = () => {
  return (
    <section>
      <header className="header__courses">
        <Navbar />
        <HeroTwo />
      </header>
      <main className="main__courses">
        {courses.map((course) => (
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
