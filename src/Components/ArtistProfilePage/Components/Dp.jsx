import axios from "axios";
import { useState } from "react";
import { base_url, configHeader } from "../../../Redux/config";
const Dp = (props) => {
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const deleteImage = () => {
    const data = {
      imageId: props.DpId,
    };
    axios
      .post(`${base_url}/artist/editPic/profilePic`, data, configHeader)
      .then((res) => setMessage(res))
      .catch((err) => console.log(err));
  };
  const saveImage = () => {
    const data = new FormData();
    data.append("imageFile", image);
    if (props.Dp) {
      data.append("imageId", props.DpId);
    }
    const header = {
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      },
    };
    axios
      .post(`${base_url}/artist/editPic/profilePic`, data, header)
      .then((res) => setMessage(res))
      .catch((err) => console.log(err));
  };
  const renderDp = (Data) => {
    if (Data) {
      return (
        <div className="col-2">
          <img
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#ModalBoxDp"
            style={{
              width: 200,
              height: 200,
              borderRadius: 200 / 2,
            }}
            src={Data}
            alt="from database"
          />
        </div>
      );
    } else {
      return (
        <div className="col-2">
          <img
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#ModalBoxDp"
            style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
            src="https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg"
            alt="lorem ipsum"
          />
        </div>
      );
    }
  };

  return (
    <div>
      {renderDp(props.Dp)}
      <div
        class="modal fade"
        id="ModalBoxDp"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Dp
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="d-flex justify-content-center">
                {props.Dp && (
                  <img
                    style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
                    src={props.Dp}
                    alt="from database"
                  />
                )}
              </div>
              <form encType="multipart/form-data">
                <input
                  className="form-control"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  type="file"
                  name="Image"
                />
              </form>
            </div>
            <div class="modal-footer">
              {props.Dp && (
                <button className="btn btn-danger" onClick={deleteImage}>
                  <i class="fas fa-trash"></i>
                </button>
              )}
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={saveImage} type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dp;
