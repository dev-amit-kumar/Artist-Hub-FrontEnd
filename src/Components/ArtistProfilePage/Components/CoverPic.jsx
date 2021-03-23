import axios from "axios";
import { useState } from "react";
import { base_url } from "../../../Redux/config";
const CoverPic = (props) => {
  const [image, setImage] = useState("");
  const deleteImage = () => {
    const configHeader = {
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTE3MTY0YTg3NDI4MDAxNTdlODRkZCIsImlhdCI6MTYxNjQzMjI5OCwiZXhwIjoxNjE2NTE4Njk4fQ.TRS66ShvnOsYsoNJTjc5oat3M5WPu4Du2TGknjcs70s",
      },
    };
    const data = {
      imageId: props.coverId,
    };
    axios
      .post(`${base_url}/artist/editPic/coverPic`, data, configHeader)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const saveImage = () => {
    const data = new FormData();
    data.append("imageFile", image);
    if (props.CoverPic) {
      data.append("imageId", props.coverId);
    }
    const header = {
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTE3MTY0YTg3NDI4MDAxNTdlODRkZCIsImlhdCI6MTYxNjQzMjI5OCwiZXhwIjoxNjE2NTE4Njk4fQ.TRS66ShvnOsYsoNJTjc5oat3M5WPu4Du2TGknjcs70s",
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      },
    };
    axios
      .post(`${base_url}/artist/editPic/coverPic`, data, header)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const renderCoverImage = (Data) => {
    if (Data) {
      return (
        <div style={{ position: "relative" }}>
          <img
            className="col-12"
            style={{ height: "35vh" }}
            src={Data}
            alt="from database"
          />
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#ModalBox"
            style={{ position: "absolute", top: "5%", right: "1%" }}
            className="btn btn-danger"
          >
            <i class="far fa-edit"></i>
          </button>
        </div>
      );
    } else {
      return (
        <div style={{ position: "relative" }}>
          <img
            className="col-12"
            style={{ height: "35vh" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgwp9FY8k5IX_xtP-68zsEk3zWtWBA6izlQ&usqp=CAU"
            alt="lorem ipsum"
          />
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#ModalBox"
            style={{ position: "absolute", top: "5%", right: "1%" }}
            className="btn btn-danger"
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      {renderCoverImage(props.CoverPic)}
      <div
        class="modal fade"
        id="ModalBox"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit CoverPic
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div style={{ position: "relative" }} class="modal-body">
              {props.CoverPic && (
                <img
                  style={{ height: "20vh", width: "30vw" }}
                  src={props.CoverPic}
                  alt="modal cover"
                />
              )}
              {props.CoverPic && (
                <button
                  className="btn btn-danger"
                  onClick={deleteImage}
                  style={{
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                  }}
                >
                  <i class="fas fa-trash"></i>
                </button>
              )}
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
            <div class="modal-footer">
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
export default CoverPic;
