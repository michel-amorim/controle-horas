import type {
  AdicionarProjetoDto,
  AtualizarProjetoDto,
  AdicionarAtividadeDto,
  AtualizarAtividadeDto,
  AtuacaoDto,
  AtualizarAtuacaoDto,
  AtividadeControllerAlterarStatusRequest,
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
  encontrar: (params: { id: string }) => projetoApi.projetoControllerEncontrar(params.id),
  cadastrar: (dto: AdicionarProjetoDto) => projetoApi.projetoControllerAdicionar(dto),
  atualizar: (params: { id: string; dto: AtualizarProjetoDto }) =>
    projetoApi.projetoControllerAtualizar(params.id, params.dto),
  deletar: (params: { id: string }) => projetoApi.projetoControllerDeletar(params.id),
  abrir: (params: { id: string }) => projetoApi.projetoControllerAbrir(params.id),
  fechar: (params: { id: string }) => projetoApi.projetoControllerFechar(params.id),
  calcularHoras: (params: { id: string }) =>
    projetoApi.projetoControllerCalcularHoras(params.id),
  listarAtividades: (params: { id: string; mostrarInativos?: boolean }) =>
    projetoApi.projetoControllerListarAtividades(
      params.id,
      params.mostrarInativos === true ? 'true' : 'false',
    ),

  // Atividade
  listarAtividadesGeral: (params: { mes: number; ano: number }) =>
    atividadeApi.atividadeControllerListarAtividadesGeral(params.mes, params.ano),
  encontrarAtividade: (params: { id: string }) =>
    atividadeApi.atividadeControllerEncontrarAtividade(params.id),
  cadastrarAtividade: (dto: AdicionarAtividadeDto) =>
    atividadeApi.atividadeControllerAdicionarAtividade(dto),
  atualizarAtividade: (params: { id: string; dto: AtualizarAtividadeDto }) =>
    atividadeApi.atividadeControllerAtualizarAtividade(params.id, params.dto),
  deletarAtividade: (params: { id: string }) =>
    atividadeApi.atividadeControllerDeletarAtividade(params.id),
  alterarStatusAtividade: (params: { id: string; dto: AtividadeControllerAlterarStatusRequest }) =>
    atividadeApi.atividadeControllerAlterarStatus(params.id, params.dto),

  // Atuacao
  iniciarAtuacao: (dto: AtuacaoDto) => atuacaoApi.atuacaoControllerIniciar(dto),
  finalizarAtuacao: (params: { id: string; dto: AtuacaoDto }) =>
    atuacaoApi.atuacaoControllerFinalizar(params.id, params.dto),
  atualizarAtuacao: (params: { id: string; dto: AtualizarAtuacaoDto }) =>
    atuacaoApi.atuacaoControllerAtualizar(params.id, params.dto),
  deletarAtuacao: (params: { id: string }) =>
    atuacaoApi.atuacaoControllerDeletar(params.id),

  // Relatório
  relatorio: (params: { mes: number; ano: number }) =>
    atuacaoApi.atuacaoControllerRelatorio(params.mes, params.ano),
});
