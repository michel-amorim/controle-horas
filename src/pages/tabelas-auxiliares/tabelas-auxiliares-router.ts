import { Routename } from 'src/router/router-names';
import type { PageConfig } from 'src/router/config/routes-types';

export const TabelasAuxiliaresRouter: PageConfig[] = [
  {
    layout: 'main',
    component: () => import('pages/tabelas-auxiliares/projeto-page/lista-projetos-page.vue'),
    route: {
      path: '/lista-projetos',
      name: Routename.ListaProjeto,
    },
    sidebar: {
      label: 'Lista de Projetos',
      icon: 'app_registration',
    },
  },
];
