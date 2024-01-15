import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createItemRequest, updateItemRequest, deleteItemRequest } from '../redux/actions';

const DataTable = ({ data }) => {
  const [newItem, setNewItem] = useState({ name: '', value: '' });
  const [editingItem, setEditingItem] = useState(null);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  // Handle input change for new or edited item
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingItem) {
      setEditingItem({ ...editingItem, [name]: value });
    } else {
      setNewItem({ ...newItem, [name]: value });
    }
  };

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
            <tr key={item._id}>
              <td>{editingItem && editingItem._id === item._id ? (
                <input name="title" value={editingItem.name} onChange={handleChange} />
              ) : item.name}</td>
              <td>{editingItem && editingItem._id === item._id ? (
                <input name="value" value={editingItem.value} onChange={handleChange} />
              ) : item.value}</td>
              <td>
                {editingItem && editingItem._id === item._id ? (
                  <>
                    <button onClick={() => handleUpdate(item._id)}>Save</button>
                    <button onClick={() => setEditingItem(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setEditingItem(item)}>Edit</button>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Item</h3>
      <input name="name" value={newItem.name} onChange={handleChange} placeholder="Name" />
      <input name="value" value={newItem.value} onChange={handleChange} placeholder="Value" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default DataTable;
