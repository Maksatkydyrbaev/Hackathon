import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Admin/Add/Add";
import Edit from "./components/Admin/Edit/Edit";
import AuthForm from "./components/Auth/AuthForm";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckOut/ChechOut";
import Home from "./components/HomePage/Home";

const PUBLIC_ROUTES = [
  { link: "/", element: <Home />, id: 1 },
  { link: "/admin", element: <Add />, id: 2 },
  { link: "/edit/:id", element: <Edit />, id: 3 },
  { link: "/cart", element: <Cart />, id: 4 },
  { link: "/checkout", element: <Checkout />, id: 5 },
  { link: "/auth", element: <AuthForm />, id: 6 },
];

const MyRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
