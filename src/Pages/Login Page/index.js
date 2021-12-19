import React, { useState } from "react";
import "./App.css";
import firebase from '../../Config/Firebase/index'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user login")
        navigate("/request")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("not login");
      });
  }

  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Login</h3>
                    <br />
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email address"
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                        />
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          id="customCheck1"
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <label
                          htmlFor="customCheck1"
                          className="custom-control-label"
                        >
                          Remember password
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
