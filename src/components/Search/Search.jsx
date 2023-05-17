import "./Search.css"

const Search = () => {
  return (
    <section className="container__search">
      <input type="text" placeholder="Search your favourite course" className="input__search" />
      <button type="button" className="btn__search">Search</button>
    </section>
  );
};

export default Search;
