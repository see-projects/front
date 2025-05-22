import styled from 'styled-components';
import AuthInput from '../../components/common/input/AuthInput';

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
  padding: 0px 57px;
`;

export const LoginInputArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginCenterArea = styled.div`
  width: 80%;
  margin-bottom: 25px;
`;

export const Line = styled.hr``;

export const LoginEmailInput = styled(AuthInput)``;

export const LoginPwInput = styled(AuthInput)``;

export const LoginButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginButton = styled.button`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  font-weight: 700;
  height: 3rem;
  font-size: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-top: 10px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const DividerArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Divider = styled.hr`
  width: 47%;
  background-color: #ccc;
  opacity: 40%;
`;

export const OtherOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  gap: 0.5rem;
  margin: 0 auto;
`;

export const Divide = styled.p``;

export const SignUPButton = styled.button``;

export const ChangePwButton = styled.button``;
