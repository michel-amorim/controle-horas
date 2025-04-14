import { Routename } from 'src/router/router-names';
import type { PageConfig } from 'src/router/config/routes-types';

export const ErrorPublicRouter: PageConfig[] = [
  {
    layout: 'login',
    component: () => import('pages/error/error-publico/error-not-found-publico.vue'),
    route: {
      path: '/acesso/404',
      name: Routename.PublicError404,
    },
  },
];
