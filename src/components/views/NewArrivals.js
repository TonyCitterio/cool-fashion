import { Link } from "react-router-dom";
import classes from "./NewArrivals.module.css"

const NewArrivals = () => {
  return (
    <>
      <h1>Hallå</h1>
      <Link className={classes.link} to="/">Hem</Link>
    </>
  );
};

export default NewArrivals;
