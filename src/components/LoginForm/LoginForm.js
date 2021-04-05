import React from "react";
import "./LoginForm.scss";

function LoginForm() {
  return (
    <div className="loginform">
      <div className="loginform__date">
        <div className="loginform__body">
          <h1 className="loginform__text">10:53 AM</h1>
          <h5 className="loginform__text">Saturday, March 20 , 2021</h5>
          <img
            src="../../assets/images/gallery/02.png"
            alt=""
            className="loginform__img"
          ></img>
          <div class="loginform__input">
            {" "}
            <span class="input-group-text">
              <i class="bx bxs-user"></i>
            </span>
            <input type="text" placeholder="Enter Username" />
          </div>
          <div class="d-grid">
            <button class="btn btn-primary" type="submit">
              <i class="bx bxs-lock-open"></i> Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
