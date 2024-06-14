import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      console.log("hello");
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
      <div className="d-flex outer">
        <div className="login-page"></div>
        <div className="form-container ">
          <h1 className="heading">Welcome back!!</h1>
          <form onSubmit={handleSubmit}>
            <h4 className="title">Reset your password here</h4>
            <p className="small">
              Already have an account?{" "}
              <a className="reg-link" href="">
                Login here
              </a>
            </p>

            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-c"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-c"
                id="exampleInputEmail1"
                placeholder="Enter Your favorite Sport Name "
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-c"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="btn-c">
              <button type="submit" className="btn-l">
                RESET
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPasssword;
