import * as S from './Login.styled';
import mainLogo from '../assets/logo.svg';
import emailIcon from '../assets/email.svg';
import { OAUTH_PROVIDERS } from '../constants/authConstants';

const Login = () => {
  const handleOAuthLogin = (loginUrl: string, name: string) => {
    window.open(loginUrl, `${name} Login`, 'width=500, height=700');
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.LogoWrapper>
          <S.Logo src={mainLogo} />
        </S.LogoWrapper>
        <S.Produce>로그인으로 전 세계 영화를 감상하세요 !</S.Produce>
        <S.EmailLoginButton role='link'>
          <S.EmailLogo src={emailIcon} />
          <S.SpanText>이메일로 시작</S.SpanText>
          <S.SpaceArea></S.SpaceArea>
        </S.EmailLoginButton>
        <S.DividerArea>
          <S.Divider />
        </S.DividerArea>
        <S.SocielLoginSentenceArea>
          <S.SocielLoginSentence>
            다른 방법으로 로그인 하기
          </S.SocielLoginSentence>
        </S.SocielLoginSentenceArea>
        <S.OAuthIconsArea>
          {OAUTH_PROVIDERS.map((oauth) => (
            <S.OAuthIcons
              key={oauth.name}
              onClick={() => handleOAuthLogin(oauth.url, oauth.name)}
            >
              <S.IconsImage src={oauth.icon} />
            </S.OAuthIcons>
          ))}
        </S.OAuthIconsArea>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
