import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminDashboard = () => {
    const [notifications, setNotifications] = useState([]);

    // Retrieve token from local storage
    const token = localStorage.getItem("access_token");

    // Axios instance with authentication headers
    const axiosInstance = axios.create({
        baseURL: "http://127.0.0.1:8000/api/admin",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    useEffect(() => {
        axiosInstance
            .get("/demandes")
            .then((response) => setNotifications(response.data))
            .catch((error) => {
                console.error("Error fetching notifications:", error);
                if (error.response?.status === 401) {
                    toast.error("Unauthorized access. Please log in again.");
                } else {
                    toast.error("Failed to load notifications.");
                }
            });
    }, []);

    const updateStatus = (id, status) => {
        axios
            .put(
                `http://127.0.0.1:8000/api/admin/demandes/${id}`,
                { status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then(() => {
                toast.success("Status updated successfully!");
                setNotifications((prev) =>
                    prev.filter((notification) => notification.id !== id)
                );
            })
            .catch((error) => {
                console.error("Error updating status:", error);
                toast.error("Failed to update status.");
            });
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Admin Dashboard</h1>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Notifications
                </h2>
                {notifications.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="border rounded-lg p-4 bg-gray-100 shadow-sm hover:shadow-md transition"
                            >
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {notification.nom}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {notification.description}
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded">
                                        {notification.prix} Dh
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => updateStatus(notification.id, "approved")}
                                        className="w-full bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => updateStatus(notification.id, "rejected")}
                                        className="w-full bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600 transition"
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-500 text-lg">
                            🎉 No pending requests. All caught up!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
