import { useEffect } from "react";
import { connect } from "react-redux";
import {fetchPicture} from "../../../Redux/Action/CardView"

const Picture=(props)=>{
    useEffect(()=>{
        props.fetchPicture(props.PostId)
    },[])
    const renderPicture=(data)=>{
        if(data!=null){
            console.log(data,"data")
            console.log(data[0],"data array")
            if(data.postId==props.PostId){
                return(
                    <div>
                        <img src={data[0].file_path} alt="picture"/>
                        <h1>{data[0].date}</h1>
                    </div>
                    )
                }
            }
    }
    return(
        <div>
            {renderPicture(props.PictureData)}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        PictureData:state.PictureReducer.PictureData
    }
}
export default connect(mapStateToProps,{fetchPicture})(Picture);