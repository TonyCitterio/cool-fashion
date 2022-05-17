import { Link } from "react-router-dom";
import Slider from "../content/Slider";
import newArrivals from "../pictures/new.jpg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={classes.content}>
        <Slider />
        <Link to="/">
          <img
            src={newArrivals}
            alt="New Arrivals"
            height={500}
            width={700}
          ></img>
        </Link>
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
