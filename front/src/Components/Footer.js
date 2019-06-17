import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
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
    <div className="boxFooterAlign">
      <div id={"FOOTER"}>
        <div className={classes.root}>
          <AppBar position="static" style={{ backgroundColor: red[900] }}>
            <Box >
              <Typography>
                <strong className="textCenter">
                  <span>AnalyFeu &nbsp;&nbsp;&nbsp;&nbsp;</span><span>9 Chemin de la clauvade&nbsp;&nbsp;</span><span> 89390 CUERS&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>Tel : 07 07 07 07 07&nbsp;&nbsp;&nbsp;&nbsp;</span><a href={"/contact"}>Nous Contacter</a>
                </strong>
              </Typography>
            </Box>
          </AppBar>
        </div>
      </div>
    </div>
  );
}
