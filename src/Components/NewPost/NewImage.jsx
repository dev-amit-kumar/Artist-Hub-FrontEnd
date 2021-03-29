import { useState } from "react";
import { PostEditPostNewImage } from "../../Redux/Actions";

const NewImage = (props) => {
  const [image, setNewImage] = useState();
  const addImage = () => {
    console.log(props.match.params.id, "id");
    PostEditPostNewImage(props.match.params.id, image, (reply, errorMsg) => {
      if (reply) {
        console.log(reply);
        props.history.push("/");
      } else {
        console.log(errorMsg);
      }
    });
  };
  return (
    <div className="card">
      <div className="card-header">
        <h1>Add image</h1>
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
