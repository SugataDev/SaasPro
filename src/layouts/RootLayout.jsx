import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="font-inter text-third bg-white antialiased min-h-screen overflow-x-hidden w-full flex flex-col">
      <Navber />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
