import { useState } from "react";
import { PostEditPostNewImage } from "../../Redux/Actions";

const NewImage = (props) => {
  const [image, setNewImage] = useState();
  const addImage = () => {
    PostEditPostNewImage(props.match.params.id, image, (reply, errorMsg) => {
      if (reply) {
        props.history.push("/?Image&Added");
      } else {
        console.log(errorMsg);
      }
    });
  };
  const msg = (query) => {
    if (query) {
      var res = query.slice(1);
      var ress = res.split("&");
      let message = "";
      for (var i = 0; i < ress.length; i++) {
        console.log(message, ress[i]);
        message = message + " " + ress[i];
      }
      return <p className="text-center text-success ">{message}</p>;
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="text-center">Add image</h1>
      </div>
      <div className="card-body">
        <input
          className="form-control"
          onChange={(e) => {
            setNewImage(e.target.files[0]);
          }}
          type="file"
          name="Image"
          multiple
          accept="image/*"
          capture="camera"
        />
        <p>{msg(props.location.search)}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <button className="btn btn-success" onClick={addImage}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default NewImage;
