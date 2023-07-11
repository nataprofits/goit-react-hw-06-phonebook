
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import {Container, Title, Div} from './App.styled';

export default function App () {

  return (
    <Container>
      <Div>
      <Title>Phonebook</Title>
      <ContactForm />
      </Div>
      <Div>
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Div>
    </Container>
  );
};
