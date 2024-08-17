import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, role });

    axios
      .post("http://localhost:3300/signup", { name, email, password, role })
      .then((res) => {
        console.log(res.data);
        // Handle successful response
        toast.success("Signup Successful!");

        axios
          .post("http://localhost:3300/login", { email, password })
          .then((loginRes) => {
            const { user, token } = loginRes.data;
            dispatch(loginSuccess({ user, token }));

            setTimeout(() => {
              if (user.role === "owner") {
                console.log("Navigating to /owner-dashboard");
                navigate("/owner-dashboard");
              } else if (user.role === "renter") {
                console.log("Navigating to /user-dashboard");
                navigate("/user-dashboard");
              }
            }, 1000);
          })
          .catch((loginErr) => {
            console.log(loginErr);
            toast.error("Login failed after signup.");
          });
      })
      .catch((err) => {
        console.error(err);
        // Handle error response
        toast.error("Signup failed");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="role-selection">
          <label>
            <input
              type="radio"
              name="role"
              value="owner"
              required
              onChange={(e) => setRole(e.target.value)}
            />
            Owner
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="renter"
              required
              onChange={(e) => setRole(e.target.value)}
            />
            Renter
          </label>
        </div>
        <button type="submit">Signup</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
