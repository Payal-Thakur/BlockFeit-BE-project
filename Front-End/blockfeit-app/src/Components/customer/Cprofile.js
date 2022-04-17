import React, { useEffect, useState } from "react";
import "../../style/Cprofile.css";
import { fetchUserHistory } from "../../API/api";

function Cprofile() {
  let localUser = JSON.parse(localStorage.getItem("blockFeit"));
  let localToken = JSON.parse(localStorage.getItem("blockFeitToken"));
  let [user, setUser] = useState(localUser);
  let [transactionHistory, setTransactionHistory] = useState([]);

  async function fetchUser() {
    await fetch(
      `http://localhost:7000/api/customerprofile?email=${localUser.customer_email}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(JSON.stringify(data));
        setUser(data.user);
      })
      .catch((error) => {
        console.log(
          "Something went wrong while getting profile " + JSON.stringify(error)
        );
      });
  }

  const fetchHistory = async () => {
    const uHistory = await fetchUserHistory(
      user.customer_public_key,
      localToken
    );
    if (uHistory === undefined) return;
    setTransactionHistory(uHistory.history);
  };

  useEffect(() => {
    fetchUser();
    fetchHistory();
  }, []);

  return (
    <div className="container-fluid _profile_root">
      <div className="wrapper">
        <div className="navbar">
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

      <div className="container _user_section">
        <div className="row">
          <div className="col">
            <div className="_user_profile">
              <div className="_cp_image" div />
              <h5 className="_customer_name">{user.customer_name}</h5>
              <div className="_type_text">customer</div>
              <br />
              <i class="fa fa-map-marker fa-2x" aria-hidden="true" />
              <span className="_user_fields">{`${user.customer_city}, ${user.customer_state}`}</span>
              <br />
              <i class="fa fa-envelope fa-2x" aria-hidden="true" />
              <span className="_user_fields">{user.customer_email}</span>
              <br />
              <i class="fa fa-phone fa-2x" aria-hidden="true" />
              <span className="_user_fields">{`+91 ${user.customer_phone_no}`}</span>
              <br />
              <i class="fa fa-lock fa-2x" />
              <span className="_user_fields">{user.customer_password}</span>
              <br />
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="_user_keys">
                <div className="_key_header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-key-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-info"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </div>

                <div className="_user_key_container">
                  <div className="_user_public_key">
                    <text>Public Key</text>
                    <div className="_user_public_key_value">
                      <text>XUSFDFSDFDFD</text>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-clipboard2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z" />
                        <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    </div>
                  </div>
                  <div className="_user_public_key">
                    <text>Private Key</text>
                    <div className="_user_public_key_value">
                      <text>XUSFDFSDFDFD</text>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-clipboard2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z" />
                        <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-eye-slash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="_user_transactions">
                <div className="_transaction_header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <span>Recent Transactions</span>
                </div>
                <div className="_transaction_data">
                  <table>
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Id</th>
                        <th>Buyer Address</th>
                        <th>Time Stamp</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Success</td>
                        <td>3</td>
                        <td>XYSDDFD</td>
                        <td>12-2-200</td>
                        <td>234</td>
                      </tr>
                      <tr>
                        <td>Success</td>
                        <td>3</td>
                        <td>XYSDDFD</td>
                        <td>12-2-200</td>
                        <td>234</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cprofile;
