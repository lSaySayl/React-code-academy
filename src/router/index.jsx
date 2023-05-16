import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Courses from "../pages/courses/Courses";
import NotFound from "../pages/404/NotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement: <NotFound/>
  },
  {
    path: "/courses",
    element: <Courses/>,
    errorElement: <NotFound/>

  }
]);
