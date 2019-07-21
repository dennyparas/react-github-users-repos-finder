import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import UserItem from './UserItem';
import Spinner from './Spinner';
import SortSelector from './SortSelector';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

// method to overide material ui styles
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(3)
  }
}));

const UserList = ({ github }) => {
  const classes = useStyles();

  const userSortOptions = [
    {
      name: 'Best Match',
      value: ''
    },
    {
      name: 'Most Followers',
      value: 'follower'
    },
    {
      name: 'Most Repositories',
      value: 'repositories'
    },
    {
      name: 'Recently Joined',
      value: 'joined'
    }
  ];

  if (github.loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Container className={classes.cardGrid} maxWidth='lg'>
          {!github.loading && github.users.length !== 0 && (
            <Grid container spacing={4} justify='center'>
              <Grid item xs={6} sm={6} align='left'>
                <Typography variant='h5' style={{ marginTop: '20px' }}>
                  {github.usersTotal} Users
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} align='right'>
                <SortSelector options={userSortOptions} />
              </Grid>
            </Grid>
          )}
          <Grid container spacing={4} justify='center'>
            {github.users.map(user => (
              <UserItem key={user.id} user={user} />
            ))}
          </Grid>
        </Container>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  github: state.github
});

export default connect(
  mapStateToProps,
  null
)(withRouter(UserList));
