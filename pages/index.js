import Head from "next/head";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import { SrcContext } from "../context/Src";
import axios from "axios";
import styles from "../styles/Global.module.css";
import {
  Box,
  Image,
  Text,
  IconMdHome,
  IconMdPerson,
  IconMdInsertDriveFile,
  IconMdMyLocation,
  Heading,
  Button,
  CheckCircleIcon,
} from "../shared/chakra";
import { useContext, useEffect, useState } from "react";

export default function App() {
  const { src, setSrc } = useContext(SrcContext);
  const [navVisitble, setNavVisible] = useState(true);

  useEffect(() => {
    axios.post("/api/track_visitor", {
      name: "alex",
      uuid: "sdfas",
    });
  }, []);
  return (
    <div className="root">
      <meta name="theme-color" content="#00ff9d" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#00ff9d" />

      <Head>
        <title>Alexandro</title>
        <link rel="icon" href="/logo.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.fbAsyncInit = function () {
                FB.init({
                  xfbml: true,
                  version: "v10.0",
                });
              };
            
              (function (d, s, id) {
                var js,
                  fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
                fjs.parentNode.insertBefore(js, fjs);
              })(document, "script", "facebook-jssdk");
            `,
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: `` }} />
      </Head>
      <NavBar navVisitble={navVisitble}></NavBar>
      {(() => {
        if (src === "home") {
          return <Home fullScreen={!navVisitble}></Home>;
        }
        if (src === "about") {
          return <About fullScreen={!navVisitble}></About>;
        }
      })()}
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="101039808207496"
      ></div>
      <Box>
        <Button
          w="40px"
          h="40px"
          position="fixed"
          fontSize="24px"
          left="20px"
          bottom="20px"
          borderRadius="100%"
          zIndex="9999999"
          onClick={() => {
            setNavVisible(!navVisitble);
          }}
          transition="2s"
          justifyContent="center"
          alignItems="center"
        >
          {navVisitble ? "✖️" : "📃️"}
        </Button>
      </Box>
    </div>
  );
}
