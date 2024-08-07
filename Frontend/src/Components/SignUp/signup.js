import React from "react";

const Signup = () => {
  return (
    <div>
      <form>
        <h2>Signup</h2>
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <label>Role</label>
          <div>
            <label>
              <input type="radio" name="role" value="owner" required />
              Owner
            </label>
            <label>
              <input type="radio" name="role" value="renter" required />
              Renter
            </label>
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
