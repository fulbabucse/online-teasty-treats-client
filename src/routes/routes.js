import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Orders from "../components/Orders/Orders";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Products from "../components/Products/Products";
import Shop from "../components/Shop/Shop";
import Signup from "../components/Signup/Signup";
import UserProfile from "../components/UserProfile/UserProfile";
import Root from "../layouts/Root";

const productsData = () =>
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      { path: "shop", loader: productsData, element: <Shop></Shop> },
      { path: "orders", element: <Orders></Orders> },
      { path: "login", element: <Login></Login> },
      { path: "signup", element: <Signup></Signup> },
      { path: "profile", element: <UserProfile></UserProfile> },
      {
        path: "/product/:idMeal",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
          );
        },
        element: <ProductDetails></ProductDetails>,
      },
      { path: "about", element: <About></About> },
      { path: "contact", element: <Contact></Contact> },
      {
        path: "/category/:strCategory",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`
          );
        },
        element: <Products></Products>,
      },
    ],
  },
]);
