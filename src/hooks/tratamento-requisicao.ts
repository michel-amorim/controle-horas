import type { AxiosError } from 'axios';
import { notificacao } from './notify';

import { finalizarLoading, iniciarLoading } from './loading';
import type { TratamentoRequisicaoParams } from 'src/@types/request/requisicao';

let fila: number[] = [];

type CampoErro = {
  campo: string;
  mensagem: string;
};

type ErroValidacao = {
  mensagem: string;
  message: string;
  exception?: string;
  campos?: CampoErro[];
  tipo?: string;
};

export async function TratamentoRequisicao<T, R>({
  servico,
  params,
  mensagemSucesso,
  mensagem,
  loading,
}: TratamentoRequisicaoParams<T, R>): Promise<R> {
  const id = Date.now();
  try {
    if (loading) {
      if (fila.length === 0) {
        iniciarLoading();
      }
      fila.push(id);
    }

    const response = await servico(params);

    if (mensagem !== false) {
      notificacao({
        mensagem: mensagemSucesso ? mensagemSucesso : 'Operação concluída com sucesso.',
        cor: 'positive',
      });
    }

    return response;
  } catch (error) {
    handleError(error as AxiosError);
    throw error;
  } finally {
    fila = fila.filter((i) => i !== id);
    if (fila.length === 0) {
      finalizarLoading();
    }
  }
}

function handleError(error: AxiosError) {
  let errorMessage =
    'Um erro inesperado aconteceu, por favor tente novamente. Caso o erro persista, contate o suporte do sistema.';

  if (error.response?.data) {
    const responseData = error.response.data as ErroValidacao;

    if (Array.isArray(responseData.campos) && responseData.campos.length > 0) {
      errorMessage = responseData.campos
        .map((campoError) => `${campoError.campo}: ${campoError.mensagem}`)
        .join('\n');
    } else if (typeof responseData.mensagem === 'string') {
      errorMessage = responseData.mensagem;
    } else if (typeof responseData.message === 'string') {
      errorMessage = responseData.message;
    }
  }

  notificacao({
    mensagem: errorMessage,
    cor: 'negative',
  });
}
