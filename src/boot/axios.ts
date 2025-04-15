import { boot } from 'quasar/wrappers';
import type { AxiosError } from 'axios';
import { useUserStore } from 'stores/user-store';
import { Notify } from 'quasar';
import Endpoints from 'src/service/config/endpoints';
import { axiosInstance } from 'src/service/config/api';

export default boot(() => {
  axiosInstance.interceptors.request.use((config) => {
    const isPublic = (url: Endpoints) => [Endpoints.Login].includes(url);
    const userStore = useUserStore();

    if (!isPublic(config.url as Endpoints)) {
      Object.assign(config.headers, {
        ...config.headers,
        Authorization: `Bearer ${userStore.token}`,
      });
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (config) => config,
    (error: AxiosError) => {
      const userStore = useUserStore();

      if (error.response?.status === 401) {
        Notify.create({
          message: 'Sua sessão expirou.',
          color: 'negative',
          position: 'center',
        });
        userStore.logout();
      }

      return Promise.reject(error);
    },
  );
});
