import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={classes.nav}>
        <h1>COOL FASHION STORE</h1>
        <div className={classes.navigation}>
          <Link className={classes.link} to="guy">KILLE</Link>
          <p>TJEJ</p>
          <p>UNISEX</p>
          <p>NYHETER</p>
          <p>VARUMÄRKEN</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
