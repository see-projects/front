import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 30px;
  background-color: #ffffff;
  padding: 0.5rem 0.7rem;
`;

export const SignUpInputText = styled.input`
  width: 100%;
  border: none;
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
