import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Header = () => {
    const theme = useTheme();
    const useStyles = makeStyles({
        singUpButton: {
            background: '#fff !important',
            color: '#482BE7 !important',
            padding: '7px 15px !important',
            borderRadius: '100px !important',
            fontWeight: '600 !important',
            marginLeft: '12px !important'
        },
        navToggle: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navMenu: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: '40px'
            },
        },
        logo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        },
        navDrawer: {
            [theme.breakpoints.down('sm')]: {
                background: 'red !important'
            }
        }
    });

    const { singUpButton, navToggle, navMenu, logo, navDrawer } = useStyles();

    // mobile nav drawer
    const [toggle, setToggle] = React.useState(false);
    const list = (
        <Box
            sx={{ width: 200 }}
            role="presentation"
        >
            <List>
                <ListItem button >
                    <ListItemText>Get App</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText>Features</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText>About</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText>F.A.Q.</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText>Sign In</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText>Sign Up</ListItemText>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ background: 'transparent', boxShadow: "none" }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        className={navToggle}
                        onClick={() => setToggle(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={logo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {/* Logo */}
                    </Typography>
                    <Box className={navMenu}>
                        <Button color="inherit" sx={{ fontWeight: 500 }}>Get App</Button>
                        <Button color="inherit" sx={{ fontWeight: 500 }}>Features</Button>
                        <Button color="inherit" sx={{ fontWeight: 500 }}>About</Button>
                        <Button color="inherit" sx={{ fontWeight: 500 }}>F.A.Q.</Button>
                        <Button color="inherit" sx={{ fontWeight: 500 }}>Sign In</Button>
                        <Button className={singUpButton}>Sign Up</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <div>
                <React.Fragment>
                    <Drawer
                        // className={navDrawer}
                        open={toggle}
                        onClose={() => setToggle(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </Box>
    );
};

export default Header;