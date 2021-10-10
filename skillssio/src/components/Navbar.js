import { NavLink , Link , Outlet, useNavigate} from "react-router-dom"
import React, {useState} from "react"
import "./Navbar.css";
import searchIcon from "./search.svg";
import Backdrop from "../utils/Backdrop/Backdrop"
import {useAuth} from "../contexts/AuthContext"
import Loading from "../utils/Loading"

const Navbar = () => {

    const navigate = useNavigate();
    const {isUserLoggedIn, signout} = useAuth();
    const[showLogin, setShowLogin] = useState(false);
    const [loading, setLoading] = useState(false);

return (
    <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <ul className="left">
                    <NavLink to="/search">
                    <form action="search-container">
                            <input type="text" id="search-bar" placeholder="Want help???" />
                            <a href="#"><img className="search-icon" src={searchIcon}/></a>
                           
                        </form>
                        </NavLink>
                    </ul>
                       
                    <ul className="right">
                        <li>
                        {!isUserLoggedIn ? <div onClick={() => {
                            setShowLogin(true)
                            navigate("/login")
                            }} className="user-avatar">
                       <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                            </div> : 
                            <button className="sigout-btn" onClick={() => signout(setLoading)}>
                             <i className="fa fa-sign-out"></i>
                            </button>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
    <Backdrop show={showLogin}>
    <button className="loginmodal__dismiss__btn" onClick={() => setShowLogin(false)}><i className="fa fa-times"></i></button>
    <Outlet />
    </Backdrop >

    <Backdrop show={loading}>
    <Loading show={loading}/>
    <singout />
    </Backdrop >
        </div>
)
}


export default Navbar;