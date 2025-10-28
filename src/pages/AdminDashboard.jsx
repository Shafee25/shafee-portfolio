import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { db, auth } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [heroTitle, setHeroTitle] = useState('');
  const [aboutText, setAboutText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Protect this route
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/admin');
      } else {
        // Load existing data
        const docRef = doc(db, 'content', 'main');
        getDoc(docRef).then(docSnap => {
          if (docSnap.exists()) {
            setHeroTitle(docSnap.data().hero.title);
            setAboutText(docSnap.data().about.text);
          }
        });
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handlePublish = async () => {
    try {
      const docRef = doc(db, 'content', 'main');
      await setDoc(docRef, {
        hero: { title: heroTitle },
        about: { text: aboutText },
        // You would add projects, skills, etc. here
      }, { merge: true }); // merge: true prevents overwriting data you're not editing
      alert('Portfolio updated successfully!');
    } catch (error) {
      alert('Error updating: ' + error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h3">Admin Dashboard</Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Hero Section</Typography>
        <TextField fullWidth label="Hero Title (e.g., Hi, I'm Faris)" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">About Me</Typography>
        <TextField fullWidth multiline rows={4} label="About Me Text" value={aboutText} onChange={(e) => setAboutText(e.target.value)} />
      </Box>
      <Button variant="contained" onClick={handlePublish} sx={{ mt: 4 }}>Publish Changes</Button>
      <Button onClick={() => signOut(auth)} sx={{ mt: 4, ml: 2 }}>Sign Out</Button>
    </Container>
  );
};

export default AdminDashboard;