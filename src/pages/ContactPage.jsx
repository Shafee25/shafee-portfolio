import React, { useRef } from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import emailjs from 'emailjs-com';
import SectionTitle from '../components/SectionTitle.jsx';

const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gmab1on', 'template_t6xlm7n', form.current, 'EWvLOJamhHHN4XmUR')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <Container maxWidth="md" sx={{ py: 5 }}>
            <SectionTitle title="Contact Me" />
            <Box sx={{ p: { xs: 3, sm: 5 }, backgroundColor: 'background.paper', borderRadius: '8px' }}>
                <Typography variant="h6" align="center" color="text.secondary" paragraph>
                    Have a question or want to work together? I'd love to hear from you!
                </Typography>
                <Box component="form" ref={form} onSubmit={sendEmail} sx={{ mt: 4 }}>
                    {/* --- THIS IS THE FIX --- */}
                    {/* This grid creates a clean, standard form layout. */}
                    <Grid container spacing={3}>
                        {/* Row 1: Name and Email side-by-side */}
                        <Grid item xs={12} sm={6}>
                            <TextField name="from_name" label="Your Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField name="from_email" label="Your Email" type="email" variant="outlined" fullWidth required />
                        </Grid>

                        {/* Row 2: Subject on its own full-width line */}
                        <Grid item xs={12}>
                            <TextField name="subject" label="Subject" variant="outlined" fullWidth required />
                        </Grid>

                        {/* Row 3: Message on its own full-width line */}
                        <Grid item xs={12}>
                            <TextField name="message" label="Your Message" multiline rows={5} variant="outlined" fullWidth required />
                        </Grid>

                        {/* Row 4: Send button, centered */}
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ py: 1.5, px: 8, color: '#000', fontWeight: 'bold', fontSize: '1rem' }}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default ContactPage;