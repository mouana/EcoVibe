import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UIkit from "uikit";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});

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

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/admin/showUser/${id}`, updatedUser);
      UIkit.notification({ message: "User updated successfully!", status: "success" });
      fetchUsers();
      setEditingUser(null);
    } catch (error) {
      UIkit.notification({ message: "Failed to update user", status: "danger" });
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
                <td>
                  {editingUser === user.id ? (
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={user.name}
                      onChange={(e) =>
                        setUpdatedUser({ ...updatedUser, name: e.target.value })
                      }
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editingUser === user.id ? (
                    <input
                      type="email"
                      className="form-control"
                      defaultValue={user.email}
                      onChange={(e) =>
                        setUpdatedUser({ ...updatedUser, email: e.target.value })
                      }
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingUser === user.id ? (
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={user.phone}
                      onChange={(e) =>
                        setUpdatedUser({ ...updatedUser, phone: e.target.value })
                      }
                    />
                  ) : (
                    user.phone
                  )}
                </td>
                <td>
                  {editingUser === user.id ? (
                    <input
                      type="date"
                      className="form-control"
                      defaultValue={user.birthday}
                      onChange={(e) =>
                        setUpdatedUser({ ...updatedUser, birthday: e.target.value })
                      }
                    />
                  ) : (
                    user.birthday
                  )}
                </td>
                <td>{user.role}</td>
                <td>
                  {editingUser === user.id ? (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleUpdate(user.id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setEditingUser(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => setEditingUser(user.id)}
                    >
                      Edit
                    </button>
                  )}
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
