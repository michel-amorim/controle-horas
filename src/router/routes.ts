import { HomeRouter } from 'src/pages/home/home-router';
import { Routename } from './router-names';
import type { PageConfig } from './config/routes-types';
import { ErrorPublicRouter } from 'src/pages/error/error-publico/error-route';

import { TabelasAuxiliaresRouter } from 'src/pages/tabelas-auxiliares/tabelas-auxiliares-router';
import { ControleHorasRouter } from 'src/pages/controle-horas/home-router';

export const Routes: PageConfig[] = [
  ...HomeRouter,
  ...ControleHorasRouter,
  ...TabelasAuxiliaresRouter,
  ...ErrorPublicRouter,
];

export const PublicRoutes: Routename[] = [
  Routename.PublicError403,
  Routename.PublicError404,
  Routename.Auth,
];
