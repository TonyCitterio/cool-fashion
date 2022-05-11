import { Link } from "react-router-dom";
import newArrivals from "../pictures/new.jpg";
import classes from "./Home.module.css"

const Home = () => {
  return (
    <>
      <Link to="newArrivals">
        <img
          src={newArrivals}
          alt="New Arrivals"
          height={500}
          width={700}
        ></img>
      </Link>
      <img className={classes.img}
          src={newArrivals}
          alt="New Arrivals"
          height={500}
          width={700}
        ></img>
    </>
  );
};

export default Home;
