import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';

const ProjectCard = ({ title, description, techStack, imageUrl }) => {
    return (
        // --- THIS IS THE FIX ---
        <Card sx={{
            // This forces the card to be a perfect square.
            aspectRatio: '1 / 1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Ensures content is spaced nicely from top to bottom
            backgroundColor: 'background.paper',
            borderRadius: '16px', // Softer, more modern corners
            overflow: 'hidden', // Ensures nothing spills out of the rounded corners
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
            }
        }}>
            {/* Top part of the card (Image) */}
            <CardMedia
                component="img"
                sx={{
                    // The image will take up 55% of the card's height.
                    height: '55%',
                    // This makes the image cover the area without being stretched or distorted.
                    objectFit: 'cover',
                }}
                image={imageUrl || "https://via.placeholder.com/400x200?text=Project+Image"}
                alt={`${title} screenshot`}
            />

            {/* Bottom part of the card (Text Content) */}
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '45%' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {techStack.map((tech, index) => (
                        <Chip key={index} label={tech} size="small" variant="outlined" color="primary" />
                    ))}
                </Box>
            </Box>
        </Card>
    );
};

export default ProjectCard;