import { Notify } from 'quasar';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mensagensPreProntas = [
  'Ação realizada com sucesso!',
  'Erro ao realizar a ação.',
  'Verifique os dados e tente novamente.',
] as const;

type MensagensPreProntas = (typeof mensagensPreProntas)[number];

interface NotificaoModel<M extends string> {
  mensagem: MensagensPreProntas | M;
  cor: 'positive' | 'negative' | 'warning';
  timeout?: number;
}

export const notificacao = <M extends string>({
  mensagem,
  cor,
  timeout = 5000,
}: NotificaoModel<M>) => {
  Notify.create({
    message: mensagem,
    color: cor,
    position: 'center',
    timeout: timeout,
    textColor: cor === 'warning' ? 'black' : 'white',
    actions: [{ label: 'Fechar', color: cor === 'warning' ? 'black' : 'white' }],
  });
};
