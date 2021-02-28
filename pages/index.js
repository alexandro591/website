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
  CheckCircleIcon,
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
          <Text>Django - Next - Chakra ❤️</Text>
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
        <Box className={styles.title}>
          <Box>
            <Text>
              <CheckCircleIcon color="green.400"></CheckCircleIcon>{" "}
              <b>Full stack software developer</b> from Ecuador 🇪🇨,{" "}
              <b>best graduated Mechatronics engineer</b> with experience in{" "}
              <b>languages and frameworks like:</b>
            </Text>
            <Text className={styles.technologies}>
              JavaScript (React - NextJs, AngularJs, Angular 9, Express,
              Handlebars), Python (Flask, Django, Jinja), CSS (Bootstrap, Sass),
              C++, C#, Java, HTML, VBScript, MQL4 – MQL5, Ladder, LabVIEW,
              MATLAB
            </Text>
            <Text>
              <CheckCircleIcon color="green.400"></CheckCircleIcon>{" "}
              <b>
                Experience designing, creating, managin and maintaining
                databases in:
              </b>
            </Text>
            <Text className={styles.technologies}>
              MongoDB, MySQL, PostgreSQL, SQLite, MariaDB, Redis, Firebase -
              Firestore and Realtime database.
            </Text>
            <Text>
              <CheckCircleIcon color="green.400"></CheckCircleIcon>{" "}
              <b>
                Experience using and developing in Microsoft, AWS, Google and
                other paid and Open-Source technologies, for example:
              </b>{" "}
            </Text>
            <Text className={styles.technologies}>
              Git, Postman, Celery, RabbitMQ, Netlify, Vercel, Twilio,
              DialogFlow, Jira, Slack, HubSpot, Zapier, Hubstaff, Bitbucket.
            </Text>
          </Box>
        </Box>
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
