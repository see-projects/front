import * as S from './LoginWithEmail.styled';
import arrow_left from '../../assets/arrow_left.svg';
import { useNavigate } from 'react-router-dom';
import mainLogo from '../../assets/logo.svg';

const LoginWithEmail = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Wrapper>
        <S.PreviousArea onClick={() => navigate(-1)}>
          <S.BackToPrevious src={arrow_left} />
          <S.BackArea>
            <S.Back>이전</S.Back>
          </S.BackArea>
        </S.PreviousArea>
        <S.LogoWrapper>
          <S.Logo src={mainLogo} />
        </S.LogoWrapper>
        <S.LoginArea>
          <S.LoginInputArea>
            <S.LoginCenterArea>
              <S.LoginEmailInput placeholder='이메일 입력' />
              <S.Line />
            </S.LoginCenterArea>
          </S.LoginInputArea>
          <S.LoginInputArea>
            <S.LoginCenterArea>
              <S.LoginPwInput placeholder='비밀번호 입력' />
              <S.Line />
            </S.LoginCenterArea>
          </S.LoginInputArea>
          <S.LoginButtonArea>
            <S.LoginButton type='submit'>로그인</S.LoginButton>
          </S.LoginButtonArea>
        </S.LoginArea>
        <S.DividerArea>
          <S.Divider />
        </S.DividerArea>
        <S.OtherOptions>
          <S.SignUPButton>계정 생성하기</S.SignUPButton>
          <S.Divide>|</S.Divide>
          <S.ChangePwButton>비밀번호 재설정</S.ChangePwButton>
        </S.OtherOptions>
      </S.Wrapper>
    </S.Container>
  );
};

export default LoginWithEmail;
