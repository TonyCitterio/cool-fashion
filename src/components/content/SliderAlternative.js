import { useState } from "react"
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { pictures } from "./SliderAlternativeData";
import classes from "./SliderAlternative.module.css"

const SliderAlternative = () => {
    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const nextPicture = () => {
        setCurrent(current === length - 1 ? 0 : current +1);
    };

    const prevPicture = () => {
        setCurrent(current === 0 ? length - 1 : current -1);
    };

    return (
        <>
        <div className={classes.pictureBox}>
            <IoArrowBackOutline className={classes.rightArrow} onClick={prevPicture} />
            {pictures.map((picture, index) => {
                return <div key={index}>{index === current && <div>{picture}</div>}</div>;
            })};
            <IoArrowForwardOutline className={classes.leftArrow} onClick={nextPicture} />
        </div>
        </>
    );
};

export default SliderAlternative;