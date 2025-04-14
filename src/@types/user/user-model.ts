import type { ControleHorasPermissoes } from './user-role-enum';

export type UserModel = {
  sub?: string;
  roles: ControleHorasPermissoes[];
};
