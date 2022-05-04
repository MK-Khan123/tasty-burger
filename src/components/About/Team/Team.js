import React from 'react';
import './Team.css';
import Navbar from '../../Shared/Navbar/Navbar';
import { Fade } from 'react-reveal';
import MobileApp from '../../Shared/MobileApp/MobileApp';
import Footer from '../../Shared/Footer/Footer';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Card, CardContent, CardMedia, Container, Grid, Typography, Box } from '@mui/material';

const Team = () => {
    const teamData = [
        {
            name: 'Sam Richerdon',
            title: 'Head Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/team/team-1_qawv4t.jpg'
        },
        {
            name: 'Jannifer Harper',
            title: 'Sous Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/team/team-2_wfv3sa.jpg'
        },
        {
            name: 'Jonathan Coronado',
            title: 'Burger Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/team/team-3_vwvvk9.jpg'
        },
        {
            name: 'Jorge Stucky',
            title: 'Grill Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/team/team-4_y7oizi.jpg'
        },
        {
            name: 'Anthony Backer',
            title: 'Fry Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786145/testo-burger-project/team/team-5_zuhpcb.jpg'
        },
        {
            name: 'Lea Victoria',
            title: 'Roast Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786146/testo-burger-project/team/team-6_hcrvxt.jpg'
        },
        {
            name: 'Justin Roberto',
            title: 'Pizza Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786145/testo-burger-project/team/team-7_tndagx.jpg'
        },
        {
            name: 'Stephanie Reed',
            title: 'Executive Chef',
            image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786145/testo-burger-project/team/team-8_d48orv.jpg'
        }
    ];

    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786145/testo-burger-project/team/team-page_hhrn9a.jpg';

    return (
        <section id='team-testo'>
            <header>
                <Container>
                    <Navbar />
                </Container>
            </header>

            <main>
                <Box sx={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '25.625rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{ fontSize: '4rem', color: 'white' }} component='h5'>MEET THE TEAM</Box>
                </Box>

                <section id='team-grid'>
                    <Container>
                        <Grid container spacing={3}>
                            {
                                teamData.map(teamMember => {
                                    const { name, title, image } = teamMember;
                                    return (
                                        <Grid item xs={12} sm={6} md={3}>
                                            <Card className='team-card' sx={{ maxWidth: 345, border: "none", boxShadow: "none" }}>
                                                <Box sx={{ height: '300px', position: 'relative' }}>
                                                    <CardMedia
                                                        sx={{
                                                            height: "100%",
                                                            transition: 'all 1s',
                                                            position: 'absolute',
                                                            borderRadius: '10px',
                                                            '&:hover': {
                                                                filter: 'brightness(60%)'
                                                            }
                                                        }}
                                                        className='team-card-image'
                                                        component="img"
                                                        image={image}
                                                        alt="team member image"
                                                    />
                                                    <Box className='team-card-icons'>
                                                        <Fade bottom>
                                                            <Box sx={{
                                                                display: 'flex',
                                                                justifyContent: 'space-evenly',
                                                                alignItems: 'flex-end',
                                                                height: '300px',
                                                                padding: '15px',
                                                                color: 'white'
                                                            }}>
                                                                <FacebookOutlinedIcon sx={{
                                                                    fontSize: '30px',
                                                                    '&:hover': { color: '#3b5998' }
                                                                }} />
                                                                <TwitterIcon sx={{
                                                                    fontSize: '30px',
                                                                    '&:hover': { color: '#1DA1F2' }
                                                                }} />
                                                                <LinkedInIcon sx={{
                                                                    fontSize: '30px',
                                                                    '&:hover': { color: '#0e76a8' }
                                                                }} />
                                                            </Box>
                                                        </Fade>
                                                    </Box>
                                                </Box>
                                                <CardContent sx={{ textAlign: 'center' }}>
                                                    <Typography
                                                        sx={{
                                                            fontFamily: 'Oswald, sans-serif',
                                                            fontWeight: '500',
                                                            textTransform: 'uppercase',
                                                            color: '#642F21'
                                                        }}
                                                        gutterBottom
                                                        variant="h5"
                                                        component="div"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontFamily: 'Roboto, sans-serif',
                                                            fontWeight: '500',
                                                            color: '#F7BE27'
                                                        }}
                                                        variant="h6"
                                                        color="text.secondary"
                                                    >
                                                        {title}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>
                    </Container>
                </section>

                <MobileApp />
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default Team;