import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FaGithub } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter, matchPath } from 'react-router';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1)
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    cursor: 'pointer'
  }
}));

const Navbar = ({ history, location }) => {
  const classes = useStyles();
  const isUserPathActive = !!matchPath(location.pathname, '/user/:login');
  const goToHome = () => {
    history.push(`/`);
  };
  return (
    <AppBar position='relative' color='primary'>
      <Container maxWidth='lg'>
        <Toolbar>
          <FaGithub size='1.5em' className={classes.icon} />
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            className={classes.title}
            onClick={() => goToHome()}
          >
            Github Finder
          </Typography>
          {isUserPathActive && (
            <Button onClick={() => history.goBack()} color='inherit'>
              Search
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withRouter(Navbar);
