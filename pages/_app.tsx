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

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000"></meta>
      </Head>
      <Box as="main">
        {/* common header  */}
        <Navbar />
        <DefaultSeo {...defaultSEOValues} />

        {/* content */}
        <Component {...pageProps} />

        {/* common footer */}
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
