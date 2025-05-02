import type { AdicionarProjetoDto } from 'src/api-client';
import { ProjetoApi } from 'src/api-client';
import { Constants } from 'src/constants/constants';
import { criarServico } from 'src/hooks/criar-servico';

const api = new ProjetoApi(undefined, Constants.apiRoot);

export const ProjetoService = criarServico({
  cadastrar: (dto: AdicionarProjetoDto) => api.projetoControllerAdicionar(dto),
  alterarProjetoAbrir: (id: string) => api.projetoControllerAbrir(id),
  alterarProjetoFechar: (id: string) => api.projetoControllerFechar(id),
  listarProjetosPorID: (id: string) => api.projetoControllerListarAtividades(id),
  listarProjetos: () => api.projetoControllerListar(),
});
