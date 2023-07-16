import style from './ContactForm.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [contactName, setcontactName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.some(({ name }) => name === contactName)) {
      window.alert(`${contactName} is already in your contacts`);
      return;
    }
    dispatch(
      addContact({
        name: contactName,
        number,
      })
    );

    setcontactName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setcontactName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <div className={style.contactform}>
      <form type="submit" onSubmit={handleSubmit}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={contactName}
          />
        </label>
        <label className={style.label}>
          Number
          <input
            className={style.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>

        <button type="submit" className={style.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
