import kakao from '../assets/kakaoIcon.svg';
import google from '../assets/googleIcon.svg';
import github from '../assets/github-mark-white.svg';
import naver from '../assets/naverIcon.svg';

export const OAUTH_PROVIDERS = [
  {
    name: 'kakao',
    url: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
      import.meta.env.VITE_KAKAO_APP_REST_API_KEY
    }&redirect_uri=${import.meta.env.VITE_APP_REDIRECT_URL}`,
    icon: kakao,
  },
  {
    name: 'google',
    url: `https://accounts.google.com/o/oauth2/auth?client_id=${
      import.meta.env.VITE_GOOGLE_APP_REST_API_KEY
    }&redirect_uri=${
      import.meta.env.VITE_APP_REDIRECT_URL
    }&response_type=code&scope=${import.meta.env.VITE_GOOGLE_SCOPE}`,
    icon: google,
  },
  {
    name: 'naver',

    url: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
      import.meta.env.VITE_NAVER_APP_REST_API_KEY
    }&state=${import.meta.env.VITE_NAVER_APP_STATE}&redirect_uri=${
      import.meta.env.VITE_APP_REDIRECT_URL
    }`,
    icon: naver,
  },
  {
    name: 'github',
    url: import.meta.env.VITE_APP_BASE_URL_GITHUB,
    icon: github,
  },
];
