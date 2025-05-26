import { z } from 'zod';

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

export const LoginScheme = z.object({
  email: z.string().email({ message: '이메일 입력 필요' }),
  password: z.string().regex(passwordRegex, '특수문자, 영문, 숫자 포함'),
});
