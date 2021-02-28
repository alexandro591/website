import Head from "next/head";
import NavBar from "../components/NavBar";
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
} from "../shared/chakra";

function Main() {
  return (
    <>
      <Box className={styles.main}>
        <Box className={styles.title}>
          <span>Hi visitor!</span>
          <Heading as="h1" fontSize="7xl">
            I'm <span>ALEXANDRO TAPIA</span>
          </Heading>
          <Text>Full-Stack software developer 🇪🇨️.</Text>
          <Box display="flex" flexDir="column" w="150px">
            <Button color="white.400" background="green.600">
              About me
            </Button>
            <Button color="white.400" background="green.600">
              Resume
            </Button>
            <Button color="white.400" background="green.600">
              Contact me
            </Button>
          </Box>
        </Box>
        <Box className={styles.title}></Box>
      </Box>
    </>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alexandro</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar></NavBar>
      <Main></Main>
    </div>
  );
}
