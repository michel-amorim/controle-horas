const locale = 'pt-BR'

export const obterDataAtual = (): string => {
  const hoje = new Date()
  return hoje.toLocaleDateString('pt-BR')
}

export const obterDataAtualEAnterior = (): string => {
  const hoje = new Date()
  const ontem = new Date()
  ontem.setDate(hoje.getDate() - 1)

  const formatarData = (data: Date): string => data.toLocaleDateString('pt-BR')

  return `${formatarData(ontem)} - ${formatarData(hoje)}`
}

export const anoAtual = (date: Date = new Date()): number => date.getFullYear()

export const formatarData = (date: Date = new Date()): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat(locale, options).format(date)
}

export const formatarDataHora = (dataISO: string): string => {
  const data = new Date(dataISO)

  const dataFormatada = data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  const horaFormatada = data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return `${dataFormatada} ${horaFormatada}`
}
