import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { Button, Input, Label, StyledForm } from './ContactForm.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});
const defaultValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmitForm = (values, action) => {
    onSubmit(values);
    action.resetForm();
  };

  return (
    <Formik 
    initialValues={defaultValues}
    validationSchema={schema} 
    onSubmit={handleSubmitForm}>
      <StyledForm>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            id="name"/>
          <ErrorMessage name="name" component="div" />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            id="number"/>
          <ErrorMessage name="number" component="div" />
        </Label>
        <Button type="submit">Add Contact</Button>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};