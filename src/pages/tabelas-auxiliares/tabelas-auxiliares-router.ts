import { RouteExpansionName } from 'src/router/route-expansion-names';
import { Routename } from 'src/router/router-names';
import type { PageConfig } from 'src/router/config/routes-types';

export const TabelasAuxiliaresRouter: PageConfig[] = [
  {
    layout: 'main',
    expansionName: RouteExpansionName.TabelaAuxiliares,
    children: [
      {
        component: () => import('pages/tabelas-auxiliares/sistema-page/input-padrao-page.vue'),
        route: {
          path: '/sistema',
          name: Routename.Sistema,
        },
        sidebar: {
          label: 'Sistemas',
        },
      },

      {
        component: () => import('pages/tabelas-auxiliares/empresa-page/input-selecao-page.vue'),
        route: {
          path: '/Empresa',
          name: Routename.Empresa,
        },
        sidebar: {
          label: 'Empresa',
        },
      },
      {
        component: () => import('pages/tabelas-auxiliares/projeto-page/input-selecao-page.vue'),
        route: {
          path: '/projeto',
          name: Routename.Projeto,
        },
        sidebar: {
          label: 'Projeto',
        },
      },
    ],
  },
];
