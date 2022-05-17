import { Link } from "react-router-dom";
import classes from "./Guy.module.css";

const Guy = () => {
    return (
        <>
        <div className={classes.content}>
        <h1>Hallå</h1>
         <Link className={classes.link} to="/">Tillbaka</Link>
        </div>
        </>
    );
};

export default Guy;