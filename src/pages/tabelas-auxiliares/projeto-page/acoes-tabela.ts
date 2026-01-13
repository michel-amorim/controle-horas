import { useRouter } from 'vue-router';
import type { Projeto } from 'src/api-client';
import { Routename } from 'src/router/router-names';

export function dropdonwItens(linhaTabela: Projeto) {
  const router = useRouter();

  const verDetalhes = {
    id: 'ver-detalhes',
    label: 'Ver Detalhes',
    icon: 'visibility',
    onClick: () => {
      void router.push({
        name: Routename.DetalheProjeto,
        params: { id: linhaTabela.id },
      });
    },
  };

  return [verDetalhes];
}
