import React from "react";
import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SecondPage from "./components/pages/page2";
import Products from "./components/pages/products";
import AuthContext from "./hooks/AuthContext";
import useAuth from "./hooks/useAuth";

function App() {
  const { phone, setPhone } = useAuth();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SecondPage />,
      errorElement: <p>Error</p>,
    },
    {
      path: "/products",
      element: <Products />,
      errorElement: <p>Error</p>,
    },
  ]);
  return (
    <AuthContext.Provider value={{ phone, setPhone }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
