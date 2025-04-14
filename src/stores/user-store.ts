import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { ControleHorasPermissoes } from 'src/@types/user/user-role-enum';

import type { UserModel } from 'src/@types/user/user-model';
import type { TokenData } from 'src/utils/storage/user-storage';
import UserStorage from 'src/utils/storage/user-storage';
import { userFromResponseToModelAdapter } from 'src/@adapter/user-from-response-to-model-adapter';

export type State = {
  user: UserModel | null;
  tokenData: TokenData | null;
};

export const useUserStore = defineStore('user', {
  state: (): State => ({
    tokenData: UserStorage.token,
    user: UserStorage.user,
  }),

  actions: {
    login(token: string) {
      this.tokenData = { token: token };
      UserStorage.save(this.tokenData);
      this.user = userFromResponseToModelAdapter(token);
    },
    logout() {
      UserStorage.reset();
      LocalStorage.clear();
      this.user = null;
      window.open(process.env.VUE_APP_LINK_LOGOUT_AUTH_WEB, '_self');
    },
  },

  getters: {
    token: (state: State) => state.tokenData?.token,
    roles: (state: State) => state.user?.roles,
    isActive: (state: State) => !!state.user,
    isServer: (state: State) => state.user?.roles.includes(ControleHorasPermissoes.SERVIDOR),
    isAdmin: (state: State) => state.user?.roles.includes(ControleHorasPermissoes.ADMIN),
  },
});
