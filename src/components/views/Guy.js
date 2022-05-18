import { Link } from "react-router-dom";
import classes from "./Guy.module.css";
import tshirt from "../pictures/guys/tshirt.jpg";
import jeans1 from "../pictures/guys/jeans1.jpg";
import jeans2 from "../pictures/guys/jeans2.jpg";
import guy from "../pictures/guys/guy.jpg";
import guy2 from "../pictures/guys/guy2.jpg";
import sweatsuit from "../pictures/guys/sweatsuit.jpg";


const Guy = () => {
    return (
        <>
        <div className={classes.content}>
            <Link className={classes.link} to="/">Tillbaka</Link>
            <h1 className={classes.category}>Guys wear</h1>

            <section className={classes.guysWear}>
                
                <div className={classes.prod}>
                    <span>T-Shirt Tie Die</span>
                    <br />
                    <img 
                        className={classes.img}
                        src={tshirt}
                        alt="T-Shirt Tie Die"
                        height={400}
                        width={"auto"}
                    ></img>
                </div>

                <div className={classes.prod}>
                    <span>Sweat Suit</span>
                    <br />
                    <img 
                        className={classes.img}
                        src={sweatsuit}
                        alt="Sweat Suit"
                        height={400}
                        width={"auto"}
                    ></img>
                </div>

                <div className={classes.prod}>
                    <span>Leather Jacket</span>
                    <br />
                    <img 
                        className={classes.img}
                        src={guy}
                        alt="Leather Jacket"
                        height={400}
                        width={"auto"}
                    ></img>
                </div>

                <div className={classes.prod}>
                    <span>Cool Jacket</span>
                    <br />
                    <img 
                        className={classes.img}
                        src={guy2}
                        alt="Cool Jacket"
                        height={400}
                        width={"auto"}
                    ></img>
                </div>

                <div className={classes.prod}>
                    <span>Jeans 1</span>
                    <br />
                    <img 
                        className={classes.img}
                        src={jeans1}
                        alt="Jeans 1"
                        height={400}
                        width={"auto"}
                    ></img>
                </div>

                <div className={classes.prod}>
                    <span>Jeans 2</span>
                    <br />
                    <img 
                        className={classes.img}
                        src={jeans2}
                        alt="Jeans 2"
                        height={400}
                        width={"auto"}
                    ></img>
                </div>
            </section>
        </div>

        
        </>
    );
};

export default Guy;