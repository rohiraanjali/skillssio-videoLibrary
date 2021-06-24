import "./Backdrop.css";

const Backdrop = ({show,children,onClick}) => {
    return show ? (
        <div className="backdrop" onClick={onClick}>
            {children}
        </div>
    ) : "";
};

export default Backdrop;
