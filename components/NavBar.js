import styles from "../styles/Global.module.css";
import {
  Box,
  Image,
  Text,
  IconMdHome,
  IconMdPerson,
  IconMdInsertDriveFile,
  IconMdMyLocation,
} from "../shared/chakra";
export default function NavBar(props) {
  const { src } = props;
  return (
    <>
      <Box className={styles.navbar}>
        <Box w="100px">
          <Image src="/logo.png" />
        </Box>
        <Box className={styles.navbar_options}>
          <Box>
            <Text className={src === "home" ? styles.select : ""}>
              <IconMdHome></IconMdHome>
            </Text>
          </Box>
          <Box>
            <Text className={src === "about" ? styles.select : ""}>
              <IconMdPerson></IconMdPerson>
            </Text>
          </Box>
          <Box>
            <Text className={src === "resume" ? styles.select : ""}>
              <IconMdInsertDriveFile></IconMdInsertDriveFile>
            </Text>
          </Box>
          <Box>
            <Text className={src === "contact" ? styles.select : ""}>
              <IconMdMyLocation></IconMdMyLocation>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
