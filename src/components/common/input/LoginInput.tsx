import type { LoginSchemeType } from '../../../models/auth';
import * as S from './LoginInput.styled';
import { type UseFormRegister } from 'react-hook-form';

interface AuthInputProps {
  name: 'email' | 'password';
  register: UseFormRegister<LoginSchemeType>;
  placeholder: string;
  type: 'text' | 'password';
  value?: string;
  className?: string;
}

const AuthInput = ({
  name,
  register,
  placeholder,
  type,
  value,
  className,
}: AuthInputProps) => {
  return (
    <S.Container
      className={className}
      type={type}
      placeholder={placeholder}
      {...register(name)}
      value={value}
    />
  );
};

export default AuthInput;
