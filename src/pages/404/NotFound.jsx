import { Link, useRouteError } from "react-router-dom";
import "./NotFound.css"
const NotFound = () => {

    const error = useRouteError();


    return (
        <section className="container__error">
            <h1>404</h1>
            <p>Page not found</p>
            <p>{error.statusText || error.message}</p>
            <button><Link to="/">Go to Home</Link></button>    
        </section>
    );
}

export default NotFound;
