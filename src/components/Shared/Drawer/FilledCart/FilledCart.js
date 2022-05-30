import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import './FilledCart.css';

const FilledCart = ({ product, handleRemoveFromCart, handleAddQuantity, handleReduceQuantity }) => {

    const { name, image, price, quantity, _id } = product;

    return (
        <>
            <Box
                my={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}
            >
                <Box>
                    <img src={image} className='drawer-cart-image' alt={name} />
                </Box>
                <Box>
                    <Typography variant="body1">
                        {name}
                    </Typography>
                    <Typography variant="caption" display="block">
                        $ {price} x {quantity}
                    </Typography>
                    <Typography variant="body1" component="div">
                        $ {(price * quantity).toFixed(2)}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #706c61',
                        borderRadius: '5px'
                    }}
                >
                    <RemoveRoundedIcon
                        fontSize='small'
                        onClick={() => handleReduceQuantity(_id)}
                        sx={{
                            paddingRight: '5px',
                            '&:hover': { color: 'red' },
                            cursor: 'pointer'
                        }}
                    />
                    {quantity}
                    <AddRoundedIcon
                        fontSize='small'
                        onClick={() => handleAddQuantity(_id)}
                        sx={{
                            paddingLeft: '5px',
                            '&:hover': { color: '#a7d129' },
                            cursor: 'pointer'
                        }}
                    />
                </Box>
                <Box>
                    <DeleteOutlineRoundedIcon
                        onClick={() => handleRemoveFromCart(_id)}
                        sx={{ fontSize: '1.5rem', color: '#525252', '&:hover': { color: '#DC3545', cursor: 'pointer' } }}
                    />
                </Box>
            </Box>
            <Divider />
        </>
    );
};

export default FilledCart;