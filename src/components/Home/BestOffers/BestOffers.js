import React from 'react';
import './BestOffers.css';
import { Box, Container, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Fade } from 'react-reveal';

const BestOffers = () => {
    const images = {
        spanishBurger: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786135/testo-burger-project/all-food-items/burgers/spanish-burger_zw9uqs.jpg',
        classicBurger: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786133/testo-burger-project/all-food-items/burgers/classic-burger_qr27pp.jpg',
        crispyBurger: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786134/testo-burger-project/all-food-items/burgers/crispy-chicken_k46dxd.jpg'
    };

    return (
        <section id='best-offers'>
            <Container>
                <Box component='h5'
                    sx={{
                        textAlign: 'center',
                        fontWeight: '500',
                        marginBottom: '1.5rem',
                        marginTop: '4.375rem',
                        fontSize: '3.75rem',
                        color: '#E3000E'
                    }}>
                    OUR BEST OFFERS
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
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <Card className='offer-card-body' sx={{ borderRadius: '10px', border: "none", boxShadow: "none" }}>
                            <Box sx={{ overflow: 'hidden' }}>
                                <CardMedia
                                    sx={{
                                        transition: 'all 800ms',
                                        '&:hover': {
                                            transform: 'scale(1.2)'
                                        }
                                    }}
                                    component="img"
                                    image={images.spanishBurger}
                                    alt=""
                                >
                                </CardMedia>
                            </Box>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <Rating name="no-value" value={null} />
                                    </div>
                                    <div>
                                        <FavoriteIcon sx={{ color: 'lightgray', '&:hover': { color: 'red' } }} />
                                    </div>
                                </Box>
                                <Typography
                                    sx={{
                                        textTransform: 'uppercase',
                                        fontWeight: '500',
                                        color: '#642F21'
                                    }}
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Spanish Burger
                                </Typography>
                                <Typography sx={{ fontFamily: 'Roboto, sans-serif' }} variant="body1" color="text.secondary">
                                    Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula
                                </Typography>
                                <CardActions>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box component='p' my={0} sx={{ color: '#E3000E', fontSize: '1.5rem', fontWeight: '500' }}>$8.95</Box>
                                        <Box className="offer-hover-button">
                                            <Fade bottom>
                                                <Button
                                                    sx={{
                                                        backgroundColor: '#FFCA2C',
                                                        color: 'black'
                                                    }}
                                                >
                                                    <ShoppingBagOutlinedIcon
                                                        sx={{
                                                            fontSize: '20px',
                                                            marginRight: '5px'
                                                        }}
                                                    /> Add to cart
                                                </Button>
                                            </Fade>
                                        </Box>
                                    </Box>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={4}>
                        <Card className='offer-card-body' sx={{ borderRadius: '10px', border: "none", boxShadow: "none" }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <Rating name="no-value" value={null} />
                                    </div>
                                    <div>
                                        <FavoriteIcon sx={{ color: 'lightgray', '&:hover': { color: 'red' } }} />
                                    </div>
                                </Box>
                                <Typography
                                    sx={{
                                        textTransform: 'uppercase',
                                        fontWeight: '500',
                                        color: '#642F21'
                                    }}
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Classic Burger
                                </Typography>
                                <Typography sx={{ fontFamily: 'Roboto, sans-serif' }} variant="body1" color="text.secondary">
                                    Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula
                                </Typography>
                                <CardActions>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box component='p' my={0} sx={{ color: '#E3000E', fontSize: '1.5rem', fontWeight: '500' }}>$7.95</Box>
                                        <Box className="offer-hover-button">
                                            <Fade top>
                                                <Button
                                                    sx={{
                                                        backgroundColor: '#FFCA2C',
                                                        color: 'black'
                                                    }}
                                                >
                                                    <ShoppingBagOutlinedIcon
                                                        sx={{
                                                            fontSize: '20px',
                                                            marginRight: '5px'
                                                        }}
                                                    /> Add to cart
                                                </Button>
                                            </Fade>
                                        </Box>
                                    </Box>
                                </CardActions>
                            </CardContent>
                            <Box sx={{ overflow: 'hidden' }}>
                                <CardMedia
                                    sx={{
                                        transition: 'all 800ms',
                                        '&:hover': {
                                            transform: 'scale(1.2)'
                                        }
                                    }}
                                    component="img"
                                    image={images.classicBurger}
                                    alt=""
                                >
                                </CardMedia>
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item md={4}>
                        <Card className='offer-card-body' sx={{ borderRadius: '10px', border: "none", boxShadow: "none" }}>
                            <Box sx={{ overflow: 'hidden' }}>
                                <CardMedia
                                    sx={{
                                        transition: 'all 800ms',
                                        '&:hover': {
                                            transform: 'scale(1.2)'
                                        }
                                    }}
                                    component="img"
                                    image={images.crispyBurger}
                                    alt=""
                                >
                                </CardMedia>
                            </Box>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <Rating name="no-value" value={null} />
                                    </div>
                                    <div>
                                        <FavoriteIcon sx={{ color: 'lightgray', '&:hover': { color: 'red' } }} />
                                    </div>
                                </Box>
                                <Typography
                                    sx={{
                                        textTransform: 'uppercase',
                                        fontWeight: '500',
                                        color: '#642F21'
                                    }}
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Crispy Burger
                                </Typography>
                                <Typography sx={{ fontFamily: 'Roboto, sans-serif' }} variant="body1" color="text.secondary">
                                    Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula
                                </Typography>
                                <CardActions>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box component='p' my={0} sx={{ color: '#E3000E', fontSize: '1.5rem', fontWeight: '500' }}>$8.50</Box>
                                        <Box className="offer-hover-button">
                                            <Fade bottom>
                                                <Button
                                                    sx={{
                                                        backgroundColor: '#FFCA2C',
                                                        color: 'black'
                                                    }}
                                                >
                                                    <ShoppingBagOutlinedIcon
                                                        sx={{
                                                            fontSize: '20px',
                                                            marginRight: '5px'
                                                        }}
                                                    /> Add to cart
                                                </Button>
                                            </Fade>
                                        </Box>
                                    </Box>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </section >
    );
};

export default BestOffers;