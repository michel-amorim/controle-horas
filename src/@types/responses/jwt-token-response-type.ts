import type { ControleHorasPermissoes } from '../user/user-role-enum';

export type JwtTokenResponsePayload = {
  perfis: ControleHorasPermissoes[];
  sub: string;
};

export type JwtTokenResponseType = JwtTokenResponsePayload;
