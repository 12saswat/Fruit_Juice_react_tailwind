import React from "react";
import LandingPages from "./Pages/LandingPages";
import { AuthProvider } from "./context/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ProductPage from "./Pages/Products/ProductsPage";
import FruitDetails from "./Pages/Products/FruitDetails";
import RegisterForm from "./Pages/RegisterForm";
import JuiceDetails from "./Pages/Products/JuiceDetails";
import CartProvider from "./context/CartContext";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPages />,
    },
    {
      path: "/aboutUs",
      element: <AboutUs />,
    },
    {
      path: "/products",
      element: <ProductPage />,
    },
    {
      path: "/fruitdetails/:id",
      element: <FruitDetails />,
    },
    {
      path: "/register",
      element: <RegisterForm />,
    },
    {
      path: "/juiceDetail",
      element: <JuiceDetails />,
    },
  ]);
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
