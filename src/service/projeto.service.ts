import type { AdicionarProjetoDto} from 'src/api-client';
import { ProjetoApi } from 'src/api-client';
import { Constants } from 'src/constants/constants';

const api = new ProjetoApi(undefined, Constants.apiRoot);

export const ProjetoService = {
  cadastrar: (dto: AdicionarProjetoDto) => api.projetoControllerAdicionar(dto),
  listarAtvidades: (id: string) => api.projetoControllerListarAtividades(id)
}
