import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../theme";
import "../styles/satoshi.css";
import { Box } from "@chakra-ui/react";
import Navbar from "components/sections/Navbar";
import Footer from "components/sections/Footer";
import defaultSEOValues from "../next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
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

export default MyApp;
