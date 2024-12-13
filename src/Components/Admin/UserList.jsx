import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UIkit from "uikit";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://127.0.0.1:8000/api/getAllUsers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      UIkit.notification({ message: "Failed to fetch users", status: "danger" });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://127.0.0.1:8000/api/admin/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      UIkit.notification({ message: "User deleted successfully!", status: "success" });
      setUsers(users.filter((user) => user.id !== id)); // Remove the user from the list
    } catch (error) {
      UIkit.notification({ message: "Failed to delete user", status: "danger" });
    }
  };

  if (loading) {
    return <div className="text-center">Loading users...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Manage Users</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Birthday</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.birthday}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
