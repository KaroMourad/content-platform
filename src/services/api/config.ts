import { QueryClient } from "@tanstack/react-query";

export const QUERY_CLIENT = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  }
);

export enum API_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export const METHODS_WITH_BODY = new Set<`${API_METHODS}`>([
  API_METHODS.POST,
  API_METHODS.PUT,
  API_METHODS.PATCH,
]);
