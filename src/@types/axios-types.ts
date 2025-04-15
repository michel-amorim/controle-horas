import type { AxiosRequestConfig } from 'axios'

type Common<Params> = {
  params?: Params
}

export type ApiPostParamsType<Request = unknown, Params = unknown> = Omit<
  AxiosRequestConfig<Request>,
  'params'
> &
  Common<Params>

export type ApiGetParamsType<Params = unknown> = Omit<AxiosRequestConfig<never>, 'params'> &
  Common<Params>
