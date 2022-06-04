import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import useReduxState from '../../../hooks/useReduxState';
import ExploreMenuItem from './ExploreMenuItem/ExploreMenuItem';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

//All the custom CSS class is used from ActiveFoodItem.css under the MainMenu component. The styling is identical, hence I didn't make separate classes for the same styling for this component.

const ExploreMenu = () => {

    const { handleAddToCart, cartItems } = useReduxState();
    const [burgerData, setBurgerData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //For fetching data on few selected burgers on home page
    useEffect(() => {
        setIsLoading(true);
        fetch('https://morning-badlands-52849.herokuapp.com/filteredBurger')
            .then(res => res.json())
            .then(data => {
                setBurgerData(data)
                setIsLoading(false);
            });
    }, []);

    return (
        <section id='explore-menu'>
            <Container>
                <Box component='h5'
                    sx={{
                        textAlign: 'center',
                        fontWeight: '500',
                        marginBottom: '1.5rem',
                        marginTop: '4.375rem',
                        lineHeight: '1.2',
                        fontSize: '3.75rem',
                        color: '#E3000E'
                    }}
                >
                    EXPLORE OUR MENU
                </Box>
                <Box component='p'
                    sx={{
                        fontFamily: 'Roboto, sans-serif',
                        paddingX: { xs: '10%', md: '20%' },
                        fontWeight: '300',
                        fontSize: '1.1rem',
                        color: '#778899',
                        textAlign: 'center',
                        marginBottom: '4rem'
                    }}
                >
                    Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna
                </Box>

                {
                    isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        <Grid container spacing={3}>
                            {burgerData.map(burger =>
                                <ExploreMenuItem
                                    key={burger._id}
                                    burger={burger}
                                    cartItems={cartItems}
                                    handleAddToCart={handleAddToCart}
                                />
                            )}
                        </Grid>
                    )
                }
            </Container>
        </section>
    );
};

export default ExploreMenu;