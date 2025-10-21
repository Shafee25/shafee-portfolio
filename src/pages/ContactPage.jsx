import React, { useRef } from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import emailjs from 'emailjs-com';
import SectionTitle from '../components/SectionTitle.jsx'; // Import the component

const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // Your EmailJS logic remains the same
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
            {/* USE THE NEW SECTION TITLE */}
            <SectionTitle title="Contact Me" />

            <Box sx={{ p: 4, backgroundColor: 'background.paper', borderRadius: '8px' }}>
                <Typography variant="body1" align="center" color="text.secondary" paragraph>
                    Have a question or want to work together? Feel free to reach out using the form below!
                </Typography>
                <Box component="form" ref={form} onSubmit={sendEmail} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField name="from_name" label="Your Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField name="from_email" label="Your Email" type="email" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="subject" label="Subject" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="message" label="Your Message" multiline rows={4} variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.5, color: '#000', fontWeight: 'bold' }}>
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