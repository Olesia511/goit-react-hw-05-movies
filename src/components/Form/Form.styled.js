import styled from 'styled-components';

import { ErrorMessage, Field, Form } from 'formik';

export const ErrMsg = styled(ErrorMessage)`
  color: ${props => props.theme.colors.burgundy};
  background-color: ${props => props.theme.colors.brown};
  opacity: 0.8;
  font-size: 20px;
  padding: ${p => p.theme.spacing(1)};
  width: auto;
  border-radius: ${props => props.theme.radii.md};
`;

export const InputForm = styled(Field)`
  padding: ${p => p.theme.spacing(3)};
  font: inherit;
  font-weight: 600;
  font-size: 28px;
  border-radius: ${props => props.theme.radii.md};
  height: 100%;

  &::placeholder {
    color: ${props => props.theme.colors.orange};
    opacity: 0.5;
  }
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  gap: ${p => p.theme.spacing(5)};
  background-color: ${props => props.theme.colors.brown};
`;

export const FormMovieSearch = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(10)};
`;

export const ButtonForm = styled.button`
  width: auto;
  height: auto;
  padding-top: ${p => p.theme.spacing(3)};
  padding-bottom: ${p => p.theme.spacing(3)};
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};
  white-space: nowrap;
  border-radius: ${props => props.theme.radii.md};
  font-size: 20px;
  font-weight: 600;

  &:hover {
    background-color: ${p => p.theme.colors.burgundy};
    color: ${p => p.theme.colors.orange};
  }
`;
