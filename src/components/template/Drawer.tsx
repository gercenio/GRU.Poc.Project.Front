import { Link } from "react-router-dom";
import React from 'react';
import clsx from 'clsx';
import { Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, Select, MenuItem, Grid, useTheme, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListElement from './ListItemButton';
import { drawerStyle } from "./Style";
import MenuService from "../../service/MenuService";

const drawerWidth = 240;
const useStyles = drawerStyle(drawerWidth);

export default function MiniDrawer(props:any) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const menuElements = MenuService.getAll();


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Box fontWeight="fontWeightBold">
            <img src={process.env.PUBLIC_URL + 'logo.png'} alt="Logo"/>
          </Box>
          
          <Grid container justify="flex-end" >
            <Select labelId="cia" value={0}  id="select-cia" >
              <MenuItem value={0}>CIA 1</MenuItem>
              <MenuItem value={1}>CIA 2</MenuItem>
              <MenuItem value={2}>CIA 3</MenuItem>
            </Select>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon style={{ color: '#BFD730' }}/> : <ChevronLeftIcon style={{ color: '#BFD730' }}/>}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuElements.map((element, index) => (
            <div>
              <Link to={element.url} className={classes.link}>
                <ListElement name={element.name} icon={element.icon}/>
              </Link>
            </div>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
