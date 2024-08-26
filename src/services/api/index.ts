import { API_METHODS, METHODS_WITH_BODY } from "./config";
import {
  DELETE_CONFIGS,
  FetcherConfig,
  GET_CONFIGS,
  PATCH_CONFIGS,
  POST_CONFIGS,
  PUT_CONFIGS,
  ResponseData,
} from "./types";
import { getRequestHeaders, handleResponse, getApiRoot } from "./utils";

const API_ROOT = getApiRoot();

const fetcher = async <TData = unknown>(
  endpoint: string,
  method: `${API_METHODS}`,
  { data, headers, params, apiRoot }: FetcherConfig = {}
): Promise<ResponseData<TData>> => {
  try {
    const requestHeaders = getRequestHeaders(headers);
    const config: RequestInit = {
      method,
      headers: requestHeaders,
    };

    if (data && METHODS_WITH_BODY.has(method)) {
      config.body = JSON.stringify(data);
    }

    const searchParams = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";
    const input = `${apiRoot || API_ROOT}${endpoint}${searchParams}`;
    const response = await fetch(input, config);
    return handleResponse(response);
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
};

const get = async <TData = unknown>(
  endpoint: string,
  { headers = {}, params, apiRoot }: GET_CONFIGS
): Promise<ResponseData<TData>> =>
  fetcher(endpoint, API_METHODS.GET, { headers, params, apiRoot });

const post = async <TData = unknown>(
  endpoint: string,
  { data, headers, params }: POST_CONFIGS<TData>
): Promise<ResponseData<TData>> =>
  fetcher(endpoint, API_METHODS.POST, { data, headers, params });

const put = async <TData = unknown>(
  endpoint: string,
  { data, headers, params }: PUT_CONFIGS<Partial<TData>>
): Promise<ResponseData<TData>> =>
  fetcher(endpoint, API_METHODS.PUT, { data, headers, params });

const patch = async <TData = unknown>(
  endpoint: string,
  { data, headers }: PATCH_CONFIGS<Partial<TData>>
): Promise<ResponseData<TData>> =>
  fetcher(endpoint, API_METHODS.PATCH, { data, headers });

const remove = async <TData = unknown>(
  endpoint: string,
  { data, headers }: DELETE_CONFIGS<Partial<TData>>
): Promise<ResponseData<TData>> =>
  fetcher(endpoint, API_METHODS.DELETE, { data, headers });

export const API = { get, post, put, patch, delete: remove };
