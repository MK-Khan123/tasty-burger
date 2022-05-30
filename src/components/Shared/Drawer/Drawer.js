import { useState } from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import useRedux from '../../../hooks/useRedux';
import Typography from '@mui/material/Typography';
import EmptyCart from './EmptyCart/EmptyCart';

const TemporaryDrawer = () => {

    const [drawer, setDrawer] = useState(false);

    const { cartItems } = useRedux();

    const toggleDrawer = (anchor) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawer(anchor);
    };

    const list = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddShoppingCartRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Shopping Cart' />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />

            <EmptyCart />
            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <LocalMallIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
            {/* <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    return (
        <div>
            <Box
                sx={{
                    position: 'fixed',
                    bottom: '40%',
                    right: '2.5%',
                    opacity: '1',
                    borderRadius: '10px',
                    padding: '5px',
                    zIndex: '20',
                    backgroundColor: '#212121'
                }}
                onClick={toggleDrawer(true)}
            >
                <Badge badgeContent={cartItems.length} color="error">
                    <ShoppingCartCheckoutRoundedIcon sx={{ fontSize: '3rem', color: '#f2e8c6' }} />
                </Badge>
            </Box>
            <Drawer
                anchor={'right'}
                open={drawer}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );

};

export default TemporaryDrawer;