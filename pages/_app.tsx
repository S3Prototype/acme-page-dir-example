import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { VercelToolbar } from '@vercel/toolbar/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics
        beforeSend={(event) => {
          if (event.url.includes("/private")) {
            return null;
          }
          return event;
        }}
      />
        <VercelToolbar />
    </>
  );
}

export default MyApp;
