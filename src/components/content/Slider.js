import { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import classes from "./Slider.module.css";

const Slider = (props) => {
  const [current, setCurrent] = useState(0);
  const pictures = props.pictures;
  const length = pictures.length;

  const nextPicture = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevPicture = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
      <div className={classes.pictureBox}>
        <HiChevronDoubleLeft className={classes.rightArrow} onClick={prevPicture} />
        {pictures.map((picture, index) => {return <div key={index}>{index === current && <div>{picture}</div>}</div>;})}
        <HiChevronDoubleRight className={classes.leftArrow} onClick={nextPicture} />
      </div>
  );
};

export default Slider;
