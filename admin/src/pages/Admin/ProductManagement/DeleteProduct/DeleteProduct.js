// DeleteProduct.js
import React from "react";
import axios from "axios";

const DeleteProduct = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/product/?id_pr=${id}`);
      onDelete(id);
    } catch (error) {
      console.error("There was an error deleting the product!", error);
    }
  };

  return <button onClick={handleDelete}>Xóa</button>;
};

export default DeleteProduct;
