import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../theme";
import "../styles/satoshi.css";
import { Box } from "@chakra-ui/react";
import Navbar from "components/sections/Navbar";
import Footer from "components/sections/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Box as="main">
        {/* common header  */}
        <Navbar />

        {/* content */}
        <Component {...pageProps} />

        {/* common footer */}
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
