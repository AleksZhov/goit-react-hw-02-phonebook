import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div>
    <p>Find contacts by name</p>
    <input name="filter" value={value} onChange={onChange}></input>
  </div>
);
Filter.propTypes = {
  value: PropTypes.string,
  onchange: PropTypes.func,
};

export default Filter;
