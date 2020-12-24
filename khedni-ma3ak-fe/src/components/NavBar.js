import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";


function NavBar() {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container >
            <Grid item xs={3}>
              <Grid container justify="center">
                <Link to="/"><Button variant="contained" color="secondary">Home</Button></Link>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container justify="center">
              <Link to="/book-tour"><Button variant="contained" color="secondary">Book Tour</Button></Link>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container justify="center">
              <Link to="/about-us"><Button variant="contained" color="secondary">About Us</Button></Link>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container justify="center">
              <Link to="/contact-us"><Button variant="contained" color="secondary">Contact Us</Button></Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default NavBar;