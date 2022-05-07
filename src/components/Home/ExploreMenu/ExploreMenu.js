import React, { useEffect, useState } from 'react';
import './ExploreMenu.css';
import Flip from 'react-reveal/Flip';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { NavLink } from 'react-router-dom';
import { Box, Container, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

//All the custom CSS class is used from ActiveFoodItem.css under the MainMenu component. The styling is identical, hence I didn't make separate classes for the same styling for this component.

const ExploreMenu = () => {

    const [burgerData, setBurgerData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/filteredBurger')
            .then(res => res.json())
            .then(data => setBurgerData(data));
    }, []);

    return (
        <section id='explore-menu'>
            <Container>
                <Box component='h5' sx={{
                    textAlign: 'center',
                    fontWeight: '500',
                    marginBottom: '1.5rem',
                    fontSize: '3.75em',
                    color: '#E3000E'
                }}>
                    EXPLORE OUR MENU
                </Box>
                <Box component='p'
                    sx={{
                        fontFamily: 'Roboto, sans-serif',
                        padding: '0 20%',
                        fontWeight: '300',
                        fontSize: '1.1rem',
                        color: '#778899',
                        textAlign: 'center',
                        marginBottom: '4rem'
                    }}>
                    Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna
                </Box>
                <Grid container spacing={3}>
                    {
                        burgerData.map(burger => {
                            const { name, image, briefInfo, price, _id } = burger;
                            return (
                                <Grid item key={_id} sm={4} md={3} className="main-menu-card-body">
                                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <CardActionArea>
                                            <Box sx={{ overflow: 'hidden' }}>
                                                <CardMedia
                                                    sx={{
                                                        transition: 'all 800ms',
                                                        '&:hover': {
                                                            transform: 'scale(1.2)'
                                                        }
                                                    }}
                                                    component="img"
                                                    image={image}
                                                    alt=""
                                                />
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
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <NavLink className='main-menu-card-title' to={`/product-details/${_id}`}>
                                                        {name}
                                                    </NavLink>
                                                </Typography>
                                                <Typography variant="body1" color="text.secondary">
                                                    {briefInfo}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Button
                                                    sx={{
                                                        fontFamily: 'Oswald, sans-serif',
                                                        backgroundColor: '#642F21',
                                                        color: '#F7BE27',
                                                        fontWeight: '600',
                                                        '&:hover': {
                                                            backgroundColor: '#56423D'
                                                        }
                                                    }}
                                                >
                                                    $ {price}
                                                </Button>
                                                <Box className="main-menu-cart-button">
                                                    <Flip left>
                                                        <Button sx={{ fontFamily: 'Oswald, sans-serif', backgroundColor: '#FFCA2C', color: 'black' }}><ShoppingBagOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }} /> Add to cart</Button>
                                                    </Flip>
                                                </Box>
                                            </Box>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Container>
        </section>
    );
};

export default ExploreMenu;