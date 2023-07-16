import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectStatusFilter } from 'redux/selectors';
import style from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectStatusFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name} : {number}
          </p>
          {
            <button
              className={style.button}
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

ContactList.protoTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
