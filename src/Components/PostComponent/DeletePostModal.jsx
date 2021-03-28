import { PostDelete } from "../../Redux/Actions";

const DeletePostModal = (props) => {
  console.log("comming");
  const deletePost = () => {
    console.log(props.Id);
    // PostDelete(props.Id, (reply, errorMsg) => {

    //   if (reply) {
    //     console.log(reply.data);
    //     props.history.push("/");
    //   } else {
    //     console.log(errorMsg);
    //   }
    // });
  };
  return (
    <div
      className="modal fade"
      id="DeletePostModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Delete Post
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h4>Are You Sure</h4>
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
              onClick={deletePost}
              type="button"
              className="btn btn-danger"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeletePostModal;
