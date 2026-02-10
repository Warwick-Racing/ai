import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollToTopOnRouteChange />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
