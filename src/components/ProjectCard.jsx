import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';

const ProjectCard = ({ title, description, techStack, imageUrl }) => {
    return (
        <Card sx={{
            height: '100%', // This forces all cards in a row to the same height
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRadius: '12px',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.35)',
            }
        }}>
            <CardMedia
                component="img"
                sx={{ height: 240, objectFit: 'cover' }} // A fixed, uniform height for all images
                image={imageUrl || "https://via.placeholder.com/400x240?text=Project+Image"}
                alt={`${title} screenshot`}
            />
            {/* This Box will now grow to fill the remaining space */}
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, p: 2.5 }}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ minHeight: '60px' }}> {/* Ensures space for 3 lines of text */}
                        {description}
                    </Typography>
                </Box>
                <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {techStack.map((tech, index) => (
                        <Chip key={index} label={tech} size="small" variant="outlined" color="primary" />
                    ))}
                </Box>
            </Box>
        </Card>
    );
};

export default ProjectCard;