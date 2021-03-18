import {useEffect} from "react";
import { connect } from "react-redux";
import CardView from "./Common/CardView";
import {ArtistPost} from "../Redux/Action/CardView"
const HomePage=(props)=>{
    useEffect(()=>{
        props.ArtistPost();
    },[])    
    const renderPost=(Data)=>{
        if(Data){
            if(Data.data){
                return Data.data.map((val,idx)=>{
                    return(
                        <CardView Post={val} key={idx}/>
                    )
                })
            }
            else{
                console.log(Data.message)
            }
        }
    }
    return(
        <div className="d-flex  justify-content-center">
            <div className="d-flex flex-column">
                {renderPost(props.PostData)}
            </div>
        </div> 

    )
}
const mapStateToProps = (state) => {
	return {


		PostData:state.ArtistPost.PostData,

	};
};
export default connect(mapStateToProps,{ArtistPost})(HomePage);
 