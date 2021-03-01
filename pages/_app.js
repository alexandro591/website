import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { SrcContext } from "../context/src";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [src, setSrc] = useState("home");
  return (
    <ChakraProvider>
      <SrcContext.Provider value={{ src: src, setSrc: setSrc }}>
        <Component {...pageProps} />
      </SrcContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
