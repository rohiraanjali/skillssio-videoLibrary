import {useAuth} from "../contexts/AuthContext";
import {Route,Navigate} from "react-router-dom";


const PrivateRoute = ({path,...props}) => {
    const {isUserLoggedIn} = useAuth();

    return isUserLoggedIn ? (
        <Route path={path} {...props}/>
    ) : (
        <Navigate state={{from:path}} replace to="/login"  />
    )
}

export default PrivateRoute;