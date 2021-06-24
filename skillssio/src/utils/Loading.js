
import "./Loading.css";

function Loading() {
    return (
    <div className="lds-roller"
    style={{position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"}}>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default Loading;