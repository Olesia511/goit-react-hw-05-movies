import { useSearchParams } from 'react-router-dom';

import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonForm,
  ErrMsg,
  FormMovieSearch,
  InputForm,
  LabelForm,
} from './Form.styled';

const formSchema = Yup.object().shape({
  query: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const FormMovie = ({ submit }) => {
  const [, setSearchParams] = useSearchParams();

  return (
    <div>
      <Formik
        initialValues={{ query: '' }}
        validationSchema={formSchema}
        onSubmit={(initialValues, actions) => {
          const { query } = initialValues;

          if (query) {
            setSearchParams({ query });
            submit(query);
            actions.resetForm();
          }
        }}
      >
        <FormMovieSearch>
          <LabelForm>
            <InputForm
              name="query"
              placeholder="Movie title"
              type="text"
              required
            />
            <ErrMsg name="query" component="span" />
          </LabelForm>

          <ButtonForm type="submit">Search</ButtonForm>
        </FormMovieSearch>
      </Formik>
    </div>
  );
};
