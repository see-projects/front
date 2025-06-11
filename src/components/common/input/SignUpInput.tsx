import type { UseFormRegister } from 'react-hook-form';
import * as S from './SignUpInput.styled';
import type {
  SignUpSchemeNameType,
  SignUpSchemeType,
} from '../../../models/auth';
import { useState } from 'react';

interface SignUpProps {
  name: SignUpSchemeNameType;
  register: UseFormRegister<SignUpSchemeType>;
  placeholder: string;
  type: 'text' | 'password';
  value?: string;
}

const SignUpInput = ({
  name,
  register,
  placeholder,
  type,
  value,
}: SignUpProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const inputType =
    type === 'password' ? (visible ? 'text' : 'password') : type;

  return (
    <S.Container>
      <S.SignUpInputText
        type={inputType}
        placeholder={placeholder}
        {...register(name)}
        value={value}
      />
      {(name === 'password' || name === 'confirmPassword') && (
        <S.ToggleButton type='button' onClick={() => setVisible((v) => !v)}>
          {visible ? <S.Eye /> : <S.EyeSlash />}
        </S.ToggleButton>
      )}
    </S.Container>
  );
};

export default SignUpInput;
