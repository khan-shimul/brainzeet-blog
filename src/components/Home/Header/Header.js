import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RegularButton from '../../../StyledComponent/RegularButton';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Header = () => {
    const theme = useTheme();
    const useStyles = makeStyles({
        navToggle: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navMenu: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
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

    const { navToggle, navMenu, logo, navDrawer } = useStyles();

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
                        News
                    </Typography>
                    <Box className={navMenu}>
                        <Button color="inherit">Get App</Button>
                        <Button color="inherit">Features</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">F.A.Q.</Button>
                        <Button color="inherit">Sign In</Button>
                        <RegularButton sx={{ p: 2, color: '#4a148c' }}>Sign Up</RegularButton>
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