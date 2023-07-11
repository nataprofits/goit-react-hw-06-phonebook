import PropTypes from 'prop-types';
import { List,ListItem, Button } from './ContactItem.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ contact }) => {
  
  const dispatch = useDispatch();

  return (
    <List>
      <ListItem key={contact.id}>
        {contact.name}: {contact.number}
        <Button
          onClick={() => {
            dispatch(deleteContact(contact.id));
          }}
        >
          Delete
        </Button>
      </ListItem>
    </List>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};