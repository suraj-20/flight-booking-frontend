import React, { useState } from "react";
import "./SignupPopup.css";
import { Link } from "react-router-dom";

const SignupPopup = ({ onClose }) => {
  const [state, setState] = useState("Sign in");

  return (
    <div className={`popup signup-popup show`}>
      <div className="popup-content">
        <div className="content-container signup-content-container">
          <span className="popup-close" onClick={onClose}>
            &times;
          </span>
          <div className="content">
            <div className="popup-upper-content signin-upper-content">
              {state === "Sign in" ? (
                <div>
                  <h4>Sign In</h4>
                  <p style={{ fontSize: "0.9rem" }}>
                    New User?{" "}
                    <Link
                      to={""}
                      onClick={() => setState("Sign up")}
                      style={{ color: "blue" }}
                    >
                      Create Account
                    </Link>
                  </p>
                </div>
              ) : (
                <div>
                  <h4>Register new user</h4>
                  <p style={{ fontSize: "0.9rem" }}>
                    Already have an account?{" "}
                    <Link
                      onClick={() => {
                        setState("Sign in");
                      }}
                      to={""}
                      style={{ color: "blue" }}
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              )}
            </div>
            <div className="popup-lower-content">
              <form action="">
                <div className="personal-details-field mt-3">
                  <div className="emailAndPassword">
                    <div className="input-field email-field">
                      <input type="text" placeholder="Enter Your Email" />
                    </div>
                    <div className="input-field password-field">
                      <input type="text" placeholder="Password" />
                    </div>
                  </div>
                </div>
                <div className="getFreeQuoteBtn mt-3">
                  {state === "Sign in" ? (
                    <button type="submit">Continue</button>
                  ) : (
                    <button type="submit">Create Account</button>
                  )}
                </div>

                <div className="termsAndCondition mt-3">
                  <p>
                    By Createing new account I accept the{" "}
                    <a style={{ color: "blue" }} href="/">
                      Terms of Condition's
                    </a>{" "}
                    and the{" "}
                    <a style={{ color: "blue" }} href="/">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
