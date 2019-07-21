import React, { Fragment, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// method to overide material ui styles
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  chip: {
    marginLeft: theme.spacing(2)
  }
}));

const TypeSelector = ({ github, history, location }) => {
  const classes = useStyles();

  let params = new URLSearchParams(location.search);
  let searchParams = params.get('q');
  let typeParams = params.get('type');

  const [active, setActive] = useState('Users');

  const selectType = type => {
    if (type !== active) {
      setActive(type);
      history.push(`/search/?q=${searchParams}&type=${type}`);
    }
  };

  useEffect(() => {
    setActive(typeParams ? typeParams : 'Users');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeParams]);

  return (
    <Fragment>
      {github.usersTotal || github.reposTotal ? (
        <Container className={classes.cardGrid} maxWidth='lg'>
          <Grid container spacing={4} justify='center'>
            <Grid item xs={12} sm={8} align='center'>
              <ButtonGroup
                fullWidth
                aria-label='Full width outlined button group'
              >
                <Button
                  onClick={() => selectType('Users')}
                  className={active === 'Users' ? 'sActive' : 'sInactive'}
                >
                  Users
                  <Chip
                    size='small'
                    label={github.usersTotal}
                    className={classes.chip}
                  />
                </Button>
                <Button
                  onClick={() => selectType('Repositories')}
                  className={
                    active === 'Repositories' ? 'sActive' : 'sInactive'
                  }
                >
                  Repositories
                  <Chip
                    size='small'
                    label={github.reposTotal}
                    className={classes.chip}
                  />
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Container>
      ) : (
        ''
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  github: state.github
});

export default connect(
  mapStateToProps,
  null
)(withRouter(TypeSelector));
