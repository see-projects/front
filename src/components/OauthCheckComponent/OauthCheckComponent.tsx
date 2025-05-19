import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../common/LoadingSpinner';
import axios, { type AxiosResponse } from 'axios';
import qs from 'qs';

const OauthCheckComponent = () => {
  const url = new URL(window.location.href);
  const code = url.searchParams.get('code');
  const rawState = url.searchParams.get('state');
  const { provider } = JSON.parse(atob(decodeURIComponent(rawState!)));

  const [data, setData] = useState<AxiosResponse>();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: `${import.meta.env.VITE_KAKAO_APP_REST_API_KEY}`,
      redirect_uri: `${import.meta.env.VITE_APP_REDIRECT_URL}`,
      code: code,
      client_secret: '',
    });
    try {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload
      );
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  const googleLogin = () => {};

  const naverLogin = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: `${import.meta.env.VITE_NAVER_APP_REST_API_KEY}`,
      client_secret: `${import.meta.env.VITE_NAVER_APP_SECRET_CODE}`,
      code: code,
      state: `${import.meta.env.VITE_NAVER_APP_STATE}`,
    });

    try {
      const res = await axios.post(
        `https://nid.naver.com/oauth2.0/token`,
        payload
      );
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (provider === 'kakao') {
      getToken();
    } else if (provider === 'google') {
      googleLogin();
    } else if (provider === 'naver') {
      naverLogin();
    }
  }, [url]);

  return (
    <div>
      {data ? (
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default OauthCheckComponent;
