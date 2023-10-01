import styled from '@emotion/styled';
import { Field, Form } from 'formik';

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;



 const SearchInput = styled(Field)`
  width: 200px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  padding: 10px;
  margin-right: 10px;
  ::placeholder {
    font-size: 16px;
    color: #aaa;
  }
`;

const SearchButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  font-size: 20px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  background-color: #fff;
  color: #333;
  &:hover,
  :focus,
  :active {
    background-color: skyblue;
    color: white;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 16px;
  padding: 5px;
`;

export { StyledForm, SearchInput, SearchButton, ErrorText };
