import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript, ThemeConfig } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import theme from "./../theme";
import { RouterProvider } from "react-router-dom";

import router from "./components/Router";
// import App from "./App";
 const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
 <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <App/> */}
      </QueryClientProvider>
      {/* <ReactQueryDevtools/> */}
    </ChakraProvider>
    
  </React.StrictMode>
  
);
