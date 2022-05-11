import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={classes.nav}>
        <h1>Cool Fashion</h1>
      </nav>
    </>
  );
};

export default Navbar;
