import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryProviderProps } from "./api.types";
import { queryClient } from "./config";

const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        buttonPosition="bottom-left"
        position="bottom"
        initialIsOpen={false}
      />
    </QueryClientProvider>
  );
};

export default QueryProvider;
