import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {fetchAllData} from "../../Redux/Action/CardView"
import Comment from "./cardView/comment";
import Like from "./cardView/like";
import Picture from "./cardView/Picture";
import TopContainer from "./cardView/TopContainer";
const CardView = (props)=>{
    useEffect(()=>{
        props.fetchAllData(props.Post._id)
    },[])
    const Commentfunc=()=>{
        console.log("inside")
        return(
            <div><Comment ID={props.Post._id}/></div>
        )

    }
    return(
        <div>
            <div className="card" style={{"width": "38rem"}}>
                <div className="card-header d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row">

                    </div>
                    <select className="btn btn-light">
                        <option>setting</option>
                        <option>edit</option>
                        <option>delete</option>
                    </select>
                </div>
            <div className="card-body">
                <div>
                <select className="btn btn-light">
                        <option>setting</option>
                        <option>edit</option>
                        <option>delete</option>
                    </select>
                    <Picture data={props.PictureData}/>
                </div>
                <p>{props.Post.description}</p>
                <p>{props.Post.caption}</p>
            </div>
            <div className="card-footer d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                    <Like LikeData={props.LikeData}/>
                    {props.LikeCount?props.LikeCount.count:""}
                    <button onClick={Commentfunc} className="mr-2 btn btn-light">co</button>
                    {props.CommentCount?props.CommentCount.count:""}
                    <button className="btn btn-light"><i class="bi bi-star-fill"></i></button>
                </div>
                <div className="d-flex flex-row">
                    <button className="btn btn-light"><i class="bi bi-save"></i></button>
                    <button className="btn btn-light"><i class="bi bi-share"></i></button>
                </div>
            </div>

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
	return {
		CommentData:state.AllData.CommentData,
        LikeData:state.AllData.LikeData,
        LikeCount:state.AllData.LikeCount,
        CommentCount:state.AllData.CommentCount,
        PictureData:state.AllData.PictureData
	};
};
export default connect(mapStateToProps,{fetchAllData})(CardView);
