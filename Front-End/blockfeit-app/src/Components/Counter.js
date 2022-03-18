import React from "react";
import "../style/Counter.css";
import img1 from "../Images/redcross.png";

function Counter() {
  return (
    <div>
      <div class="wrapper">
        <div class="navbar">
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand"> Blockfeit</a>
              <form class="d-flex ">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>

                <div class="col-6 col-md-4 sign-out-wrapper clearfix">
                  <a href="/Login" class="sign-out pull-right">
                    <i class="fa fa-sign-out"></i>
                    <span>Log Out</span>
                  </a>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 shadow-sm px-4">
            <img id="i1" src={img1} alt="" />
            <br></br>
            <br></br>
            <h4 id="c1"> COUNTERFEIT ALERT ! </h4>
            <br></br>
            <br></br>

            <h5>
              {" "}
              This product was never manufactured. If the packaging was damaged,
              previously opened, tampered with, there may be reason to suspect
              the authenticity of this item. Please report to us .
            </h5>
          </div>

          <div class="col-lg-8 shadow-sm px-4">
            <p class="text-muted mb-4">
              {" "}
              <h3 id="h1">Report a Counterfeit</h3>{" "}
            </p>
            <br></br>

            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  User Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Purchase Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Where Did You Purchase This Product ?{" "}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Any Details
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                ></textarea>
              </div>

              <div class="d-grid gap-2 mt-2">
                <button
                  type="submit"
                  class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                >
                  {" "}
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
