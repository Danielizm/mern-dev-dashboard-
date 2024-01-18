import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createItemRequest, updateItemRequest, deleteItemRequest } from '../redux/actions';
import DataRow from './DataRow';

const DataTable = ({ data }) => {
  const [newItem, setNewItem] = useState({ name: '', value: '' });
  const [editingItem, setEditingItem] = useState({});
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  // Handle input change for new or edited item
  const handleChange = (e) => {
    const { name, value } = e.target;
      setEditingItem({ ...editingItem, [name]: value });
  };

  const handleAddChange = (e)=>{
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  }

  // Handle adding a new item
  const handleAdd = () => {
    dispatch(createItemRequest(token, newItem));
    setNewItem({ name: '', value: '' });
  };

  // Handle updating an item
  const handleUpdate = (id) => {
    dispatch(updateItemRequest(token, id, editingItem));
    setEditingItem(null);
  };

  // Handle deleting an item
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteItemRequest(token, id));
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <DataRow 
              key={item._id}
              item={item}
              editingItem={editingItem}
              onEdit={setEditingItem}
              handleChange={handleChange}
              handleSave={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>

      <h3>Add New Item</h3>
      <input name="name" value={newItem.name} onChange={handleAddChange} placeholder="Name" />
      <input name="value" value={newItem.value} onChange={handleAddChange} placeholder="Value" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default DataTable;
