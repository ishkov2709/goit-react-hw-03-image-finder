import { Formik } from 'formik';
import {
  Wrapper,
  SerchForm,
  Label,
  Input,
  Btn,
  BtnLabel,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const handleSumbit = ({ search }, actions) => {
    onSubmit(search.toLowerCase());

    actions.resetForm();
  };

  return (
    <Wrapper>
      <Formik initialValues={{ search: '' }} onSubmit={handleSumbit}>
        <SerchForm>
          <Btn type="submit">
            <BtnLabel />
          </Btn>
          <Label>
            <Input
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            ></Input>
          </Label>
        </SerchForm>
      </Formik>
    </Wrapper>
  );
};

export default Searchbar;
