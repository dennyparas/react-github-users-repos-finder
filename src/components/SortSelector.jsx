import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const SortSelector = ({ options, history, location }) => {
  const classes = useStyles();
  let params = new URLSearchParams(location.search);
  let searchParams = params.get('q');
  let typeParams = params.get('type');
  let sortParams = params.get('s');

  const [values, setValues] = useState(
    sortParams ? { sort: `${sortParams}` } : { sort: '' }
  );

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues
    }));
    if (typeParams === null) typeParams = 'Users';

    history.push(
      `/search/?q=${searchParams}&type=${typeParams}&s=${event.target.value}`
    );
  };

  useEffect(() => {
    setValues(oldValues => ({ ...oldValues }));
  }, [sortParams]);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor='sort-label-placeholder'>
        Sort
      </InputLabel>
      <Select
        className={classes.selectEmpty}
        displayEmpty
        align='left'
        value={values.sort}
        onChange={handleChange}
        input={<Input name='sort' id='sort-label-placeholder' />}
      >
        {options.map((option, i) => (
          <MenuItem key={i} value={option.value}>
            <em>{option.name}</em>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default withRouter(SortSelector);
