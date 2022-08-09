import React from 'react';
import PropTypes from 'prop-types';
function ContactList({ contactsArray, onDelete }) {
  return (
    <ul>
      {contactsArray.map(({ name, number, id }) => {
        return (
          <li key={number}>
            <p>
              {name}:{number}
            </p>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};
export default ContactList;
