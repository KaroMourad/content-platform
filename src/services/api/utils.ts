import { ResponseData } from "./api.types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function handleResponse<TData = unknown>(
  response: Response
): Promise<ResponseData<TData>> {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(
      `HTTP error! ${response.status} ${errorMessage}`
    );
  }
  const data: TData = await response.json();
  const totalItems = parseInt(response.headers.get("X-Total") || "0", 10);
  const perPage = parseInt(response.headers.get("X-Per-Page") || "0", 10);
  const lastPageNumber =
    perPage > 0 ? Math.ceil(totalItems / perPage) : undefined;
  return {
    data,
    totalItems,
    perPage,
    lastPageNumber,
  };
}

export function getRequestHeaders(customHeaders = {}): Record<string, string> {
  return {
    "Content-Type": "application/json",
    ...customHeaders,
  };
}

export function getApiRoot() {
  // Return the API base URL based on the environment mode

  // Currently we use the API_BASE_URL from the environment variables.
  // Since the api is the same for all environments we can just return the API_BASE_URL
  return API_BASE_URL || "/";
}
