import { Routename } from 'src/router/router-names';
import type { PageConfig } from 'src/router/config/routes-types';

export const AuthRouter: PageConfig[] = [
  {
    layout: 'login',
    component: () => import('pages/auth/auth-page.vue'),
    route: {
      path: '/autenticacao',
      name: Routename.Auth,
    },
  },
];
