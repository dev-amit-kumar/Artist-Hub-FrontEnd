import { useEffect } from "react";
import { connect } from "react-redux";
import {fetchComment} from "../../../Redux/Action/CardView"

const Comment=(props)=>{
    useEffect(()=>{
        props.fetchComment()
    },[])
    const renderComment=(data)=>{
        console.log(data)
        if(data){
            return data.map((val,idx)=>{
                if(props.PostId==val.id){
                return(
                    <div>
                        <p>{val.comment}</p>
                    </div>
                )
            }
            })
        }
    }
    return(
        <div>
            {renderComment(props.CommentData)}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        CommentData:state.CommentReducer.CommentData
    }
}
export default connect(mapStateToProps,{fetchComment})(Comment);