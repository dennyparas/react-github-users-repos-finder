import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { getUser } from '../actions/github';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import RepoItem from '../components/RepoItem';
import Spinner from '../components/Spinner';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 200,
    height: 200
  },
  userInfo: {
    marginTop: 20,
    marginBottom: 20
  },
  margin: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10
  }
});

const User = ({ match, getUser, currentUser, currentUserRepos, loading }) => {
  const classes = useStyles();
  useEffect(() => {
    getUser(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <Container className={classes.userInfo} maxWidth='md'>
        <Grid container spacing={1} justify='center'>
          <Grid item xs={12} sm={12}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={12} sm={5} align='center'>
                    <Avatar
                      alt={currentUser.login}
                      src={currentUser.avatar_url}
                      className={classes.avatar}
                    />
                    {currentUser.name ? (
                      <h3> {currentUser.name}</h3>
                    ) : (
                      <h3> {currentUser.login}</h3>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Button
                      variant='contained'
                      size='small'
                      href={currentUser.html_url}
                      className={classes.margin}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Visit Github Profile
                    </Button>
                    {currentUser.bio && <p>{currentUser.bio} </p>}
                    {currentUser.location && (
                      <p>
                        <strong>Location:</strong> {currentUser.location}
                      </p>
                    )}
                    {currentUser.company && (
                      <p>
                        <strong>Company:</strong> {currentUser.company}
                      </p>
                    )}
                    {currentUser.blog && (
                      <p>
                        <strong>Blog:</strong> {currentUser.blog}
                      </p>
                    )}

                    <Button
                      variant='contained'
                      size='small'
                      color='primary'
                      className={classes.margin}
                    >
                      Followers : {currentUser.followers}
                    </Button>
                    <Button
                      variant='contained'
                      size='small'
                      color='secondary'
                      className={classes.margin}
                    >
                      Repos : {currentUser.public_repos}
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={4} justify='center'>
          {currentUserRepos.map(repo => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  loading: state.github.loading,
  currentUser: state.github.currentUser,
  currentUserRepos: state.github.currentUserRepos
});

export default connect(
  mapStateToProps,
  { getUser }
)(User);
