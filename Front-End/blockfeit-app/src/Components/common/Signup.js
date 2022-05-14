import React, { useEffect, useState } from "react";
import "../../style/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img10 from "../../Images/bg.png";
import TopNavBar from "./TopNavBar";

toast.configure();
function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone_no, setPhoneNo] = useState("");
    let navigate = useNavigate();

    function registerUser(event) {
        event.preventDefault();

        fetch("http://localhost:7000/api/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                customer_name: name,
                customer_email: email,
                customer_phone_no: phone_no,
                customer_city: "Nashik",
                customer_state: "Maharashtra",
                customer_password: password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error !== undefined) {
                    toast.warning("Check entered Info");
                    return;
                }

                toast.success("You have registered Successfully!");
                navigate("/login");
            })
            .catch((err) => {
                console.log(
                    "Something went wrong while registration \n Error : " +
                        JSON.stringify(err)
                );
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
                                                        id="inputEmailid"
                                                        type="emailid"
                                                        placeholder=""
                                                        required={true}
                                                        class="form-control rounded-pill border-0 shadow-sm px-4"
                                                        value={email}
                                                        onChange={(e) => {
                                                            setEmail(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </div>
                                                <div class="mb-3">
                                                    <h6> Name </h6>
                                                    <input
                                                        id="inputName"
                                                        type="name"
                                                        placeholder=""
                                                        required={true}
                                                        class="form-control rounded-pill border-0 shadow-sm px-4"
                                                        value={name}
                                                        onChange={(e) => {
                                                            setName(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </div>
                                                <div>
                                                    <h6> Mobile Number </h6>
                                                    <input
                                                        id="inputPhonenumber"
                                                        type="phoneno"
                                                        placeholder=""
                                                        required={true}
                                                        class="form-control rounded-pill border-0 shadow-sm px-4"
                                                        value={phone_no}
                                                        onChange={(e) => {
                                                            setPhoneNo(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </div>
                                                <div class="mb-3">
                                                    <h6> User Type</h6>
                                                    <select
                                                        class="form-select rounded-pill border-0 shadow-sm px-4"
                                                        aria-label=".form-select-sm example"
                                                    >
                                                        <option selected>
                                                            Select...
                                                        </option>
                                                        <option value="1">
                                                            Manufacturer
                                                        </option>
                                                        <option value="2">
                                                            Vendor
                                                        </option>
                                                        <option value="3">
                                                            Customer
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <h6> Password</h6>
                                                    <input
                                                        id="inputPassword"
                                                        type="password"
                                                        placeholder="Must be at least 6 characters"
                                                        required={true}
                                                        class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                                        value={password}
                                                        onChange={(e) => {
                                                            setPassword(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </div>
                                                <div class="mb-3">
                                                    <h6> Confirm Password</h6>
                                                    <input
                                                        id="inputPassword"
                                                        type="password"
                                                        placeholder="Re-enter your password"
                                                        required={true}
                                                        class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                                        value={confirmPassword}
                                                        onChange={(e) => {
                                                            setConfirmPassword(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                </div>
                                                <div class="d-grid gap-2 mt-2">
                                                    <button
                                                        type="submit"
                                                        class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                                        onClick={registerUser}
                                                    >
                                                        {" "}
                                                        Sign Up{" "}
                                                    </button>
                                                </div>

                                                <div class="d-grid gap-2 mt-2">
                                                    <h6>
                                                        {" "}
                                                        Already have an account?{" "}
                                                        <Link to="/Login">
                                                            {" "}
                                                            Log in{" "}
                                                        </Link>{" "}
                                                    </h6>
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

export default Signup;
