import { ResponseData } from "./api.types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function handleResponse<TData = unknown>(
  response: Response
): Promise<ResponseData<TData>> {
  const data: TData = await response.json();
  if (response.ok) {
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
  const errorMessage = await response.text();
  throw new Error(errorMessage || "An error occurred");
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
