import type { AdicionarAtividadeDto } from 'src/api-client';
import { AtividadeApi } from 'src/api-client';
import { Constants } from 'src/constants/constants';
import { criarServico } from 'src/hooks/criar-servico';

const api = new AtividadeApi(undefined, Constants.apiRoot);

export const AtividadeService = criarServico({
  listarAtividadesGeral: ({ mes, ano }) => api.atividadeControllerListarAtividadesGeral(mes, ano),
  adicionarAtividade: (dto: AdicionarAtividadeDto) =>
    api.atividadeControllerAdicionarAtividade(dto),
});
