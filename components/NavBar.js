import styles from "../styles/Global.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { SrcContext } from "../context/Src";
import {
  Box,
  Image,
  Text,
  Button,
  IconMdHome,
  IconMdPerson,
  IconMdInsertDriveFile,
  IconMdMyLocation,
} from "../shared/chakra";
export default function NavBar(props) {
  const { navVisitble } = props;
  const [playerStatus, setPlayerStatus] = useState(false);
  const [audio, setAudio] = useState(null);
  const roar = useRef(null);
  const { src, setSrc } = useContext(SrcContext);

  useEffect(() => {
    if (audio) {
      audio.oncanplaythrough = function () {
        audio.play();
        setPlayerStatus(true);
      };
    }
  }, [audio]);

  return (
    <>
      <Box
        className={styles.navbar}
        left={!navVisitble ? "-80px" : "0"}
        transform={!navVisitble ? "scale(0)" : "scale(1)"}
      >
        <Box w="100px">
          <Image
            src="/logo.png"
            className={playerStatus ? "playerOn" : ""}
            onClick={(e) => {
              if (!audio) setAudio(new Audio("/song.mp3"));
              else {
                if (playerStatus) {
                  audio.pause();
                  setPlayerStatus(false);
                } else {
                  audio.currentTime = 0;
                  audio.play();
                  setPlayerStatus(true);
                }
              }
            }}
          />
          <Box className={styles.roar} ref={roar}>
            Ahggg!
          </Box>
        </Box>
        <Box className={styles.navbar_options}>
          <Box>
            <Text
              className={src === "home" ? styles.select : ""}
              onClick={(e) => {
                setSrc("home");
              }}
            >
              <IconMdHome></IconMdHome>
            </Text>
          </Box>
          <Box>
            <Text
              className={src === "about" ? styles.select : ""}
              onClick={(e) => {
                setSrc("about");
              }}
            >
              <IconMdPerson></IconMdPerson>
            </Text>
          </Box>
          <Box
            onClick={(e) => {
              window.open("/Alexandro Tapia - CV.pdf");
            }}
          >
            <Text className={src === "resume" ? styles.select : ""}>
              <IconMdInsertDriveFile></IconMdInsertDriveFile>
            </Text>
          </Box>
          <Box>
            <Text
              className={src === "contact" ? styles.select : ""}
              onClick={(e) => {
                setSrc("contact");
              }}
            >
              <IconMdMyLocation></IconMdMyLocation>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
