import axios from "axios";
import {} from "../../../Redux/Action/CardView"
const configHeader = {
	headers: {
		'Content-Type': 'application/json',
		'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTBkMmMxMzg0OGRiMDAxNTI4N2Q0YyIsImlhdCI6MTYxNTkwOTU4NCwiZXhwIjoxNjE1OTk1OTg0fQ.xmJYG3N0Z7CA28bFb5zJkaMMnY3GHLEZ2h1P1ZzYyFY",
	},
};
const Like=(props)=>{
  
    const likeStatus=(e)=>{
        if(e.target.value==="liked"){
            axios.get(`https://artist-hub-api.herokuapp.com/like/unLike/${props.PostId}`,configHeader)
            .then((res)=>console.log(res,"ress unlike"))
        }
        else{
            axios.get(`https://artist-hub-api.herokuapp.com/like/addLike/${props.PostId}`,configHeader)
            .then((res)=>console.log(res,"ress like"))
        }
    }
    const renderLike=(data)=>{
        if(data){
            if(data.data){
                return(
                    <button onClick={likeStatus} value={"liked"}  className="mr-2  btn btn-light"><i className="bi bi-heart-fill"></i>
                    </button>
                )
            }
            else{
                return(
                    <button onClick={likeStatus} value={"unliked"}  className="mr-2  btn btn-light"><i className="bi bi-heart"></i>
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

export default Like;