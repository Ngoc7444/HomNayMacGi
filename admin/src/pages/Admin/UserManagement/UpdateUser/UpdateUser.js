import React, { useState } from "react";
import axios from "axios";

const UpdateUser = ({ user, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    id: user ? user.id : "",
    name: user ? user.name : "",
    email: user ? user.email : "",
    address: user ? user.address : "",
    mobile: user ? user.mobile : "",
    // typeLogin: user ? user.typeLogin : ''
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        // Update user
        const response = await axios.put(
          `http://localhost:5000/api/v1/auth/register/${user.id}`,
          formData
        );
        onSave(response.data);
      } else {
        // Add user
        const response = await axios.post(
          "http://localhost:5000/api/v1/auth/register",
          formData
        );
        onSave(response.data);
      }
      onClose();
    } catch (error) {
      console.error("There was an error saving the user!", error);
    }
  };

  return (
    <div>
      {isOpen ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <h2 style={{ color: "black" }}>New User</h2>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Save</button>
              <button type="button" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)}>Open Form</button>
      )}
    </div>
  );
};

export default UpdateUser;
