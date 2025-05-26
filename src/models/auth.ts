import type { z } from 'zod';
import type { LoginScheme } from '../constants/authZodConstants';

export type LoginSchemeType = z.infer<typeof LoginScheme>;
