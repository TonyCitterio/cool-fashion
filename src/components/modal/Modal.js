import React from 'react';
import classes from "./Modal.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({ setModalOpen, message, setMessage }) => {
 
        return (
            <div className={classes.backdrop}>
                <div className={classes.box}>
                    <IoCloseCircleOutline
                    className={classes.icon}
                    onClick={() => {
                        setModalOpen(false);
                        setMessage("");
                    }} />
                    {message}
                </div>
            </div>
        );


    
};

export default Modal;