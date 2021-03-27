import axios from "axios";
import { useState } from "react";
import { base_url, configHeader } from "../../../Redux/config";

const Detail = (props) => {
  const [name, setName] = useState(props.Name);
  const [shortDesc, setshortDesc] = useState(props.Desc);
  const saveData = () => {
    const data = {
      name: name,
      shortDesc: shortDesc,
    };
    axios
      .post(`${base_url}/artist/editDetails`, data, configHeader)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className=" ms-5 d-flex  flex-column align-items-center">
      <div className="d-flex flex-row">
        <h3 className="text-muted ">{props.Name}</h3>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#ModalBoxDetail"
          className="btn btn-light ms-5"
        >
          Edit Profile
        </button>
      </div>

      <div className="d-flex flex-row align-items-center">
        <h5 className="me-4">Quotation</h5>
        <h5>{props.followingCount}</h5>
        <h5
          className="text-muted"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#ModalBoxFollow"
        >
          following
        </h5>
        <h6 className="text-center ms-5">{props.Desc}</h6>
      </div>

      <div
        className="modal fade"
        id="ModalBoxDetail"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                type="text"
                placeholder="name"
                className="form-control mb-2"
              />

              <input
                onChange={(e) => {
                  setshortDesc(e.target.value);
                }}
                type="text"
                name="detail"
                placeholder="details"
                className="form-control"
              />
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
                onClick={saveData}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="ModalBoxFollow"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Follow
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {props.followingDetail
                ? props.followingDetail.map((val, idx) => {
                    return <p key={idx}>{val.userId1}</p>;
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
