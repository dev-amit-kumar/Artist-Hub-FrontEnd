import HomePage from "./HomePage"
import {BrowserRouter,Route} from "react-router-dom";
import ArtistProfile from "./ProfilePage/ArtistProfile";
const Routing=()=>{
    return(
        <div>
            <BrowserRouter>
                <Route exact path="/" component={HomePage}/>
                <Route path="/artist" component={ArtistProfile}/>
            </BrowserRouter>
        </div>
    )
}
export default Routing;