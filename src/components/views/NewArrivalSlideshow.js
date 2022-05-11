import { Link } from "react-router-dom";
import classes from "./NewArrivalSlideshow.module.css"

const NewArrivalSlideshow = () => {
  return (
    <>
      <h1>Hallå</h1>
      <Link className={classes.link} to="/">Hem</Link>
    </>
  );
};

export default NewArrivalSlideshow;
