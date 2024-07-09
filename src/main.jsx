import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Clientes from "./pages/Clientes/";
import Contratos from "./pages/Contratos/";
import Itens from "./pages/Itens/";
import Todos from "./pages/Todos/";

import ErrorPage from "./pages/Error/Error";

import "./main.css";

const router = createBrowserRouter([
/*
* Criação de uma instância de CreateBrowse Router que vai rotear todas as páginas
*/
  {
    path: "/",
    element: <Todos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/clientes",
    element: <Clientes />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contratos",
    element: <Contratos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/itens",
    element: <Itens />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
