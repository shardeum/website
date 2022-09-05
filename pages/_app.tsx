import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../theme";
import "../styles/satoshi.css";
import "../styles/custom.css";
import { appWithTranslation } from "next-i18next";
import { Box } from "@chakra-ui/react";
import Navbar from "components/sections/Navbar";
import Footer from "components/sections/Footer";
import defaultSEOValues from "../next-seo.config";
import Head from "next/head";
import DiscordCTA from "@shm/components/common/DiscordCTA";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { SigninProvider } from "context/signin-window.context";
import NewWindow from "react-new-window";
import { AuthChecker } from "@shm/components/common/AuthChecker";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  const router = useRouter();
  const [popup, setPopup] = useState(false);
  const isInSigninRoute = router.pathname.startsWith("/auth/signin");

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={customTheme}>
        <SigninProvider value={{ popup, setPopup }}>
          <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="favicon/site.webmanifest" />
            <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#000000" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="theme-color" content="#000000"></meta>
          </Head>
          {!isInSigninRoute ? (
            <Box as="main">
              {/* common header  */}
              <Navbar mode={router.pathname === "/explore/[id]" ? "light" : "dark"} />
              <DefaultSeo {...defaultSEOValues} />

              {/* content */}
              <Component {...pageProps} />
              <DiscordCTA />
              {/* Signin window popup */}
              {popup && (
                <>
                  {/* eslint-disable-next-line */}
                  {/* @ts-ignore */}
                  <NewWindow url="/auth/signin" center="screen" onUnload={() => setPopup(false)} />
                  <AuthChecker />
                </>
              )}

              {/* common footer */}
              <Footer />
            </Box>
          ) : (
            <Component {...pageProps} />
          )}
        </SigninProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
