import { createBrowserRouter } from "react-router";
import Home from "@/app/pages/Home";
import Team from "@/app/pages/Team";
import Cars from "@/app/pages/Cars";
import Events from "@/app/pages/Events";
import Contact from "@/app/pages/Contact";
import Layout from "@/app/components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "team", element: <Team /> },
      { path: "cars", element: <Cars /> },
      { path: "events", element: <Events /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);