import React, { useState } from "react";
import "../../style/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img10 from "../../Images/bg.png";
import Header from "./Header";
import TopNavBar from "./TopNavBar";
toast.configure();

function Login() {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("Select ....");

    async function loginUser(event) {
        event.preventDefault();
        console.log(type);

        let LOGIN_URL = "http://localhost:7000/api/login";
        if (type === "manufacturer") {
            LOGIN_URL = "http://localhost:7000/api/login-manufacturer";
        } else if (type === "vendor") {
            LOGIN_URL = "http://localhost:7000/api/login-vendor";
        }

        await fetch(LOGIN_URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                type: type,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("User Loggin response : ", JSON.stringify(res));

                if (res.error !== undefined) {
                    toast.error(res.error[0]);
                    return;
                } else if (res.user === undefined) {
                    toast.warning("User dosent exist, check credentials");
                    return;
                }

                const user = JSON.stringify(res.user);
                localStorage.setItem("blockFeit", user);
                localStorage.setItem(
                    "blockFeitToken",
                    JSON.stringify(res.token)
                );
                localStorage.setItem("type", type);
                toast.success("Logged in successfully");
                if (type === "manufacturer") {
                    navigate("/profile/manufacturer");
                } else if (type === "vendor") {
                    navigate("/profile/vendor");
                } else {
                    navigate("/profile/customer");
                }
            })
            .catch((err) => {
                console.log(
                    "Something went wrong while log in \n Error : " + err
                );
                toast.error("Server is Down :(");
            });
    }

    return (
        <div>
            <nav>
                <TopNavBar />
            </nav>
            <div className="maincontainer">
                <div class="container-fluid">
                    <div class="row no-gutter">
                        <div class="col-md-6 d-none d-md-flex bg-image">
                            {" "}
                            <img id="k1" src={img10} alt="" />
                        </div>

                        <div class="col-md-6 bg-light">
                            <div class="login d-flex align-items-center py-5">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-10 col-xl-7 mx-auto">
                                            <p class="text-muted mb-4">
                                                {" "}
                                                <h3>
                                                    Welcome to Blockfeit
                                                </h3>{" "}
                                            </p>
                                            <form>
                                                <div class="mb-3">
                                                    <h6> Email ID</h6>
                                                    <input
                                                        id="inputUserid"
                                                        type="userid"
                                                        required={true}
                                                        onChange={(e) => {
                                                            setEmail(
                                                                e.target.value
                                                            );
                                                        }}
                                                        class="form-control rounded-pill border-0 shadow-sm px-4"
                                                    />
                                                </div>

                                                <div class="mb-3">
                                                    <h6> Password</h6>
                                                    <input
                                                        id="inputPassword"
                                                        type="password"
                                                        placeholder="Must be at least 6 characters"
                                                        required={true}
                                                        value={password}
                                                        onChange={(e) => {
                                                            setPassword(
                                                                e.target.value
                                                            );
                                                        }}
                                                        class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                                    />
                                                </div>

                                                <div class="mb-3">
                                                    <h6> User Type</h6>
                                                    <select
                                                        class="form-select rounded-pill border-0 shadow-sm px-4"
                                                        aria-label=".form-select-sm example"
                                                        onChange={(e) => {
                                                            setType(
                                                                e.target.value
                                                            );
                                                        }}
                                                    >
                                                        <option selected>
                                                            Select...
                                                        </option>
                                                        <option value="manufacturer">
                                                            Manufacturer
                                                        </option>
                                                        <option value="vendor">
                                                            Vendor
                                                        </option>
                                                        <option value="customer">
                                                            Customer
                                                        </option>
                                                    </select>
                                                </div>

                                                <div class="d-grid gap-2 mt-2">
                                                    <button
                                                        type="submit"
                                                        onClick={loginUser}
                                                        class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                                    >
                                                        {" "}
                                                        Log in
                                                    </button>
                                                </div>

                                                <div class="d-grid gap-2 mt-2">
                                                    <h6>
                                                        {" "}
                                                        Don't have an account?{" "}
                                                        <Link to="/Signup">
                                                            {" "}
                                                            Sign up{" "}
                                                        </Link>{" "}
                                                    </h6>
                                                </div>

                                                <div class="d-grid gap-2 mt-2">
                                                    <h6> Forgot Password? </h6>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
