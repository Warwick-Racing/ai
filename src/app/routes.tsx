import { createBrowserRouter } from "react-router-dom";
import Home from "@/app/pages/Home";
import Team from "@/app/pages/Team";
import Cars from "@/app/pages/Cars";
import Events from "@/app/pages/Events";
import Contact from "@/app/pages/Contact";
import Layout from "@/app/components/Layout";
import Blog from "@/app/pages/Blog";
import BlogPost from "@/app/pages/BlogPost";
import Gallery from "@/app/pages/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "team", element: <Team /> },
      { path: "gallery", element: <Gallery /> },
      { path: "cars", element: <Cars /> },
      { path: "events", element: <Events /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogPost /> },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});
