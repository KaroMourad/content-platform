import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryProviderProps } from "./types";
import { QUERY_CLIENT } from "./config";

const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
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
