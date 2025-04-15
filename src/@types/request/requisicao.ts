export type RequestFunction<T, R> = {
  (params: T): Promise<R>;
};

export interface TratamentoRequisicaoParams<T, R> {
  servico: RequestFunction<T, R>;
  params: T;
  mensagemSucesso?: string | undefined;
  mensagem?: boolean;
  loading?: boolean;
}

export type ServicoCriado<NomeMetodo extends string, Params, Retorno> = Record<
  NomeMetodo,
  (
    params: Params,
    options?: { loading?: boolean; mensagemSucesso?: string; mensagem?: boolean },
  ) => Promise<Retorno>
>;
