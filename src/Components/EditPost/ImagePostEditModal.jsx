import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import Loading from "../Common/Loading";
import {
  fetchEditPostImage,
  PostEditPostNewImage,
  PostEditPostDeleteImage,
  PostEditPostImage,
} from "../../Redux/Actions";
const PostEditModal = (props) => {
  const [image, setImage] = useState("");
  const [errMsg, setErrorMsg] = useState("");
  const [newImage, setNewImage] = useState();
  const [oldImage, setOldImage] = useState();
  useEffect(() => {
    fetchEditPostImage(props.Id, (reply, errorMsg) => {
      if (reply) {
        setImage(reply.data);
      } else {
        setErrorMsg(errorMsg);
      }
    });
  }, [props.Id]);
  const addImage = () => {
    PostEditPostNewImage(props.Id, newImage, (reply, errorMsg) => {
      if (reply) {
        // setImage();
        // fetchEditPostImage(props.Id, (reply, errorMsg) => {
        //   if (reply) {
        //     setImage(reply.data);
        //   } else {
        //     setErrorMsg(errorMsg);
        //   }
        // });
        console.log(reply);
      } else {
        setErrorMsg(errorMsg);
      }
    });
  };
  const deleteImage = (e) => {
    PostEditPostDeleteImage(e.target.value, (reply, errorMsg) => {
      if (reply) {
        // setImage();
        // fetchEditPostImage(props.Id, (reply, errorMsg) => {
        //   if (reply) {
        //     setImage(reply.data);
        //   } else {
        //     setErrorMsg(errorMsg);
        //   }
        // });
        console.log(reply);
      } else {
        setErrorMsg(errorMsg);
      }
    });
  };
  const updateImage = (e) => {
    PostEditPostImage(e.target.value, oldImage, (reply, errorMsg) => {
      if (reply) {
        // setImage();
        // fetchEditPostImage(props.Id, (reply, errorMsg) => {
        //   if (reply) {
        //     setImage(reply.data);
        //   } else {
        //     setErrorMsg(errorMsg);
        //   }
        // });
        console.log(reply);
      } else {
        setErrorMsg(errorMsg);
      }
    });
  };
  if (image) {
    return (
      <div>
        <div
          className="modal fade"
          id="EditPostModalImage"
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
              <Carousel showThumbs={false}>
                {image.map((img, idx) => {
                  return (
                    <div>
                      <div className="modal-body">
                        <img key={idx} src={img.file_path} alt="postImage" />
                        <form encType="multipart/form-data">
                          <input
                            className="form-control"
                            onChange={(e) => {
                              setOldImage(e.target.files[0]);
                            }}
                            type="file"
                            name="OldImage"
                            accept="image/*"
                            multiple
                            capture="camera"
                          />
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          onClick={deleteImage}
                          value={img.cloudinary_id}
                          className="btn btn-danger"
                        >
                          delete
                        </button>
                        <button
                          onClick={updateImage}
                          value={img.cloudinary_id}
                          type="button"
                          className="btn btn-primary"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="NewPostModalImage"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add image
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
                      setNewImage(e.target.files[0]);
                    }}
                    type="file"
                    name="Image"
                    multiple
                    accept="image/*"
                    capture="camera"
                  />
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={addImage}
                  type="button"
                  className="btn btn-primary"
                >
                  Add image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default PostEditModal;
