import type { UserModel } from 'src/@types/user/user-model';

import { ControleHorasPermissoes } from 'src/@types/user/user-role-enum';
import type { Adapter } from './adapter';
import type { JwtTokenResponsePayload } from 'src/@types/responses/jwt-token-response-type';
import { jwtDecode } from 'jwt-decode';

export const userFromResponseToModelAdapter: Adapter<string, UserModel> = (from: string) => {
  const decode = jwtDecode<JwtTokenResponsePayload>(from);
  const { sub, perfis } = decode;

  const filteredPerfils = perfis.filter((permissao: ControleHorasPermissoes) =>
    Object.values(ControleHorasPermissoes).includes(permissao),
  );

  return {
    sub,
    roles: filteredPerfils,
    isActive: true,
  };
};
