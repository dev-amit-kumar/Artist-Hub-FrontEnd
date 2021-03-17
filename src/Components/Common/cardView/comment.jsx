import axios from "axios";
import { useEffect, useState } from "react";
const configHeader = {
    headers: {
      "Content-Type": "application/json",
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTBkMmMxMzg0OGRiMDAxNTI4N2Q0YyIsImlhdCI6MTYxNTkwOTU4NCwiZXhwIjoxNjE1OTk1OTg0fQ.xmJYG3N0Z7CA28bFb5zJkaMMnY3GHLEZ2h1P1ZzYyFY",
    },
  };
const Comment=(props)=>{
    const [update,setUpdate]= useState("")
    const [comment,setComment]=useState("")
    useEffect(()=>{
        axios.get(`https://artist-hub-api.herokuapp.com/comment/getComments/${props.ID}`,configHeader)
        .then(data=>renderComment(data))
    },[])        
    const renderComment=(data)=>{
        if(data.data){
            if(data.data.data){
                setComment(data.data.data[0].comment)
            }
            else{
                setComment(data.data.message)
            }
        }
        else{
            console.log(data)
        }
    }  
    const deleteComment=(e)=>{
        axios.get(`https://artist-hub-api.herokuapp.com/comment/deleteComment/${e.target.value}`)
        .then(res=>console.log(res))
    }
   
    const renderInput=(e)=>{
        setUpdate(e.target.value)
    }
    console.log("comment")
    return(
        <div>
            <p>{comment}</p>
            <input type="text" className="form-control" name="comment"/>
            <button type="submit">add</button>
            <div class="modal fade" id="ModalBox" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input onChange={renderInput} type="text" className="form-control"/>
                        </div>
                        <div className="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Comment;