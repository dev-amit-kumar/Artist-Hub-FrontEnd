import HomePage from "./HomePage";
import SignupForm from "./auth/RegisterUser";
import LoginForm from "./auth/LoginUser";
import {BrowserRouter,Route} from "react-router-dom"
const Routing=()=>{
    return(
        <div>
            <BrowserRouter>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/auth/register" component={SignupForm}/>
                <Route path="/auth/login" component={LoginForm}/>
            </BrowserRouter>
        </div>
    )
}
export default Routing;