import type { LayoutVariant, SidebarRouteConfig } from 'src/router/config/routes-types';

export interface LayoutProps {
  sidebar: SidebarRouteConfig[];
  layout: LayoutVariant;
}
