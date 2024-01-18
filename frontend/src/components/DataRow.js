import React,{useState} from 'react';

const DataRow = React.memo(({item, editingItem, onEdit, onDelete, handleChange, handleSave} )=>{
  const [isEditing, setIsEditing] = useState(false);
    return (
        <tr key={item._id}>
              <td>{isEditing ? (
                <input name="name" value={editingItem.name} onChange={(e)=>handleChange(e)} />
              ) : item.name}</td>
              <td>{isEditing ? (
                <input name="value" value={editingItem.value} onChange={(e)=>handleChange(e)} />
              ) : item.value}</td>
              <td>
                {isEditing ? (
                  <>
                    <button onClick={() => handleSave(item._id)}>Save</button>
                    <button onClick={() => {onEdit({});setIsEditing(false)}}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => {onEdit(item);setIsEditing(true)}}>Edit</button>
                    <button onClick={() => onDelete(item._id)}>Delete</button>
                  </>
                )}
              </td>
        </tr>
    )
})

export default DataRow