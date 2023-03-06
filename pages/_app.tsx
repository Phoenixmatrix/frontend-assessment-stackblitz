import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { SWRConfig } from "swr";

import { cacheProvider, fetcher } from "@/lib/swrConfig";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher, provider: cacheProvider }}>
        <Component {...pageProps} />
      </SWRConfig>
    </StyledEngineProvider>
  );
}
