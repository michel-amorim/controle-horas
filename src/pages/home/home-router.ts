import { Routename } from 'src/router/router-names';
import type { PageConfig } from 'src/router/config/routes-types';

export const HomeRouter: PageConfig[] = [
  {
    layout: 'main',
    component: () => import('pages/home/home-page.vue'),
    route: {
      path: '/home',
      name: Routename.Home,
    },
    sidebar: {
      label: 'Início',
      icon: 'home',
    },
  },
];
