import { Button, Form , Col, Row} from "react-bootstrap";
import "./Auth.css"
import MainScreen from "./MainScreen";
import {Link,NavLink, useLocation, useNavigate} from "react-router-dom"
import React , {useState, useEffect}from "react";
import axios from "axios";
import {useAuth} from "../contexts/AuthContext"
import Loading from "../utils/Loading"
import ToastMessage from "../utils/Toast";
import Backdrop from "../utils/Backdrop/Backdrop";


const LoginForm = () => {
    const {dispatch} = useAuth();
    const path = useLocation().state
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    const formValidate = (state) => {
        let email ,password;

        if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
            email="Please enter a valid email !"
        }
        if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(password)) {
            password="Password should be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
        }
        console.log({email,password})
        if(!email && !password) {
            return true;
        }
    }
    const submitHandler = async(e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    "Content-type": "application/JSON"
                },
            };
            setLoading(true)
            const {data} = await  axios.post("http://localhost:5000/users/login", 
            {
                email, password
            }, config
            );

            console.log(data)
            localStorage.setItem("userInfo", JSON.stringify({login:true,data}))
            
            dispatch({type: "LOGIN", payload: data})
            navigate(path === null ? "/" : path.from)
            
            setLoading(false);

        } catch (error) {
            setError(error.response.data.message)
            setLoading(false)
        }

        console.log({email, password})
    }
    
return (
    <MainScreen title="Log in to continue">
        <div className="loginContainer" >
        {Error && <ToastMessage style={{backgroundColor: "red"}}variant="danger">{Error}</ToastMessage>}
        <br />
            <Form onSubmit={submitHandler}>
            {loading && <Loading />}
            <div className="input-div">
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label className="input-label">Email Address</Form.Label>
                    <Form.Control
                    className="login-inputs"
                    type="email"
                    value={email}
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword">
                <Form.Label className="input-label">Password</Form.Label>
                    <Form.Control
                    className="login-inputs"
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                <input 
                className="remember-checkbox-input"
                type="checkbox"
                />
                <span className="remember-span">Remember Me</span>
                </Form.Group>
                <Button variant="primary" className="submit-button" type="submit">
                LOG IN
                </Button>
                </div>
            </Form>

           <br />
           <br />
           <br />
           <Link className="signup-link" to="/register">Don't have any account? <u>SIGNUP</u></Link>
        </div>
    </MainScreen>
)                                           
}

export default LoginForm;