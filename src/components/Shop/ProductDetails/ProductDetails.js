import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import Footer from '../../Shared/Footer/Footer';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Grid } from '@mui/material';
import useReduxState from '../../../hooks/useReduxState';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import './ProductDetails.css';

const ProductDetails = () => {

    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/shop-tab/shop-tab_j7hrho.jpg';

    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { handleAddToCart, cartItems } = useReduxState();

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://morning-badlands-52849.herokuapp.com/productDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setProductDetails(data)
                setIsLoading(false);
            });
    }, [id]);

    const { name, price, briefInfo, description, category, image, star, starCount } = productDetails;

    //To dynamically show the related products in related products section according to category
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://morning-badlands-52849.herokuapp.com/products/${category}`)
            .then(res => res.json())
            .then(data => {
                setRelatedProducts(data)
                setIsLoading(false);
            });
    }, [category]);

    const firstFewRelatedProducts = relatedProducts.slice(0, 4);

    //To show the ratings of the product dynamically, using MUI Icon
    let ratedStars = [];
    for (let i = 1; i <= star; i++) {
        ratedStars.push(<StarRoundedIcon sx={{ color: '#FFC107' }} />);
    }

    return (
        <section id='product-details'>
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
                    height: '26rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{ fontSize: '4rem', color: 'white', textAlign: 'center', fontWeight: '500' }} component='h5'>PRODUCT DETAILS</Box>
                </Box>

                <section id='product-description'>
                    <Container>
                        {
                            isLoading ? (
                                <Box mt={8}>
                                    <LoadingSpinner />
                                </Box>
                            ) : (
                                <Fragment>
                                    <Grid container columnSpacing={3}>
                                        <Grid item xs={12} md={7} mt={5}>
                                            <img style={{ borderRadius: '0.625rem', margin: 'auto' }} className='image-responsive' src={image} alt="" />
                                        </Grid>
                                        <Grid item xs={12} md={5} mt={7} className="product-description-typography">
                                            <h4>{name}</h4>
                                            <h5>$ {price}</h5>
                                            <p><span>{ratedStars}</span>({starCount} customer review)</p>
                                            <p>{briefInfo}</p>
                                            <p>Category: <Box sx={{ textTransform: 'capitalize' }} component='span'>{category}</Box></p>
                                            <Button
                                                sx={{
                                                    borderRadius: '0.5rem',
                                                    color: 'black',
                                                    backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,209,67,1) 0%, rgba(255,145,83,1) 90% )'
                                                }}
                                            >
                                                <ShoppingBagOutlinedIcon sx={{ fontSize: '1.25rem', marginRight: '5px' }} /> Add to cart
                                            </Button>
                                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
                                                <Box sx={{ fontWeight: '600', color: '#6C757D', fontSize: '1.2rem' }}>Share this: </Box>
                                                <Box>
                                                    <FacebookRoundedIcon
                                                        className='product-description-icons'
                                                        sx={{ '&:hover': { color: '#4867AA', cursor: 'pointer' } }}
                                                    />
                                                    <TwitterIcon
                                                        className='product-description-icons'
                                                        sx={{ '&:hover': { color: '#179CF0', cursor: 'pointer' } }}
                                                    />
                                                    <WhatsAppIcon
                                                        className='product-description-icons'
                                                        sx={{ '&:hover': { color: '#24C761', cursor: 'pointer' } }}
                                                    />
                                                    <PinterestIcon
                                                        className='product-description-icons'
                                                        sx={{ '&:hover': { color: '#BE0216', cursor: 'pointer' } }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>

                                    <section>
                                        <Box>
                                            <Box
                                                component='h5'
                                                sx={{
                                                    marginBottom: 0,
                                                    marginTop: '1.5rem',
                                                    color: '#642F21',
                                                    fontSize: '2rem'
                                                }}
                                            >
                                                Description
                                            </Box>
                                            <Box
                                                component='p'
                                                sx={{
                                                    fontFamily: 'Roboto, sans-serif',
                                                    color: '#6C757D',
                                                    lineHeight: '1.5',
                                                    fontWeight: '300'
                                                }}
                                            >
                                                {description}
                                            </Box>
                                        </Box>
                                    </section>
                                </Fragment>
                            )
                        }
                    </Container>
                </section>

                <section id='related-products'>
                    <Container>
                        <Box sx={{ paddingTop: '0.1rem', paddingBottom: '6rem' }}>
                            <Box
                                component='h5'
                                sx={{
                                    marginY: '3rem',
                                    textAlign: 'center',
                                    fontSize: '3.75rem',
                                    color: '#642F21',
                                    fontWeight: '500',
                                    lineHeight: '1.2'
                                }}
                            >
                                RELATED PRODUCTS
                            </Box>
                            {
                                isLoading ? <LoadingSpinner /> :
                                    <Grid container spacing={2} mt={3}>
                                        {
                                            firstFewRelatedProducts?.map(foodItem =>
                                                <RelatedProducts
                                                    key={foodItem._id}
                                                    foodItem={foodItem}
                                                    cartItems={cartItems}
                                                    handleAddToCart={handleAddToCart}
                                                />)
                                        }
                                    </Grid>
                            }

                        </Box>
                    </Container>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default ProductDetails;