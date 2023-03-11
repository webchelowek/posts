import React from 'react';
import classes from "./MyModal.module.css";

const MyModal = ({children, active, setActive}) => {

    const cl = active ? [classes.MyModal, classes.Active].join(' ') : classes.MyModal;

    return (
        <div className={cl} onClick={() => {setActive(false)}}>
            <div className={classes.MyModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;