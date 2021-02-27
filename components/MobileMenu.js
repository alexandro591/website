import { Box, Text } from "../shared/chakra";
import styles from "../styles/Home.module.css";

export default function MobileMenu(props) {
  const { src, display } = props;
  return (
    <>
      <Box display={display}>
        <Box className={styles.mobileMenu}>
          <Text fontWeight={src == "home" ? "bold" : "normal"}>Home</Text>
          <hr></hr>
          <Text fontWeight={src == "about" ? "bold" : "normal"}>About me</Text>
          <hr></hr>
          <Text fontWeight={src == "resume" ? "bold" : "normal"}>Resume</Text>
          <hr></hr>
          <Text fontWeight={src == "contact" ? "bold" : "normal"}>Contact</Text>
          <hr></hr>
        </Box>
      </Box>
    </>
  );
}
