import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Loading from '../utils/Loading';
import ToastMessage from '../utils/Toast';
import MainScreen from "./MainScreen"

import axios from 'axios';
import { Form , Button} from 'react-bootstrap';
import LoginForm from './LoginForm';

const RegistrationForm = () => {
   useEffect(() => {
    window.scroll({ behavior:'smooth',top:0 });
   },[])

    const [state,setState] = useState({email:"",password:"",name:"",confirmPassword:""});
    const [errors,setErrors] = useState({email:"",password:"",name:"", confirmPassword:""});
    const [loading,setLoading] = useState(false);
    const [toast,setToast] = useState(false);

    const handleChange = (e) => {
    const {value,name} = e.target;
    setState( state => ({...state,[name]:value}) )
    }

    const formValidate = (state) => {
    let name,email,password,confirmPassword;

    if(state.name === ""){
    name = "Please fill this field"
    }

       if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(state.email)){
         email="Enter a valid email address."
       }

       if(!/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/.test(state.password)){
        password="min length will be 8 with 1 lowercase and 1 letter"
       }

       if(state.password !== state.confirmPassword) {
        confirmPassword="Passwords donot match"
       }

       setErrors({name,email,password,confirmPassword})

       if(!name && !email && !password && !confirmPassword){
         return true;
       }
    }

    const handleSubmit = async(e) => {
       e.preventDefault();
       if(formValidate(state)){
         console.log(state)
       }
        try {
            setLoading(true)
            const {data,status} = await axios.post("http://localhost:5000/users/signup",state);

            if(status === 201){
              setToast(data.message);
              setTimeout( () => {
                setToast("");
              },2000) 

              setState({name:"",email:"",password:"", confirmPassword: ""})
            }

            setLoading(false)
          } catch (error) {
            setLoading(false)
            console.log(error.message)
            // const { status,data } = error.response;

            //  if(status === 500){
            //  setErrors(state => ({...state,email:data.message}) )
            //  }
          }
       }
    

    return (
      <MainScreen title="Signup to continue">
      <div className="loginContainer">
      {toast && <ToastMessage style={{backgroundColor: "red"}}variant="danger">{toast}</ToastMessage>}
      {loading && <Loading />}
      <form onSubmit={handleSubmit}>
      
      <div className="input-div">
      <Form.Group controlId="formBasicName">
      <Form.Label className="input-label">Full Name</Form.Label>
                    <Form.Control
                    className="login-inputs"
                    type="name"
                    name="name"
                    value={state.name}
                    placeholder="Enter Your Name"
                    onChange={handleChange}
                    />
                    <span className="invalid-feedback">{errors.name}</span>
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicEmail">
                <Form.Label className="input-label">Email Address</Form.Label>
                    <Form.Control
                    className="login-inputs"
                    type="email"
                    name="email"
                    value={state.email}
                    placeholder="Enter Email"
                    onChange={handleChange}
                    />
                    <span className="invalid-feedback">{errors.email}</span>
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword">
                <Form.Label className="input-label">Password</Form.Label>
                    <Form.Control
                    className="login-inputs"
                    type="password"
                    name="password"
                    value={state.password}
                    placeholder="Enter Password"
                    onChange={handleChange}
                    />
                    <span className="invalid-feedback">{errors.password}</span>
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label className="input-label">Confirm Password</Form.Label>
                    <Form.Control
                    className="login-inputs"
                    type="password"
                    name="confirmPassword"
                    value={state.confirmPassword}
                    placeholder="Retype your password"
                    onChange={handleChange}
                    />
                <span className="invalid-feedback">{errors.confirmPassword}</span>
                </Form.Group>
                <Button variant="primary" className="submit-button" type="submit">
                SIGN UP
                </Button>
                </div>
      </form>
    
      <br/>
      <br />
      <br />
      <Link className="signup-link" to="/login">Already have an account? &nbsp; <u>LOGIN</u></Link>
    </div>
    </MainScreen>
    );
};

export default RegistrationForm;