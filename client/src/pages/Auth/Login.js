import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <div className="d-flex outer">
        <div className="login-page">
          
        </div>
        <div className="form-container">
          <h1 className="heading">Welcome back!!</h1>
          <form onSubmit={handleSubmit}>
            <h4 className="title">LOGIN HERE</h4>
            <p className="small">
              Don't have an account?{" "}
              <a className="reg-link" href="">
                Create here
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-c"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="btn-c">
              <button
                type="button"
                className="btn-fp"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password ?
              </button>
              <button type="submit" className="btn-l">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
