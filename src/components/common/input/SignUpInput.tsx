import type { UseFormRegister } from 'react-hook-form';
import * as S from './SignUpInput.styled';
import type { SignUpSchemeType } from '../../../models/auth';

interface SignUpProps {
  name: 'email' | 'password' | 'confirmPassword' | 'nickname' | 'name';
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
  return (
    <S.Container>
      <S.SignUpInputText
        type={type}
        placeholder={placeholder}
        {...register(name)}
        value={value}
      />
    </S.Container>
  );
};

export default SignUpInput;
