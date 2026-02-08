import { Outlet } from "react-router";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}