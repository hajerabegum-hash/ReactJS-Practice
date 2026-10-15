import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import Body from "./src/components/Body";
import { Footer } from "./src/components/Footer";
import { AppLayout } from "./src/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import ErrorPage from "./src/components/ErrorPage";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./src/components/Grocery.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Grocery Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
