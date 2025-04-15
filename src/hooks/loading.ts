import { Loading, QSpinnerGears } from 'quasar'

export const iniciarLoading = () => {
  Loading.show({
    spinner: QSpinnerGears,
    spinnerColor: 'white',
    spinnerSize: 140,
    backgroundColor: 'gray-10',
    message: 'Processando Requisição... Aguarde um momento...',
    messageColor: 'white',
  })
}

export const finalizarLoading = () => Loading.hide()
