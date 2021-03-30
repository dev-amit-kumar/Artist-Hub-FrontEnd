import { useState } from "react";
import { AddNewPostDetail } from "../../Redux/Actions";
const PostEdit = (props) => {
  const [location, setLocation] = useState();
  const [desc, setDesc] = useState();
  const [caption, setCaption] = useState();
  const [occassion, setOccassion] = useState();
  const [tags, setTags] = useState();
  const [msg, setErrorMsg] = useState();

  const UpdateData = () => {
    if (tags) {
      var res = tags.split(" ");
    } else {
      res = "";
    }
    const data = {
      location: location,
      occassion: occassion,
      description: desc,
      caption: caption,
      tags: res,
    };
    AddNewPostDetail(data, (reply, errorMsg) => {
      if (reply) {
        props.history.push(
          `/newpost/image/${reply.data._id}?message=Post&Detail&Added`
        );
      } else {
        setErrorMsg(errorMsg);
      }
    });
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          {msg ? msg : ""}
          <h1 className="text-center">New Post</h1>
        </div>
        <div className="card-body">
          <div className="d-flex flex-row">
            <div className="col-md-6 col-sm-6">
              <label>Location</label>
              <input
                name="location"
                type="text"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                placeholder="enter location"
                className="form-control"
              />
            </div>
            <div className="col-md-6 col-sm-6">
              <label>Caption</label>
              <input
                type="text"
                name="caption"
                value={caption}
                onChange={(e) => {
                  setCaption(e.target.value);
                }}
                placeholder="enter caption"
                className="form-control"
              />
            </div>
          </div>
          <label></label>
          <select
            onChange={(e) => {
              setOccassion(e.target.value);
            }}
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>select Occassion</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Outing">Outing</option>
          </select>

          <label>Tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={(e) => {
              setTags(e.target.value);
            }}
            placeholder="enter tags"
            className="form-control"
          />
          <label>Description</label>
          <input
            type="text"
            name="desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="enter description"
            className="form-control"
          />
        </div>
        <div className="p-4 card-footer d-flex flex-row justify-content-center">
          <div className="p-4 d-flex justify-content-center">
            <button onClick={UpdateData} className="btn btn-info">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEdit;
