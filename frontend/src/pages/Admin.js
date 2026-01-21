import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Admin.css";

function Admin() {
  const [users, setUsers] = useState([]);
  const [joinUsers, setJoinUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const fetchUsers = () => {
    axios.get(`${process.env.REACT_APP_ADMIN_API_URL}/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));

    axios.get("http://localhost:5000/api/joinus/all")
     .then(res => {
    console.log("Join Us data:", res.data); // 👈 Add this
    setJoinUsers(res.data);
  })
  .catch(err => console.error(err));
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_ADMIN_API_URL}/login`, loginData)
      .then(() => {
        setLoggedIn(true);
        fetchUsers();
      })
      .catch(() => alert("Invalid admin credentials"));
  };

  const deleteUser = (id) => {
    axios.delete(`${process.env.REACT_APP_ADMIN_API_URL}/users/${id}`)
      .then(() => fetchUsers())
      .catch(err => console.error(err));
  };

  return (
    <div className="admin-page">
      <Navbar />
      {!loggedIn ? (
        <div className="admin-login">
          <h2>Admin Login</h2>
          <form onSubmit={handleAdminLogin}>
            <input
              type="email"
              name="email"
              placeholder="Admin Email"
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <>
          <div className="user-table-container">
            <h2>Registered Users</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th><th>Email</th><th>Phone</th><th>Password</th><th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                    <td>{u.password}</td>
                    <td><button onClick={() => deleteUser(u._id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="user-table-container">
            <h2>Join Us Submissions</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th><th>Email</th><th>Phone</th><th>Mode</th><th>Goal</th><th>DOB</th>
                </tr>
              </thead>
              <tbody>
                {joinUsers.map((j) => (
                  <tr key={j._id}>
                    <td>{j.name}</td>
                    <td>{j.email}</td>
                    <td>{j.phone}</td>
                    <td>{j.mode || "N/A"}</td>
                    <td>{j.goal || "N/A"}</td>
                    <td>{j.dob ? new Date(j.dob).toLocaleDateString() : "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      
      <Footer />
    </div>
  );
}

export default Admin;
