import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FaGithub } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1)
  },
  appbarColor: {
    backgroundColor: '#FF4500'
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none'
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='relative' className={classes.appbarColor}>
      <Container maxWidth='lg'>
        <Toolbar>
          <FaGithub size='1.5em' className={classes.icon} />
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            className={classes.title}
            component={Link}
            to='/'
          >
            Github Finder
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
