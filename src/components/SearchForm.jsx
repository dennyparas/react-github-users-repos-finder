import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MdSearch } from 'react-icons/md';

// method to overide material ui styles
const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 0, 3)
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  textField: {
    width: '80%'
  },
  button: {
    padding: '9px 24px',
    marginLeft: '9px'
  }
}));

const SearchForm = ({ location, history }) => {
  let params = new URLSearchParams(location.search);
  let searchParams = params.get('q');
  let typeParams = params.get('type');

  const [searchInput, setSearchInput] = useState(
    searchParams ? searchParams : ''
  );

  // assign usestyles to use in class styles
  const classes = useStyles();

  // method for controlled form
  const onChange = e => setSearchInput(e.target.value);

  const search = e => {
    e.preventDefault();
    if (searchInput && searchInput !== searchParams) {
      if (typeParams === null) typeParams = 'Users';
      history.push(`/search/?q=${searchInput}&type=${typeParams}`);
    }
  };

  useEffect(() => {
    setSearchInput(searchParams ? searchParams : '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div>
      {/* Searh Recipes Form */}
      <div className={classes.heroContent}>
        <Container maxWidth='lg'>
          <form className={classes.form} noValidate onSubmit={search}>
            <Grid container spacing={1} justify='center'>
              <Grid item xs={12} sm={12} align='center'>
                <TextField
                  autoComplete='gitSearch'
                  name='gitSearch'
                  variant='outlined'
                  required
                  align='left'
                  id='gitSearch'
                  label='Github User or Repository'
                  autoFocus
                  value={searchInput}
                  className={classes.textField}
                  onChange={e => onChange(e)}
                />
                <Button
                  size='large'
                  type='submit'
                  variant='contained'
                  color='default'
                  className={classes.button}
                  onClick={e => search(e)}
                >
                  <MdSearch size='1.7em' />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default withRouter(SearchForm);
