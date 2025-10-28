import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, IconButton } from '@mui/material';
import { db } from '../../firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CrudManager = ({ collectionName, fields, items }) => {
    const [formData, setFormData] = useState({});
    const [editingId, setEditingId] = useState(null);

    const handleSave = async () => {
        if (editingId) {
            await updateDoc(doc(db, collectionName, editingId), formData);
        } else {
            await addDoc(collection(db, collectionName), formData);
        }
        setFormData({});
        setEditingId(null);
        alert(`${collectionName} saved! Please refresh the page to see updates.`);
    };

    const handleEdit = (item) => {
        setEditingId(item.id);
        setFormData(item);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
            await deleteDoc(doc(db, collectionName, id));
            alert(`${collectionName} deleted! Please refresh the page to see updates.`);
        }
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" sx={{ textTransform: 'capitalize' }}>{collectionName}</Typography>
            <Paper sx={{ p: 2, my: 2 }}>
                <Typography variant="h6">{editingId ? 'Edit Item' : `Add New ${collectionName}`}</Typography>
                {fields.map(field => (
                    <TextField
                        key={field}
                        label={field}
                        fullWidth
                        margin="normal"
                        value={formData[field] || ''}
                        onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                    />
                ))}
                <Button onClick={handleSave}>Save</Button>
                {editingId && <Button onClick={() => { setEditingId(null); setFormData({}); }}>Cancel</Button>}
            </Paper>

            <Typography variant="h6">Existing Items</Typography>
            {items.map(item => (
                <Paper key={item.id} sx={{ p: 2, my: 1, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>{item[fields[0]]}</Typography> {/* Display first field as title */}
                    <Box>
                        <IconButton onClick={() => handleEdit(item)}><EditIcon /></IconButton>
                        <IconButton onClick={() => handleDelete(item.id)}><DeleteIcon /></IconButton>
                    </Box>
                </Paper>
            ))}
        </Box>
    );
};

export default CrudManager;