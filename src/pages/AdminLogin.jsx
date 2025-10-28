import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      alert('Failed to log in: ' + error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box component="form" onSubmit={handleLogin} sx={{ mt: 8 }}>
        <Typography variant="h4">Admin Login</Typography>
        <TextField margin="normal" required fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField margin="normal" required fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>Login</Button>
      </Box>
    </Container>
  );
};

export default AdminLogin;