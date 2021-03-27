import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

import { fetchEditPost } from "../Redux/Actions";
const PostEditModal = (props) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    props.fetchEditPost(props.Id);
  }, []);
  return (
    <div
      className="modal fade"
      id="EditPostModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form encType="multipart/form-data">
              <input
                className="form-control"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                type="file"
                name="CoverImage"
              />
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-danger">
              <i
                // onClick={deleteImage}
                type="button"
                className="fas fa-trash"
              ></i>
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              //   onClick={saveImage}
              type="button"
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditModal;
