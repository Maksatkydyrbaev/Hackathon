import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./components/Admin/Add/Add";
import Edit from "./components/Admin/Edit/Edit";
import Home from "./components/HomePage/Home";

const PUBLIC_ROUTES = [
  { link: "/", element: <Home />, id: 1 },
  { link: "/admin", element: <Add />, id: 2 },
  { link: "/edit/:id", element: <Edit />, id: 3 },
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
