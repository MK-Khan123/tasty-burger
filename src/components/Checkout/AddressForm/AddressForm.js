import { Fragment, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const AddressForm = ({ checkoutData, handleCheckoutData }) => {

    const { name, address } = checkoutData || {};

    const [addressCollector, setAddressCollector] = useState({
        address_line: '',
        zip_code: '',
        city: ''
    });

    const handleAddressUpdate = (value, property) => {
        const updatedValue = value;
        const updateAddressProperty = { ...addressCollector, [property]: updatedValue };
        setAddressCollector(updateAddressProperty);
        handleCheckoutData(addressCollector, 'address');
    }

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        value={name}
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleCheckoutData(event.target.value, 'name')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        value={address?.address_line}
                        label="Address line"
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleAddressUpdate(event.target.value, 'address_line')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        value={address?.city}
                        label="City"
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleAddressUpdate(event.target.value, 'city')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        value={address?.zip_code}
                        label="Zip / Postal code"
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleAddressUpdate(event.target.value, 'zip_code')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="primary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default AddressForm;