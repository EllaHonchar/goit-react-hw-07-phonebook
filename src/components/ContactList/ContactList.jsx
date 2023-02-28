import { ContactItem } from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact, fetchContacts } from 'redux/contactSlice';

// import { filterContact } from 'redux/filterSlice';
import s from '../ContactList/ContactStyle.module.scss';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operation';

export function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  // const contacts = [];
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
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
