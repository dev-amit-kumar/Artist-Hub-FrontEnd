import { useState } from "react";
import { fetchEmail } from "../../Redux/Actions";
const ForgetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [msg, setmsg] = useState("");
  const [err, setErr] = useState("");
  const emailVerify = () => {
    fetchEmail(email, (reply, error) => {
      if (reply) {
        setmsg(reply.message);
      } else {
        setErr(error);
      }
    });
  };
  if (!err) {
    return (
      <div>
        <div className="container padding-bottom-3x mb-2 mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div>
                <h2>Forgot your password?</h2>
                <p>
                  Change your password in three easy steps. This will help you
                  to secure your password!
                </p>
                <ol className="list-unstyled">
                  <li>
                    <span className="text-primary text-medium">1. </span>Enter
                    your email address below.
                  </li>
                  <li>
                    <span className="text-primary text-medium">2. </span>Our
                    system will send you a temporary link
                  </li>
                  <li>
                    <span className="text-primary text-medium">3. </span>Use the
                    link to reset your password
                  </li>
                </ol>
              </div>
              <form className="card mt-4">
                <div className="card-body">
                  <div className="form-group">
                    <label>Enter your email address</label>
                    <input
                      className="form-control"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="form-text text-muted">
                      Enter the email address you used during the registration
                    </p>
                  </div>
                </div>
                <div className="card-footer d-flex flex-row">
                  <button
                    type="button"
                    onClick={emailVerify}
                    className="btn btn-success me-5"
                  >
                    Get New Password
                  </button>
                  <button
                    onClick={() => props.history.push("/auth/login")}
                    className="btn btn-danger me-5"
                  >
                    Back to Login
                  </button>
                  <h4 className="text-success text-center">{msg ? msg : ""}</h4>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default ForgetPassword;
