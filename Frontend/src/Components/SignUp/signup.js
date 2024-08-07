import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, role });

    axios.post('http://localhost:3300/signup', { name, email, password, role })
      .then((res) => {
        console.log(res.data);
        // Handle successful response
      })
      .catch((err) => {
        console.error(err);
        // Handle error response
      });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <div className="role-selection">
          <label>
            <input type="radio" name="role" value="owner" required onChange={(e) => setRole(e.target.value)} />
            Owner
          </label>
          <label>
            <input type="radio" name="role" value="renter" required onChange={(e) => setRole(e.target.value)} />
            Renter
          </label>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;