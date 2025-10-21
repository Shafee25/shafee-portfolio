import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';

const ProjectCard = ({ title, description, techStack, imageUrl }) => {
    return (
        <Card sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
            }
        }}>
            <CardMedia
                component="img"
                height="160"
                image={imageUrl || "https://via.placeholder.com/400x200?text=Project+Image"}
                alt={`${title} screenshot`}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {techStack.map((tech, index) => (
                        <Chip key={index} label={tech} size="small" variant="outlined" color="primary" />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;