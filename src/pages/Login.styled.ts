import styled from 'styled-components';

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
  max-width: 600px;
  width: 100%;
  min-height: 500px;
  padding: 48px 64px;
  background-color: #b3ffff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Logo = styled.img`
  height: 80px;
`;

export const Produce = styled.h2`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  white-space: pre-line;
  word-break: keep-all;
  margin-bottom: 36px;
  background-color: inherit;
`;

export const EmailLoginButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  font-weight: 700;
  height: 3rem;
  font-size: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const EmailLogo = styled.img``;

export const SpaceArea = styled.div``;

export const DividerArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Divider = styled.hr`
  width: 60%;
  background-color: #ccc;
  opacity: 40%;
`;

export const SocielLoginSentenceArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocielLoginSentence = styled.p`
  color: #ccc;
  margin-bottom: 20px;
`;

export const OAuthIconsArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const OAuthIcons = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: 2px solid #b3ffff;
    outline-offset: 2px;
  }
`;

export const IconsImage = styled.img``;

export const SpanText = styled.span``;
