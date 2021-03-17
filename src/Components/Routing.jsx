import HomePage from "./HomePage"
import {BrowserRouter,Route} from "react-router-dom";
import ArtistProfile from "./ProfilePage/ArtistProfile";
import AddPost from "./AddPost";
const Routing=()=>{
    return(
        <div>
            <BrowserRouter>
                <Route exact path="/" component={HomePage}/>
                <Route path="/artist" component={ArtistProfile}/>
                <Route path="/addpost" component={AddPost}/>
            </BrowserRouter>
        </div>
    )
}
export default Routing;