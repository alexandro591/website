import styles from "../styles/Home.module.css";
import {
  Box,
  HamburgerIcon,
  Image,
  Text,
  Button,
  CloseIcon,
} from "../shared/chakra";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu";

export default function Nav(props) {
  const { src, isMobileView } = props;
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <Box margin="auto" alignItems="center" zIndex="999">
          <Image src="/img/logo.png" pl="30px" w="80%"></Image>
        </Box>
        <Box display={isMobileView ? "flex" : "none"}></Box>
        <Box
          display={isMobileView ? "none" : "flex"}
          flexDir="row"
          justifyContent="space-around"
          alignItems="center"
          w="500px"
          margin="auto"
          fontSize="20px"
        >
          <Text fontWeight={src == "home" ? "bold" : "normal"}>Home</Text>
          <Text fontWeight={src == "about" ? "bold" : "normal"}>About me</Text>
          <Text fontWeight={src == "resume" ? "bold" : "normal"}>Resume</Text>
          <Text fontWeight={src == "contact" ? "bold" : "normal"}>Contact</Text>
        </Box>

        <Box
          display={isMobileView ? "flex" : "none"}
          justifyContent="center"
          alignItems="center"
          fontSize="20px"
        >
          <Button
            onClick={(e) => {
              setMobileMenuOpened(!mobileMenuOpened);
            }}
            zIndex="999"
          >
            {mobileMenuOpened ? (
              <CloseIcon></CloseIcon>
            ) : (
              <HamburgerIcon></HamburgerIcon>
            )}
          </Button>
        </Box>
      </nav>
      <MobileMenu
        display={mobileMenuOpened ? "inheret" : "none"}
        src={src}
      ></MobileMenu>
      <hr></hr>
    </>
  );
}
