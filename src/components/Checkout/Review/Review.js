import { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import useReduxState from '../../../hooks/useReduxState';


const Review = () => {

    const { checkoutData } = useReduxState();

    const { name, address, card_details, products_ordered, total_paid } = checkoutData || {};

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {products_ordered?.map((product) => (
                    <ListItem key={product._id} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {total_paid}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>{name}</Typography>
                    <Typography gutterBottom>{address?.address_line}, {address?.city} - {address?.zip_code}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        <Fragment>
                            {/* CARD BRAND */}
                            <Grid item xs={6}>
                                <Typography gutterBottom>Card Brand</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography textTransform='uppercase' gutterBottom>{card_details?.card_brand}</Typography>
                            </Grid>

                            {/* NAME ON CARD */}
                            <Grid item xs={6}>
                                <Typography gutterBottom>Name on Card</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>{card_details?.name_on_card}</Typography>
                            </Grid>

                            {/* LAST 4 DIGIT OF THE CARD NUMBER */}
                            <Grid item xs={6}>
                                <Typography gutterBottom>Card Number</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>xxxx-xxxx-xxxx-{card_details?.card_number}</Typography>
                            </Grid>

                            {/* EXPIRATION DATE */}
                            <Grid item xs={6}>
                                <Typography gutterBottom>Expiry Date</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom>{card_details?.card_expiration}</Typography>
                            </Grid>
                        </Fragment>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Review;
