import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/Home/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: 'login', 
            element: <Login></Login>
        }, 
        {
            path: 'about', 
            element: <About></About>
        }, 
        {
            path: 'signup', 
            element: <SignUp></SignUp>
        },
        {
          path: 'book/:id', 
          element: <PrivateRoute><BookService></BookService></PrivateRoute>, 
          loader: ({params}) => fetch(` https://car-doctor-server-khaki-one.vercel.app/Services/${params.id}`)
        },
        {
          path: 'bookings', 
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);


  export default router;