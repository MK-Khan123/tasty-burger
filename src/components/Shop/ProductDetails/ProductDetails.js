import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './ProductDetails.css';
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

const ProductDetails = () => {

    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/shop-tab/shop-tab_j7hrho.jpg';

    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        fetch(`https://morning-badlands-52849.herokuapp.com/productDetails/${id}`)
            .then(res => res.json())
            .then(data => setProductDetails(data));
    }, [id]);

    const { name, price, briefInfo, description, category, image, star, starCount } = productDetails;

    //To dynamically show the related products in related products section according to category
    useEffect(() => {
        fetch(`https://morning-badlands-52849.herokuapp.com/products/${category}`)
            .then(res => res.json())
            .then(data => setRelatedProducts(data));
    }, [category]);

    // const [relateProducts] = useState(fakeData.filter(pd => pd.category === category));
    const firstFewRelatedProducts = relatedProducts.slice(0, 4);

    //To show the ratings of the product dynamically, using FontAwesome Icon
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
                                <Box>
                                    <input className='input-design' type="number" defaultValue={1} min='1' />
                                    <Button
                                        sx={{
                                            fontFamily: 'Oswald, sans-serif',
                                            backgroundColor: '#FFCA2C',
                                            borderRadius: '0.5rem',
                                            color: 'black',
                                            marginLeft: '0.625rem'
                                        }}
                                    >
                                        <ShoppingBagOutlinedIcon sx={{ fontSize: '1.25rem', marginRight: '5px' }} /> Add to cart
                                    </Button>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>
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
                                        marginTop: '1.5rem',
                                        fontWeight: '300'
                                    }}
                                >
                                    {description}
                                </Box>
                            </Box>
                        </section>
                    </Container>
                </section>

                <section id='related-products'>
                    <Container>
                        <Box sx={{ paddingTop: '0.1rem', paddingBottom: '6rem' }}>
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    fontSize: '3.75rem',
                                    color: '#642F21'
                                }}
                                component='h5'
                            >
                                RELATED PRODUCTS
                            </Box>
                            <Grid container spacing={2} mt={3}>
                                <RelatedProducts firstFewRelatedProducts={firstFewRelatedProducts} />
                            </Grid>
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