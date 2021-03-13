import { useState } from "react";
import Comment from "../Common/cardView/comment";
import Like from "./cardView/like";
import Picture from "./cardView/Picture";
const CardView = (props)=>{
    const [commentId,setCommentId]=useState()
    const setComment=(event)=>{
        setCommentId(event.target.id)
    }
    const renderComment=(data)=>{
        if (commentId==data){
            return(
                <Comment PostId={props.data.id}/>
            )
        }
    }
    return(
        <div>
            <div className="card" style={{"width": "38rem"}}>
                <div className="card-header d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row">
                        <h5 className="mr-4">{props.data.name}</h5>
                        <h5 className="mr-1">{props.data.location}</h5>
                        <h6>{props.data.occasion}</h6>
                    </div>
                    <select className="btn btn-light">
                        <option>setting</option>
                        <option>edit</option>
                        <option>delete</option>
                    </select>
                </div>
            <div className="card-body">
                <Picture PostId={props.data.id}/>
            </div>
            <div className="card-footer d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                    <Like PostId={props.data.id} user={props.data.name}/>
                    <button onClick={setComment} id={props.data.id} className="mr-2 btn btn-light"><i class="bi bi-chat"></i></button>
                    <button className="btn btn-light"><i class="bi bi-star-fill"></i>{props.data.rating}</button>
                </div>
                <div className="d-flex flex-row">
                    <button className="btn btn-light"><i class="bi bi-save"></i></button>
                    <button className="btn btn-light"><i class="bi bi-share"></i></button>
                </div>
            </div>
            <div>{renderComment(props.data.id)}
                </div>
            </div>
        </div>
    )
}
export default CardView;