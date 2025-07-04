import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function AddUser() {
    let navigate=useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
   const onSubmit= async(e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8080/users/user" ,user)
  navigate("/");
   };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Form</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={user.name}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={user.username}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={user.email}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={user.password}
                onChange={onInputChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary m-2">Submit</button>
            <Link  className="btn btn-outline-danger m-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
