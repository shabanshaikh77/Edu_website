import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {  toast } from 'react-toastify';
export const AdminUsers = () => {
  const { authorizationtoken } = useAuth();
  const [users, setUsers] = useState([]);

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationtoken,
        },
      });
      const data = await response.json();
      console.log(data);
      setUsers(data);
      if (!response.ok) {
        alert(data.message);
      }
     
      
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);


  // Delete the user data
  const deleteUser = async(id) => {
     try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationtoken,
        },
      });
      if(response.ok)
        {
          getAllUsersData();
        }
      const data = await response.json();
      console.log(`Users after deleting data:  ${data}`);
     } catch (error) {
      console.log(error);
     }
  };
  return (
    <>
      <div className="admin-users-container">
        <h1>Admin Users Data</h1>
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((CarUser, index) => (
              <tr key={index}>
                <td>{CarUser.username}</td>
                <td>{CarUser.email}</td>
                <td>{CarUser.phone}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteUser(CarUser._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminUsers;
