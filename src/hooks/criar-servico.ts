import type { RequestFunction } from 'src/@types/request/requisicao'
import { TratamentoRequisicao } from './tratamento-requisicao'

export function criarServico<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Servico extends Record<NomeMetodo, RequestFunction<any, any>>,
  NomeMetodo extends keyof Servico,
>(
  servico: Servico,
): {
  [K in NomeMetodo]: (
    params: Parameters<Servico[K]>[0],
    options?: { loading?: boolean; mensagemSucesso?: string; mensagem?: boolean },
  ) => Promise<ReturnType<Servico[K]> extends Promise<infer U> ? U : never>
} {
  const novoServico = {} as {
    [K in NomeMetodo]: (
      params: Parameters<Servico[K]>[0],
      options?: { loading?: boolean; mensagemSucesso?: string; mensagem?: boolean },
    ) => Promise<ReturnType<Servico[K]> extends Promise<infer U> ? U : never>
  }

  ;(Object.keys(servico) as Array<NomeMetodo>).forEach((key) => {
    novoServico[key] = (params, { loading = true, mensagemSucesso, mensagem = true } = {}) => {
      return TratamentoRequisicao({
        servico: servico[key],
        params,
        loading,
        mensagem,
        mensagemSucesso,
      })
    }
  })

  return novoServico
}
