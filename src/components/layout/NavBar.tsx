import React, {useContext} from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Drawer,
  useTheme
} from '@material-ui/core';
import { 
  ChevronLeft,
  ChevronRight,
  Menu,
  Search,
  ShoppingCart
} from "@material-ui/icons";
import clsx from 'clsx';

import { themeContext } from '../../context/Context'
import fetchStoreData from '../../StoreData/StoreData';
import ButtonList from '../../context/ButtonList';
import useStyles from './style';


export default function NavBar(props) {
  const classes = useStyles();
  const products = fetchStoreData();
  const themes = useTheme();
  const [open, setOpen] = React.useState(false);
  const [customTheme, setCustomTheme] = useContext(themeContext)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleOnChange(event) {
    props.onSearchValue(event.target.value);
  }

  let appBar
  if (customTheme) {
    appBar = {
      backgroundColor: `${customTheme.backgroundColor}`,
      color: `${customTheme.textColor}`
    }
  }
  return (
    <div className={classes.grow}>
      <AppBar position="fixed"
        style={appBar}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerOpen}
            color="inherit"
            aria-label="open drawer"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Country Table
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleOnChange}
            />
          </div>
          <div className={classes.grow} />
          <div>
            <IconButton
              aria-label={`show ${products.length} new notifications`}
              color="inherit"
            >
              <Badge badgeContent={products.length} color="error">
                <ShoppingCart
                  onClick={event => window.location.href = '/cart'}
                />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {themes.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <ButtonList />
      </Drawer>
    </div>
  );

}
