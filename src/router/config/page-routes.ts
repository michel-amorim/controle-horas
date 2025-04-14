import type { RouteRecordRaw } from 'vue-router';
import { Routes } from 'src/router/routes';
import { Routename } from '../router-names';
import type { LayoutType, LayoutVariant, SidebarRouteConfig, PageConfig } from './routes-types';

function getRoutesFromLayout(layout: LayoutVariant): PageConfig[] {
  return Routes.filter(route => (route.layout || 'main') === layout);
}

function getLayouts(): LayoutVariant[] {
  return Routes.reduce<LayoutVariant[]>((uniqueLayouts, { layout = 'main' }) => {
    return uniqueLayouts.includes(layout) ? uniqueLayouts : [...uniqueLayouts, layout];
  }, []);
}

function processSidebar(items: PageConfig[]): SidebarRouteConfig[] {
  return items
    .map(item => {
      if (!('sidebar' in item) && !('children' in item) && !item.sidebar) {
        return null;
      }

      if ('children' in item && item.expansionName) {
        return {
          label: item.expansionName,
          iconExpansion: item.iconExpansion,
          expansionName: item.expansionName,
          roles: [],
          children: processSidebar(item.children),
        } as SidebarRouteConfig;
      } else if ('route' in item) {
        return {
          label: item.sidebar?.label,
          icon: item.sidebar?.icon,
          name: item.route.name,
          roles: item.sidebar?.roles || [],
        } as SidebarRouteConfig;
      }
      return null;
    })
    .filter((item): item is SidebarRouteConfig => item !== null);
}

export function getSidebar(layout: LayoutType): SidebarRouteConfig[] {
  return processSidebar(getRoutesFromLayout(layout));
}

function processRoutes(items: PageConfig[]): RouteRecordRaw[] {
  return items.flatMap(item => {
    if ('route' in item && 'component' in item) {
      return {
        path: item.route.path,
        name: item.route.name,
        component: item.component,
        meta: item.meta || {},
        props: item.props || {},
        children: Array.isArray((item as { children?: PageConfig[] }).children)
          ? processRoutes((item as unknown as { children: PageConfig[] }).children)
          : [],
      } as RouteRecordRaw;
    } else if ('children' in item && Array.isArray(item.children)) {
      return processRoutes(item.children);
    }
    return [];
  });
}

export function getRoutes(): RouteRecordRaw[] {
  const keys = getLayouts();

  return keys.reduce<RouteRecordRaw[]>(
    (routeRecords, layoutVariant) => {
      const [layout, ...props] = layoutVariant.split(':');
      const routeConfigs = getRoutesFromLayout(layoutVariant);
      const extraProps = props.reduce((acc, prop) => ({ ...acc, [prop]: true }), {});

      const route: RouteRecordRaw = {
        path: '/',
        component: () => import(`layouts/${layout}-layout.vue`),
        props: {
          ...extraProps,
          layout: layoutVariant,
          sidebar: getSidebar(layout as LayoutType),
        },
        children: processRoutes(routeConfigs),
      };

      return [...routeRecords, route];
    },
    [
      {
        path: '',
        redirect: { name: Routename.Auth },
      },
    ],
  );
}
