import styles from "../styles/Global.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { SrcContext } from "../context/src";
import {
  Box,
  Image,
  Text,
  IconMdHome,
  IconMdPerson,
  IconMdInsertDriveFile,
  IconMdMyLocation,
} from "../shared/chakra";
export default function NavBar() {
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

  useEffect(() => {
    let counter = 0;
    setInterval(() => {
      if (roar.current.style.transform != "scale(0)") {
        if (roar.current.style.transform == "scale(1.2)")
          roar.current.style.transform = "scale(1)";
        else roar.current.style.transform = "scale(1.2)";
        counter++;
      }
      if (
        counter >= 10 &&
        (roar.current.style.transform == "scale(1)" ||
          roar.current.style.transform == "scale(1.2)")
      ) {
        roar.current.style.transform = "scale(0)";
      }
      if (counter >= 20 && roar.current.style.transform == "scale(0)") {
        roar.current.style.transform = "scale(1.2)";
        counter = 0;
      }
      counter++;
    }, 700);
  }, [roar]);

  return (
    <>
      <Box className={styles.navbar}>
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
