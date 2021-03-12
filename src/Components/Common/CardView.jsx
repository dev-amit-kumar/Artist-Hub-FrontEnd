import { useState } from "react";
import Comment from "../Common/cardView/comment";
import Like from "./cardView/like";
const CardView = (props)=>{
    const [commentId,setCommentId]=useState("2")
    const setComment=(e)=>{
        console.log(e.target.value,e.target.id)
    }
    const renderComment=(data)=>{
        if (commentId==data){
            console.log("inside data")
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
                <img className="card-img-top" src={props.data.picture} alt="Card image cap"/>
            </div>
            <div className="card-footer d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                    <Like PostId={props.data.id}/>
                    <button onClick={setComment} id={props.data.id} value="true" className="mr-2 btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                        </svg></button>
                    <button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>{props.data.rating}</button>
                </div>
                <div className="d-flex flex-row">
                    <button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
                        <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                        </svg></button>
                    <button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                         <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                        </svg></button>
                </div>
            </div>
            <div>{renderComment(props.data.id)}
                </div>
            </div>
        </div>
    )
}
export default CardView;