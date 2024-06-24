import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserManagement.css";
import AdminHeader from "../../../AdminLayout/components/AdminHeader/AdminHeader";
import AdminSideBar from "../../../AdminLayout/components/AdminSideBar/AdminSideBar";
import UpdateUser from "./UpdateUser/UpdateUser"; // Import UpdateUser component

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false); // State to control the modal
  const [userData, setUserData] = useState(null); // State to hold the user data being edited
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/user/get-all"
        ); // URL API mới
        const data = response.data;
        // console.log(data); // Log dữ liệu để kiểm tra định dạng
        if (Array.isArray(data.userData)) {
          setUsers(data.userData);
        } else {
          throw new Error("Expected an array of users");
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/user/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("There was an error deleting the user!", error);
    }
  };

  const handleEditUser = (user) => {
    setUserData(user);
    setIsUpdateFormOpen(true);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="admin_sidebar">
      <AdminSideBar />
      <div className="admin_header">
        <AdminHeader />
        <div className="table-pm">
          <div className="table-pm__header">
            <h3>User Management</h3>
            <input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <table className="table">
            <thead className="table_thread">
              <tr>
                <th>Tên khách hàng</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Kiểu đăng nhập</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) =>
                  user.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.mobile}</td>
                    <td>{user.typeLogin}</td>
                    <td>
                      <button
                        className="btn-action"
                        onClick={() => handleEditUser(user)}
                      >
                        Sửa
                      </button>
                      <button
                        className="btn-action"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {isUpdateFormOpen && (
          <UpdateUser
            setIsUpdateFormOpen={setIsUpdateFormOpen}
            userData={userData}
          />
        )}
      </div>
    </div>
  );
};

export default UserManagement;
