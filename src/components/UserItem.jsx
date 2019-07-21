import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  avatar: {
    margin: 10,
    width: 100,
    height: 100
  }
}));

const UserItem = ({ user }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={3} align='center'>
      <Card>
        <CardContent>
          <Avatar
            alt={user.login}
            src={user.avatar_url}
            className={classes.avatar}
          />
          <h3> {user.login}</h3>
          <Button
            variant='contained'
            size='medium'
            color='primary'
            className={classes.margin}
            component={Link}
            to={`/user/${user.login}`}
          >
            More Info
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserItem;
