import { useEffect } from "react";
import { connect } from "react-redux";
import {fetchLike} from "../../../Redux/Action/CardView"

const Like=(props)=>{
    useEffect(()=>{
        props.fetchLike(props.PostId,"mukul")
    },[])
    const renderLike=(data)=>{
        if(data){
            if(data[0]){
            console.log(data[0].userId,"like")
                return(
                    <button  className="mr-2  btn btn-light"><i className="bi bi-heart-fill"></i>
                    </button>
                )
            }
            else{
                return(
                    <button  className="mr-2  btn btn-light"><i className="bi bi-heart"></i>
                    </button>
                )
            }
        }
    }
    return(
        <div>
            {renderLike(props.LikeData)}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        LikeData:state.LikeReducer.LikeData
    }
}
export default connect(mapStateToProps,{fetchLike})(Like);