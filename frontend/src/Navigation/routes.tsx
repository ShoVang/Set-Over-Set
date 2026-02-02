import React from "react";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";

export interface RouteConfig {
  path: string;
  element: React.ReactElement;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

