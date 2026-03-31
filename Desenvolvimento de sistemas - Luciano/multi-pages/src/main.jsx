import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from "./pages/Home";
import { Main } from "./layouts/Main";
import { Sobre } from "./Pages/Sobre";
import { AuthProvider } from "./context/AuthContext";
import Login from "./Pages/Login";
import Blog from "./Pages/Blog";
import PostDetail from "./Pages/Blog/PostDetail";

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "sobre",
        element: <Sobre />,
      },

      {
        path: "blog",
        element: <Blog />,
      },

       {
        path: "post/:id",     // quando coloca esses ":" você informa que a rota é dinâmica
        element: <PostDetail />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />
  }
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/sobre",
  //     element: <Sobre />,
  //   },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <App /> */}
  </StrictMode>,
);
