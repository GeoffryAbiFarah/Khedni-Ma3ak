import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  Input: {
    position: "absolute",
    borderRadius: 4,
    border: '1px solid #ced4da',
    textAlign: 'center',
  },
}));


export default function CenteredGrid() {
  const classes = useStyles();



  return (
    <div className={classes.root} id="contact"> 
      <Grid container spacing={3}>
        <Grid item xs={11}>
          <p><b>If you need any more information please contact us by filling this form!</b></p>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={3}>
            <label>First name:</label>
          </Grid>
          <Grid >
            <Input defaultValue="" inputProps={{ 'aria-label': 'description' }} />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={3}>
            <label>Last name:</label>
          </Grid>
          <Grid >
            <Input defaultValue="" inputProps={{ 'aria-label': 'description' }} />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={3}>
            <label>Email:</label>
          </Grid>
          <Grid >
            <Input defaultValue="" inputProps={{ 'aria-label': 'description' }} />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={3}>
            <label>Description:</label>
          </Grid>
          <Box width="30 %">
            <TextField
              placeholder="Tell us what you need!"
              multiline
              rows={5}
              rowsMax={10}

            />
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={3}>
          <Button type="submit" variant="contained" >
            Submit!
          </Button>
          <hr/>

        </Grid>
      </Grid>


    </div>

  );
}



