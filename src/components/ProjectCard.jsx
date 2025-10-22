import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';

const ProjectCard = ({ title, description, techStack, imageUrl }) => {
    return (
        // --- THIS IS THE FIX ---
        // By setting height to 100% and using flexbox, we ensure all cards in a row
        // stretch to the height of the tallest card, creating a perfect grid.
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Pushes content apart to fill space
            backgroundColor: 'background.paper',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
            }
        }}>
            <Box>
                <CardMedia
                    component="img"
                    height="180" // Increased height for better visuals
                    image={imageUrl || "https://via.placeholder.com/400x200?text=Project+Image"}
                    alt={`${title} screenshot`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Box>
            <Box sx={{ p: 2, pt: 0 }}> {/* Tech stack now has its own container for better spacing */}
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