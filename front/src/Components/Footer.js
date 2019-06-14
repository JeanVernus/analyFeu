import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { red } from "@material-ui/core/colors";
import "../CSS/Navbar.css";
import "../CSS/Footer.css";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function FooterBar() {
  const classes = useStyles();

  return (
    <div id={"FOOTER"}>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: red[900] }}>
          <Box order={2} alignItems={"flex-start"}>
            <Typography>
              <strong>
                ANALYFEU <br /> 9 Chemin de la clauvade <br /> 89390 CUERS
              </strong>
              <br />
              <strong>Tel : 06 06 06 06 06</strong>
            </Typography>
          </Box>
          <Box order={1} alignItems={"flex-end"}>
            <Typography>Test</Typography>
          </Box>
        </AppBar>
      </div>
    </div>
  );
}
