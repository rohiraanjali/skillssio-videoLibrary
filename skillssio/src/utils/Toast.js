import {Alert} from "react-bootstrap"
import React from "react"
import "./Toast.css"
const ToastMessage = ({variant="info", children}) => {
    return (
       <Alert variant={variant} className="alert-style">
           <strong>{children}</strong>
       </Alert>
    )
}

export default ToastMessage;