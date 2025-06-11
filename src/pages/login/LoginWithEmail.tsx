import * as S from './LoginWithEmail.styled';
import arrow_left from '../../assets/arrow_left.svg';
import { useNavigate } from 'react-router-dom';
import mainLogo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { LoginScheme } from '../../constants/authZodConstants';
import { zodResolver } from '@hookform/resolvers/zod';
import type { LoginSchemeType } from '../../models/auth';
import { ROUTES } from '../../constants/routes';
import useCheckEmail from '../../hooks/login/useCheckEmail';

const LoginWithEmail = () => {
  const navigate = useNavigate();

  const {
    handleSubmit: onSubmitLogin,
    formState: { errors, isValid },
    register,
    getValues,
    watch,
  } = useForm<LoginSchemeType>({
    resolver: zodResolver(LoginScheme),
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
  });

  const { checkEmail, emailExists } = useCheckEmail();

  const handleSubmitLogin = (data: LoginSchemeType) => {
    console.log(data);
    console.log(errors);
  };

  const email = watch('email');
  const isEmailValid = !!email && !errors.email;

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
        <S.LoginArea onSubmit={onSubmitLogin(handleSubmitLogin)}>
          <S.LoginInputArea>
            <S.LoginCenterArea $emailExists={true}>
              <S.InputLabelArea>
                <S.InputLabel>이메일</S.InputLabel>
              </S.InputLabelArea>
              <S.LoginInput
                type='text'
                placeholder='이메일 입력'
                name='email'
                register={register}
              />
              <S.Line />
            </S.LoginCenterArea>
          </S.LoginInputArea>

          <S.LoginInputArea>
            <S.LoginCenterArea $emailExists={emailExists}>
              <S.InputLabelArea>
                <S.InputLabel>비밀번호</S.InputLabel>
              </S.InputLabelArea>
              <S.LoginInput
                type='password'
                placeholder='비밀번호 입력'
                name='password'
                register={register}
              />
              <S.Line />
            </S.LoginCenterArea>
          </S.LoginInputArea>

          <S.LoginButtonArea>
            {emailExists ? (
              <S.SubmitButton type='submit' disabled={!isValid}>
                로그인
              </S.SubmitButton>
            ) : (
              <S.SubmitButton
                type='button'
                onClick={() => checkEmail(getValues('email'))}
                disabled={!isEmailValid}
              >
                다음 이동
              </S.SubmitButton>
            )}
          </S.LoginButtonArea>
          <>
            <S.DividerArea $emailExists={emailExists}>
              <S.Divider />
            </S.DividerArea>
            <S.OtherOptions $emailExists={emailExists}>
              <S.ChangePwButton to={ROUTES.changePassword}>
                비밀번호를 잊어버리셨나요?
              </S.ChangePwButton>
            </S.OtherOptions>
          </>
        </S.LoginArea>
      </S.Wrapper>
    </S.Container>
  );
};

export default LoginWithEmail;
