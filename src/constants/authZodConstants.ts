import { z } from 'zod';

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

export const LoginScheme = z.object({
  email: z.string().email({ message: '올바른 이메일 형식으로 입력 해주세요.' }),
  password: z
    .string()
    .regex(
      passwordRegex,
      '총 길이 8~25자, 영문/숫자/특수문자 형태로 입력 해주세요.'
    ),
});

export const SignUpScheme = z
  .object({
    email: z
      .string()
      .email({ message: '올바른 이메일 형식으로 입력 해주세요.' }),
    password: z
      .string()
      .regex(
        passwordRegex,
        '총 길이 8~25자, 영문/숫자/특수문자 형태로 입력 해주세요.'
      ),
    confirmPassword: z
      .string()
      .regex(
        passwordRegex,
        '총 길이 8~25자, 영문/숫자/특수문자 형태로 입력 해주세요.'
      ),
    nickname: z.string().max(10, { message: '10자리 이하로 네이밍 해주세요.' }),
    name: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });
