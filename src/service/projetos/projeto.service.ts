import type { AdicionarProjetoDto } from 'src/api-client';
import { ProjetoApi } from 'src/api-client';
import { Constants } from 'src/constants/constants';
import { criarServico } from 'src/hooks/criar-servico';

const api = new ProjetoApi(undefined, Constants.apiRoot);

export const ProjetoService = criarServico({
  cadastrar: (dto: AdicionarProjetoDto) => api.projetoControllerAdicionar(dto),
  listarAtvidadesPorID: (id: string) => api.projetoControllerListarAtividades(id),
  listarAtvidades: () => api.projetoControllerListar(),
});
