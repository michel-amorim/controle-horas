import { Routename } from 'src/router/router-names';
import type { PageConfig } from 'src/router/config/routes-types';

export const ControleHorasRouter: PageConfig[] = [
  {
    layout: 'main',
    component: () => import('pages/controle-horas/consulta-controle-horas.vue'),
    route: {
      path: '/consultar-horas',
      name: Routename.ConsultaHoras,
    },
    sidebar: {
      label: 'Consultar Horas',
      icon: 'app_registration',
    },
  },
];
