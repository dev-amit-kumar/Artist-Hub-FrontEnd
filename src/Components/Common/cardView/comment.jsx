import { useEffect } from "react";
import { connect } from "react-redux";
import {fetchComment} from "../../../Redux/Action/CardView"

const Comment=(props)=>{
    useEffect(()=>{
        props.fetchComment(props.PostId)
    },[])
    const renderComment=(data)=>{
        console.log(data)
        if(data){
            return data.map((val,idx)=>{
                if(props.PostId==val.id){
                return(
                    <div key={idx} className="d-flex flex-row justify-content-between">
                        <p>{`${val.user}-${val.comment}`}</p>
                        <p className="text-muted">{val.date}</p>
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