export interface RegrasFormulario {
  regra?: { [key: string]: Array<(val: string | number) => boolean | string> }
  submitLabel?: string
  iconSubmit?: string | false
  titulo?: string
  desativarReset?: boolean
  desativarSubmit?: boolean
}
