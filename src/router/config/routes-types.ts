import type { Routename } from 'src/router/router-names';
import type { RouteMeta, RouteRecordSingleView } from 'vue-router';
import type { ControleHorasPermissoes } from 'src/@types/user/user-role-enum';
import type { LayoutProps } from 'src/layouts/layout-interface';

export type LayoutType = 'main' | 'login' | 'public';

export type RouteConfig<CustomRoutename extends Routename = Routename> = {
  path: string;
  name: CustomRoutename;
  meta?: RouteMeta;
  children?: CustomRoutename[];
};
export type SidebarConfig = {
  label: string;
  caption?: string;
  icon?: string;
  iconColor?: string;
  roles?: ControleHorasPermissoes[];
};

type Variants = keyof Omit<LayoutProps, 'sidebar'>;
export type LayoutVariant = LayoutType | `${LayoutType}:${Variants}`;

export type PageConfig<CustomRoutename extends Routename = Routename> =
  | ({
      route: RouteConfig<CustomRoutename>;
      layout?: LayoutVariant;
      sidebar?: SidebarConfig;
      expansionName?: string;
      iconExpansion?: string;
      meta?: RouteMeta;
    } & Pick<RouteRecordSingleView, 'component' | 'props'>)
  | {
      layout?: LayoutVariant;
      expansionName: string;
      iconExpansion?: string;
      children: PageConfig<CustomRoutename>[];
    };

export type SidebarRouteConfig<CustomRoutename extends Routename = Routename> =
  | ({
      name: CustomRoutename;
    } & SidebarConfig)
  | (SidebarConfig & {
      expansionName: string;
      iconExpansion?: string;
      children: SidebarRouteConfig<CustomRoutename>[];
    });
