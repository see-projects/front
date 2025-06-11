import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, EmailLoginButton, Wrapper } from '../login/Login.styled';
import SignUpInput from '../../components/common/input/SignUpInput';

export const SignUpContainer = styled(Container)``;

export const SignUpWrapper = styled(Wrapper)`
  max-width: 470px;
  max-height: 700px;
  padding: 30px;
`;

export const PreviousArea = styled(Link)`
  display: flex;
`;

export const BackArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Back = styled.p`
  margin-left: 3px;
  opacity: 60%;
`;

export const BackToPrevious = styled.img`
  opacity: 60%;
`;

export const ContentArea = styled.form`
  padding: 30px;
`;

export const InputContainer = styled.div`
  margin-bottom: 50px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const InputArea = styled.div`
  padding-bottom: 4px;
`;

export const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const Input = styled(SignUpInput)``;

export const ErrorTextArea = styled.div`
  position: absolute;
  top: calc(100%);
  left: 0;
  margin: 0 0 4px 10px;
`;

export const ErrorText = styled.p`
  font-size: 0.8rem;
  color: #ff0000;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled(EmailLoginButton)<{ $valid: boolean }>`
  display: flex;
  justify-content: center;
  background-color: ${({ $valid }) => ($valid ? '#4caf50' : '#ccc')};
  color: ${({ $valid }) => ($valid ? 'white' : '#666')};
  transition: background-color 0.2s ease;

  &:hover {
    ${({ $valid }) =>
      $valid &&
      `
     transform: translateY(-2px);
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
     background-color: #66bb6a;
   `}
  }
`;
