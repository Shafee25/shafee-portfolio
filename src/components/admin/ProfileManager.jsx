import React, { useState } from 'react';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import { db, storage } from '../../firebase'; // Assuming you export storage from firebase.js
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ProfileManager = ({ initialData }) => {
    const [aboutMe, setAboutMe] = useState(initialData.aboutMe || '');
    const [loading, setLoading] = useState(false);

    const handleFileUpload = async (file, path) => {
        if (!file) return null;
        const storageRef = ref(storage, path);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
    };

    const handleSave = async () => {
        setLoading(true);
        const profilePicFile = document.getElementById('profilePicInput').files[0];
        const cvFile = document.getElementById('cvInput').files[0];

        try {
            const profilePicUrl = await handleFileUpload(profilePicFile, 'profile/profile-picture.jpg');
            const cvUrl = await handleFileUpload(cvFile, 'cv/resume.pdf');

            const dataToSave = {
                aboutMe,
                ...(profilePicUrl && { profilePicUrl }), // Only add if new file was uploaded
                ...(cvUrl && { cvUrl }),
            };

            await setDoc(doc(db, 'profile', 'main'), dataToSave, { merge: true });
            alert('Profile updated successfully!');
        } catch (error) {
            alert('Error: ' + error.message);
        }
        setLoading(false);
    };

    return (
        <Box>
            <Typography variant="h5">Profile Settings</Typography>
            <TextField label="About Me Text" multiline rows={6} fullWidth value={aboutMe} onChange={e => setAboutMe(e.target.value)} sx={{ my: 2 }} />
            
            <Typography sx={{ mt: 2 }}>Replace Profile Picture:</Typography>
            <Button variant="outlined" component="label">
                Upload Image <input id="profilePicInput" type="file" accept="image/*" hidden />
            </Button>

            <Typography sx={{ mt: 2 }}>Replace CV (PDF):</Typography>
            <Button variant="outlined" component="label">
                Upload PDF <input id="cvInput" type="file" accept=".pdf" hidden />
            </Button>

            <Button variant="contained" onClick={handleSave} disabled={loading} sx={{ display: 'block', mt: 3 }}>
                {loading ? <CircularProgress size={24} /> : 'Save Profile'}
            </Button>
        </Box>
    );
};

export default ProfileManager;