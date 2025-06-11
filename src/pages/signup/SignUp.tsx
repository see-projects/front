import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './SignUp.styled';
import { ROUTES } from '../../constants/routes';
import arrow_left from '../../assets/arrow_left.svg';
import { SIGN_UP_CONSTANTS } from '../../constants/authConstants';
import { useForm } from 'react-hook-form';
import type { SignUpSchemeType } from '../../models/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpScheme } from '../../constants/authZodConstants';
import { useEffect } from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit: onSubmit,
  } = useForm<SignUpSchemeType>({
    resolver: zodResolver(SignUpScheme),
    defaultValues: { email: email ?? '' },
  });

  useEffect(() => {
    if (!email) {
      navigate(`${ROUTES.withEmail}`);
    } else {
      setValue('email', email);
    }
  }, [email, setValue, navigate]);

  const handleSubmit = (data: SignUpSchemeType) => {
    console.log(data);
  };

  return (
    <S.SignUpContainer>
      <S.SignUpWrapper>
        <S.PreviousArea to={`${ROUTES.withEmail}`}>
          <S.BackToPrevious src={arrow_left} />
          <S.BackArea>
            <S.Back>이전</S.Back>
          </S.BackArea>
        </S.PreviousArea>
        <S.ContentArea onSubmit={onSubmit(handleSubmit)}>
          <S.InputContainer>
            {SIGN_UP_CONSTANTS.map((constants) => (
              <S.InputWrapper>
                <S.Label>{constants.label}</S.Label>
                <S.InputArea>
                  <S.Input
                    name={constants.name}
                    placeholder={constants.placeholder}
                    type={constants.type}
                    register={register}
                  />
                </S.InputArea>
                <S.ErrorTextArea>
                  {errors[constants.name] && (
                    <S.ErrorText>{errors[constants.name]?.message}</S.ErrorText>
                  )}
                </S.ErrorTextArea>
              </S.InputWrapper>
            ))}
          </S.InputContainer>
          <S.ButtonArea>
            <S.SubmitButton>회원가입</S.SubmitButton>
          </S.ButtonArea>
        </S.ContentArea>
      </S.SignUpWrapper>
    </S.SignUpContainer>
  );
};

export default SignUp;
