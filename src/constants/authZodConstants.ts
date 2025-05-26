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
