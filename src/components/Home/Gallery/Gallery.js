import React, { useEffect, useState } from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Fade } from 'react-reveal';
import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import './Gallery.css';

const Gallery = () => {
    const [imageGallery, setImageGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://morning-badlands-52849.herokuapp.com/gallery')
            .then(res => res.json())
            .then(data => {
                setImageGallery(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <section id='image-gallery'>
            <Container>
                <Box component='h5'
                    sx={{
                        textAlign: 'center',
                        fontWeight: '500',
                        marginBottom: '1.5rem',
                        marginTop: '4.375rem',
                        fontSize: '3.75rem',
                        color: '#E3000E'
                    }}
                >
                    IMAGE GALLERY
                </Box>
                <Box component='p'
                    sx={{
                        fontFamily: 'Roboto, sans-serif',
                        paddingX: { xs: '10%', md: '20%' },
                        fontWeight: '300',
                        fontSize: '1.1rem',
                        color: '#778899',
                        textAlign: 'center',
                        marginBottom: '3rem'
                    }}
                >
                    Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna
                </Box>
                {
                    isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <Grid container spacing={2}>
                            {
                                imageGallery.map(imageData => {
                                    const { name, image, star, starCount, _id } = imageData;
                                    let ratedStars = [];
                                    for (let i = 1; i <= star; i++) {
                                        ratedStars.push(<StarRoundedIcon sx={{ color: '#FFCA2C' }} />);
                                    }

                                    return (
                                        <Grid item key={_id} sm={6} md={3} className="image-gallery-card">
                                            <Card sx={{ position: 'relative', borderRadius: '8px' }}>
                                                <CardMedia
                                                    className='image-gallery-transform'
                                                    component="img"
                                                    alt={name + ' picture'}
                                                    image={image}
                                                />
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        left: 0,
                                                    }}
                                                >
                                                    <Box className='card-hover'>
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                justifyContent: 'flex-end',
                                                                height: '100%',
                                                                color: 'white',
                                                                boxSizing: 'border-box',
                                                                padding: '1rem'
                                                            }}
                                                        >
                                                            <Fade bottom>
                                                                <Typography
                                                                    sx={{
                                                                        fontWeight: '500',
                                                                        textTransform: 'uppercase'
                                                                    }}
                                                                    variant="h6"
                                                                    component="div"
                                                                >
                                                                    {name}
                                                                </Typography>
                                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <Box mr={1}>{ratedStars}</Box>
                                                                    <Box>({starCount})</Box>
                                                                </Box>
                                                            </Fade>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Card>
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>
                    )
                }
            </Container>
        </section >
    );
};

export default Gallery;