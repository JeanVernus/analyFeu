import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {red} from "@material-ui/core/colors";
import '../CSS/Navbar.css'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBarMaterial() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor: red[900]}} >
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <a href={'/'} className={"LINK_HOVER"} color={"inherit"}>
              Analyfeu
              </a>
            </Typography>
            <Button className={"LINK_HOVER"} href={"/contact"} color="inherit">Références contact</Button>
            <Button href={"/formation"} color="inherit">Formations</Button>
            <Button href={"/bureauSSI"} color="inherit">Bureau d'étude/Coordination SSI</Button>
          </Toolbar>
        </AppBar>
      </div>
  );
}
