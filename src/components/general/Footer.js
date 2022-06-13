import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <h3>COOL FASHION STORE</h3>
        <div>
        <FaFacebookF className={classes.icons} />
        <FaTwitter className={classes.icons} />
        <FaLinkedinIn className={classes.icons} />
        </div>
      </div>
    </>
  );
};

export default Footer;
