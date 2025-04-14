import { Routename } from 'src/router/router-names';
import type { PageConfig } from 'src/router/config/routes-types';

export const ErrorPrivateRouter: PageConfig[] = [
  {
    layout: 'main',
    component: () => import('pages/error/error-not-found.vue'),

    route: {
      path: '/404',
      name: Routename.Error404,
    },
  },
  {
    layout: 'main',
    component: () => import('pages/error/error-forbidden.vue'),
    route: {
      path: '/403',
      name: Routename.Forbidden403,
    },
  },
];
