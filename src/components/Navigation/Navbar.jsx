import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Container, 
  Box, 
  Hidden, 
  IconButton,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemText } from '@material-ui/core';
import { 
  Menu,
  Inbox as InboxIcon,
 } from '@material-ui/icons'



import andelaLogo from '../../assets/Andela-logo@2x.png';



const useStyle = makeStyles(theme => ({
  appBar: {
    background: 'rgb(16, 16, 138)',
    zIndex: 3000,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)

  },
  toolbarMargin: {
    height: theme.mixins.toolbar,
    marginBottom: '4em'
  },
  navBarLogo: {
    width: '120px',
    border: 0,
    marginRight: '2rem'
  },
  tab: {
    minWidth: 10,
    marginLeft: '10px',
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    fontSize: '1em',
    textTransform: 'capitalize',
    opacity: 1,
    transition: 'color .3s ease-in',
    '&:hover': {
      color: theme.palette.common.Yellow,
    },
    '&:active': {
      // color: theme.palette.common.Yellow,
      transform: `translateY(-1px)`,
    }
     
  },
  getStarted: {
    ...theme.typography.getStarted,

    marginLeft: 'auto',
    '&:hover': {
      background: '#fff',
      color: theme.palette.common.Yellow,
    }
  },
  drawerIconContainer: {
    marginLeft: 'auto',
  },
  drawerIcon: {
    color: '#fff',
    width: '40px',
    height: '40px',
    
  },
 
}))

function ElevationScroll(props) {

  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}



function Navbar() {

  const [value, setValue] = React.useState(0);
  // const [anchor, setAnchor] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleChange = (e, value) => {
    setValue(value);

  };

  const classes = useStyle()
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Container maxWidth='xl'>
            <Toolbar className={classes.toolBar} disableGutters>
              <Button variant='text'>
                <img src={`${andelaLogo}`} alt="andela logo" className={classes.navBarLogo}/>
              </Button>
              <Hidden mdDown>
                <Tabs value={value} onChange={handleChange} aria-label="simple-tab"
                indicatorColor={`rgb(0, 0, 255)`}>
                  <Tab label="Services" className={classes.tab}/>
                  <Tab label="Case Studies" className={classes.tab}/>
                  <Tab label="Resources" className={classes.tab}/>
                  <Tab label="Blog" className={classes.tab}/>
                  <Tab label="About" className={classes.tab}/>
                </Tabs>
                <Button variant='contained' className={classes.getStarted}>
                  get started
                </Button>
              </Hidden>

              <Hidden lgUp>
                <IconButton 
                disableRipple
                className={classes.drawerIconContainer}
                onClick={() => {open ? setOpen(false) : setOpen(true)}}>
                  <Menu className={classes.drawerIcon}/>
                </IconButton>
              </Hidden> 
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Box className={classes.toolbarMargin}/>
      <Drawer 
        anchor='top' 
        open={open} 
        onClose={() => setOpen(false)}
        className={classes.drawer}
      >
        <Box className={classes.toolbarMargin}/>
        <List component="nav" aria-label="main mailbox folders" disableGutters disablePadding>
          
          <ListItem
            button
            selected={selectedIndex === 0} 
          >
            <ListItemText primary="Inbox" />
          </ListItem> 
        </List>
      </Drawer>

    </React.Fragment>
  )
}

export default Navbar;



