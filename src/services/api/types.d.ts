export type Params =
  | string
  | Record<string, string>
  | URLSearchParams
  | string[][];
  
export interface FetcherConfig {
  data?: D;
  headers?: Record<string, string>;
  params?: Params;
  apiRoot?: string;
}

export interface GET_CONFIGS {
  headers?: Record<string, string>;
  params?: Params;
  apiRoot?: string;
}

export interface POST_CONFIGS<D> {
  data: D;
  headers?: Record<string, string>;
  params?: Params;
}

export interface PUT_CONFIGS<D> {
  data: D;
  headers?: Record<string, string>;
  params?: Params;
}

export interface PATCH_CONFIGS<D> {
  data: D;
  headers?: Record<string, string>;
}

export interface DELETE_CONFIGS<D> {
  data: D;
  headers?: Record<string, string>;
}

export interface QueryProviderProps {
  children: ReactNode;
}