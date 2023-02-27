import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from 'redux/contactSlice';
import { filterContactAction } from 'redux/filterSlice';
import s from '../ContactList/ContactStyle.module.scss';

export function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContactAction(contactId));
  };

  const onChangeFilter = e => {
    dispatch(filterContactAction(e.target));
  };

  const filteredContacts = () =>
    contacts.filter(item =>
      item.name.toLowerCase().trim().includes(filter.toLowerCase())
    );

  return (
    <ul className={s.list}>
      {filteredContacts(onChangeFilter).map(({ id, name, number }) => (
        <ContactItem
          onDeleteContact={onDeleteContact}
          key={id}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </ul>
  );
}

ContactList.prototype = {
  contacts: PropTypes.array.isRequired,
};
