import React from 'react';
import * as S from './AuthInput.styled';

interface AuthInputProps {
  placeholder: string;
}

const AuthInput = ({ placeholder }: AuthInputProps) => {
  return <S.Container placeholder={placeholder} />;
};

export default AuthInput;
