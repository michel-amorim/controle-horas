import type {
  AdicionarProjetoDto,
  AtualizarProjetoDto,
  AdicionarAtividadeDto,
  AtualizarAtividadeDto,
  AtuacaoDto,
  AtualizarAtuacaoDto,
} from 'src/api-client';
import {
  ProjetoApi,
  AtividadeApi,
  AtuacaoApi,
} from 'src/api-client';
import { Constants } from 'src/constants/constants';
import { criarServico } from 'src/hooks/criar-servico';

const projetoApi = new ProjetoApi(undefined, Constants.apiRoot);
const atividadeApi = new AtividadeApi(undefined, Constants.apiRoot);
const atuacaoApi = new AtuacaoApi(undefined, Constants.apiRoot);

export const ProjetoService = criarServico({
  // Projeto
  listar: () => projetoApi.projetoControllerListar(),
  encontrar: (id: string) => projetoApi.projetoControllerEncontrar(id),
  cadastrar: (dto: AdicionarProjetoDto) => projetoApi.projetoControllerAdicionar(dto),
  atualizar: (id: string, dto: AtualizarProjetoDto) =>
    projetoApi.projetoControllerAtualizar(id, dto),
  deletar: (id: string) => projetoApi.projetoControllerDeletar(id),
  abrir: (id: string) => projetoApi.projetoControllerAbrir(id),
  fechar: (id: string) => projetoApi.projetoControllerFechar(id),
  calcularHoras: (id: string) => projetoApi.projetoControllerCalcularHoras(id),
  listarAtividades: (id: string) => projetoApi.projetoControllerListarAtividades(id),

  // Atividade
  listarAtividadesGeral: ({ mes, ano }: { mes: number; ano: number }) =>
    atividadeApi.atividadeControllerListarAtividadesGeral(mes, ano),
  encontrarAtividade: (id: string) =>
    atividadeApi.atividadeControllerEncontrarAtividade(id),
  cadastrarAtividade: (dto: AdicionarAtividadeDto) =>
    atividadeApi.atividadeControllerAdicionarAtividade(dto),
  atualizarAtividade: (id: string, dto: AtualizarAtividadeDto) =>
    atividadeApi.atividadeControllerAtualizarAtividade(id, dto),
  deletarAtividade: (id: string) =>
    atividadeApi.atividadeControllerDeletarAtividade(id),

  // Atuacao
  iniciarAtuacao: (dto: AtuacaoDto) => atuacaoApi.atuacaoControllerIniciar(dto),
  finalizarAtuacao: (id: string, dto: AtuacaoDto) =>
    atuacaoApi.atuacaoControllerFinalizar(id, dto),
  atualizarAtuacao: (id: string, dto: AtualizarAtuacaoDto) =>
    atuacaoApi.atuacaoControllerAtualizar(id, dto),
  deletarAtuacao: (id: string) => atuacaoApi.atuacaoControllerDeletar(id),

  // Relatório
  relatorio: ({ mes, ano }: { mes: number; ano: number }) =>
    atuacaoApi.atuacaoControllerRelatorio(mes, ano),
});
