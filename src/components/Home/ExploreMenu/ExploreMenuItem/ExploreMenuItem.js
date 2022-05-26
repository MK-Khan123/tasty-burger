import React, { useEffect, useState } from 'react';
import Flip from 'react-reveal/Flip';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ExploreMenuItem = ({ burger, cartItems, handleAddToCart }) => {

    const { name, image, briefInfo, price, _id } = burger;

    const [productAdded, setProductAdded] = useState(false);

    //Once a product is added a different button will appear indicating the product is added on cart.
    useEffect(() => {
        const pd = cartItems.find(pd => pd._id === _id)
        if (pd) {
            setProductAdded(true);
        }
    }, [_id, cartItems]);

    return (
        <Grid item key={_id} sm={6} md={4} lg={3} className="main-menu-card-body">
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
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
                        <Typography sx={{ fontFamily: 'Roboto, sans-serif' }} variant="body1" color="text.secondary">
                            {briefInfo}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: '#642F21',
                                color: '#F7BE27',
                                fontWeight: '500',
                                '&:hover': {
                                    backgroundColor: '#56423D'
                                }
                            }}
                        >
                            $ {price}
                        </Button>
                        <Box className="main-menu-cart-button">
                            <Flip left>
                                {
                                    productAdded ?
                                        <Button
                                            sx={{ fontWeight: "400" }}
                                            variant='contained'
                                            color="success"
                                        >
                                            Product Added !
                                        </Button> :
                                        <Button
                                            onClick={() => handleAddToCart(burger)}
                                            variant='contained'
                                            sx={{
                                                backgroundColor: '#FFCA2C',
                                                color: 'black',
                                                '&:hover': {
                                                    backgroundColor: '#FFCA2C'
                                                }
                                            }}
                                        >
                                            <ShoppingBagOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }} />
                                            Add to cart
                                        </Button>
                                }
                            </Flip>
                        </Box>
                    </Box>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ExploreMenuItem;