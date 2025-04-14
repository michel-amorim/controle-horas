import { Routename } from '../router-names';
import type { NavigationGuardWithThis, RouteLocationNormalized } from 'vue-router';
import { useUserStore } from 'stores/user-store';
import type { Pinia } from 'pinia';
import { PublicRoutes } from 'src/router/routes';
import type { ControleHorasPermissoes } from 'src/@types/user/user-role-enum';

function temPermissao(roles: ControleHorasPermissoes[], to: RouteLocationNormalized) {
  const requiredRoles = to.meta.roles as ControleHorasPermissoes[];

  const userRoles: (ControleHorasPermissoes | string)[] = [...roles];
  if (!requiredRoles || requiredRoles.length === 0) {
    return true;
  }

  return requiredRoles.some((role) => userRoles.includes(role));
}

function useGuard(store: Pinia): NavigationGuardWithThis<undefined> {
  const userStore = useUserStore(store);

  return (to, from, next) => {
    const { isActive, roles } = userStore;

    if (!to.name) {
      next(isActive ? { name: Routename.Error404 } : { name: Routename.PublicError404 });
      return;
    }
    // if (!token) {
    //   if (PublicRoutes.includes(to.name as Routename)) {
    //     next();
    //   } else {
    //     next({ path: process.env.VUE_APP_LINK_LOGOUT_AUTH_WEB });
    //   }
    //   return;
    // }

    if (!isActive) {
      if (PublicRoutes.includes(to.name as Routename)) {
        next();
        return;
      }
      next();
      return;
    }

    if (!temPermissao(roles || [], to)) {
      next({ name: Routename.Forbidden403 });
      return;
    }

    next();
  };
}

export default useGuard;
