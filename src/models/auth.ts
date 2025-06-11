import type { z } from 'zod';
import type { LoginScheme, SignUpScheme } from '../constants/authZodConstants';

export type LoginSchemeType = z.infer<typeof LoginScheme>;

export type SignUpSchemeType = z.infer<typeof SignUpScheme>;

export type SignUpSchemeNameType =
  | 'email'
  | 'password'
  | 'confirmPassword'
  | 'nickname'
  | 'name';
