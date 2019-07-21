import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// method to overide material ui styles
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const Spinner = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth='lg'>
      <Grid container spacing={4} justify='center'>
        <Grid item xs={3} align='center'>
          <CircularProgress disableShrink />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Spinner;
