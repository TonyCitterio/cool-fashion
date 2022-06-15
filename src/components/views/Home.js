import { Link } from "react-router-dom";
import SliderAlternative from "../content/SliderAlternative";
import newArrivals from "../pictures/new.jpg";
import classes from "./Home.module.css";
import Modal from "../form/modalForm";
import { useState } from "react";

const Home = () => {

  const [open, setOpen] = useState(false);

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

        <button className={classes.btnMovies} onClick={() => setOpen(true)}>
              Kontakta oss
        </button>
        <Modal 
        open={open} 
        onClose={() => setOpen(false)} 
        />
      </div>
    </>
  );
};

export default Home;
