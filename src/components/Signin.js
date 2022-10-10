import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Signin() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const handleSubmit = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields before submitting.");
      return;
    }
    setErrorMsg("");
    setSubmitBtnDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitBtnDisabled(false);
        const user = res.user;
        await updateProfile(user, { displayName: values.name });
        navigate("/");
      })
      .catch((err) => {
        setSubmitBtnDisabled(false);
        setErrorMsg(err.message);
        console.log("error" + err);
      });
  };
  return (
    <>
      <section className="vh-100  bg-dark">
        <div className="container py-5 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign Up</h3>
                  <div className="form-outline mb-4">
                    <input
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          name: event.target.value,
                        }))
                      }
                      type="text"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          email: event.target.value,
                        }))
                      }
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          pass: event.target.value,
                        }))
                      }
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                    <p className="text-danger m-2">{errorMsg}</p>
                  </div>

                  <button
                    disabled={submitBtnDisabled}
                    onClick={handleSubmit}
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
