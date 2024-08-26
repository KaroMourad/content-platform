const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function handleResponse(response: Response) {
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  throw new Error("An error occurred");
}

export function getRequestHeaders(customHeaders = {}): Record<string, string> {
  let headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...customHeaders,
  };

  return headers;
}

export function getApiRoot() {
  // Return the API base URL based on the environment mode

  // Currently we use the API_BASE_URL from the environment variables.
  // Since the api is the same for all environments we can just return the API_BASE_URL
  return API_BASE_URL || '/';
}
