import { Outlet } from "react-router-dom";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
