import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, CircularProgress } from '@mui/material';
import { db, auth } from '../firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import ProfileManager from '../components/admin/ProfileManager';
import CrudManager from '../components/admin/CrudManager';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({ profile: {}, projects: [], experiences: [] });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                navigate('/admin');
            } else {
                // Fetch all data
                const profileSnap = await getDoc(doc(db, 'profile', 'main'));
                const projectsSnap = await getDocs(collection(db, 'projects'));
                const experiencesSnap = await getDocs(collection(db, 'experiences'));

                setData({
                    profile: profileSnap.exists() ? profileSnap.data() : {},
                    projects: projectsSnap.docs.map(d => ({ id: d.id, ...d.data() })),
                    experiences: experiencesSnap.docs.map(d => ({ id: d.id, ...d.data() })),
                });
                setLoading(false);
            }
        });
        return unsubscribe;
    }, [navigate]);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 4 }}>
                <Typography variant="h3">Dashboard</Typography>
                <Button onClick={() => signOut(auth)}>Sign Out</Button>
            </Box>

            <ProfileManager initialData={data.profile} />
            
            <CrudManager
                collectionName="projects"
                fields={['title', 'description', 'techStack', 'imageUrl', 'githubUrl']}
                items={data.projects}
            />

            <CrudManager
                collectionName="experiences"
                fields={['title', 'company', 'duration', 'techStack']}
                items={data.experiences}
            />
            {/* Add more CrudManager instances for Education, Certifications, etc. */}
        </Container>
    );
};

export default AdminDashboard;