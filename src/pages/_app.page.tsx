import { darkTheme, lightTheme } from "@styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { UserProvider } from "@auth0/nextjs-auth0";
import { AppRouter } from "./api/trpc/[trpc].api";
import { withTRPC } from "@trpc/next";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { transformer } from "@services/trpc";
import Layout from "@sections/Layout";
import { DbActionsProvider } from "@provider/dbActions";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <DbActionsProvider>
      <ThemeProvider theme={darkTheme}>
        <UserProvider>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </DbActionsProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }

  return process.env.NEXT_PUBLIC_BASE_URL;
};

export default withTRPC<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: () =>
            process.env.NODE_ENV === "development" &&
            typeof window !== "undefined",
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      transformer,
    };
  },
  ssr: true,
})(MyApp);
