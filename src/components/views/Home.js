import { Link } from "react-router-dom";
import newArrivals from "../pictures/new.jpg";

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
    </>
  );
};

export default Home;
