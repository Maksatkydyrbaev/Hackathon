import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";

const PUBLIC_ROUTES = [{ link: "/", element: <Home />, id: 1 }];

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
