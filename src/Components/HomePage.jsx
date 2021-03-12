import {useEffect} from "react";
import { connect } from "react-redux";
import CardView from "./Common/CardView";
import {ArtistPost} from "../Redux/Action/CardView"
const HomePage=(props)=>{
    useEffect(()=>{
        props.ArtistPost();
    },[])
    return(
        <div className="d-flex  justify-content-center">
            <div className="d-flex flex-column">
                {props.PostData && props.PostData.map((value, idx) => {
                    return <CardView data={value} key={idx}/>
                })}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
	return {
		PostData: state.ArtistPost.PostData,
	};
};
export default connect(mapStateToProps,{ArtistPost})(HomePage);
 