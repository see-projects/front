import styled, { css } from 'styled-components';
import AuthInput from '../../components/common/input/LoginInput';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  max-width: 450px;
  width: 100%;
  min-height: 500px;
  padding: 30px 30px;
  background-color: #b3ffff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const PreviousArea = styled.button`
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

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Logo = styled.img`
  width: 150px;
  height: 80px;
`;

export const LoginArea = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
`;

export const LoginInputArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const Line = styled.hr`
  width: 100%;
  height: 2px;
  background-color: #ccc;
  opacity: 40%;
`;

export const LoginCenterArea = styled.div<{ $emailExists: boolean }>`
  width: 100%;
  visibility: ${({ $emailExists }) => ($emailExists ? 'visible' : 'hidden')};
  margin-bottom: 60px;

  &:focus-within ${Line} {
    transform: scaleX(1);
    background-color: #ff614d;
    opacity: 1;
  }
`;

export const LoginInput = styled(AuthInput)``;

export const InputLabelArea = styled.div`
  margin-bottom: 10px;
`;

export const InputLabel = styled.label`
  font-weight: 600;
`;

export const LoginButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 4px;
  font-weight: 700;
  height: 3rem;
  font-size: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-top: 10px;
  margin-bottom: 30px;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: #ccc;
        `
      : `background-color : #FF614D`};
`;

export const DividerArea = styled.div<{ $emailExists: boolean }>`
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
  visibility: ${({ $emailExists }) => ($emailExists ? 'visible' : 'hidden')};
`;

export const Divider = styled.hr`
  width: 53%;
  background-color: #ccc;
  opacity: 40%;
`;

export const OtherOptions = styled.div<{ $emailExists: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
  margin: 0 auto;
  visibility: ${({ $emailExists }) => ($emailExists ? 'visible' : 'hidden')};
`;

export const Divide = styled.p``;

export const SignUpButton = styled(Link)`
  font-size: 15px;
`;

export const ChangePwButton = styled(Link)`
  text-decoration: underline;
  color: #3705ff;
  font-size: 15px;
`;
