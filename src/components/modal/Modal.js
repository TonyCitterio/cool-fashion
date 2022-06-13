import React from 'react';
import classes from "./Modal.module.css";
import { HiOutlineXCircle } from "react-icons/hi";

const Modal = ({ setModalOpen, message, setMessage }) => {
 
        return (
            <div className={classes.backdrop}>
                <div className={classes.box}>
                    <HiOutlineXCircle
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