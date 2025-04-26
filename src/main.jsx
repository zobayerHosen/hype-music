import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootProvider from "./providers/RootProvider";
import router from "./router/router";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RootProvider>
        <RouterProvider router={router} />
      </RootProvider>
    </QueryClientProvider>
  </StrictMode>
);
