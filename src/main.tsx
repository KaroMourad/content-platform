import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import { Loader } from "./components/ui";

import QueryProvider from "./services/api/QueryProvider.tsx";

import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <QueryProvider>
          <App />
        </QueryProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
