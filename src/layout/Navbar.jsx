import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FaGithub } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';

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

const Navbar = ({ history }) => {
  const classes = useStyles();
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withRouter(Navbar);
