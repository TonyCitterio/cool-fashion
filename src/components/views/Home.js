import { Link } from "react-router-dom";
import SliderAlternative from "../content/SliderAlternative";
import newArrivals from "../pictures/new.jpg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={classes.content}>
        <SliderAlternative />
        <img
          className={classes.img}
          src={newArrivals}
          alt="New Arrivals"
          height={500}
          width={700}
        ></img>
      </div>
    </>
  );
};

export default Home;
