import React from 'react';
import Backdrop from "../utils/Backdrop/Backdrop";
import "./Toast.css";

const Toast = ({show,message,color,background,className,error,onClick}) => {
return (
    <Backdrop show={show} onClick={onClick}>
        <div style={{color,background}} className={`toast1 ${className}`}>
        {error ? <i className="fas fa-window-close"></i> : <i className="fas fa-badge-check"></i>}&emsp;{message}
        </div>
    </Backdrop>
)
}

export default Toast;