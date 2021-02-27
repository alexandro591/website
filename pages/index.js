import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, CheckCircleIcon, Image, Text, Heading } from "../shared/chakra";
import Nav from "../components/Nav";
import { useEffect, useState, useRef } from "react";
import checkIfMobileView from "../functions/checkIfMobileView";
import Carousel from "react-elastic-carousel";
import { FontAwesomeIcon } from "../shared/fontawesome";

export async function getServerSideProps(ctx) {
  return {
    props: {
      isMobileView: checkIfMobileView(ctx),
    },
  };
}

export default function Home(props) {
  const carouselRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(null);
  useEffect(() => {
    setIsMobileView(props.isMobileView);
    window.onresize = function () {
      if (window.innerWidth <= 1000) {
        return setIsMobileView(true);
      }
      return setIsMobileView(checkIfMobileView());
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Alexandro</title>
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Nav src="home" isMobileView={isMobileView}></Nav>
      <main className={styles.main}>
        <Box className={styles.heading}>
          <Heading as="h1" size="4xl">
            Hi visitor,
            <br />
            This is Alex...
          </Heading>
          <Text color="gray" mt="5px" mb="100px">
            Django - Next - Chakra ❤️
          </Text>
        </Box>
        <Box className={styles.technologiesContainer}>
          <Text>
            <CheckCircleIcon color="green.400"></CheckCircleIcon>{" "}
            <b>Full stack software developer</b> from Ecuador 🇪🇨,{" "}
            <b>best graduated Mechatronics engineer</b> with experience in{" "}
            <b>languages and frameworks like:</b>
          </Text>
          <Text className={styles.technologies}>
            JavaScript (React - NextJs, AngularJs, Angular 9, Express,
            Handlebars), Python (Flask, Django, Jinja), CSS (Bootstrap, Sass),
            C++, C#, Java, HTML, VBScript, MQL4 – MQL5, Ladder, LabVIEW, MATLAB
          </Text>
          <Text>
            <CheckCircleIcon color="green.400"></CheckCircleIcon>{" "}
            <b>
              Experience designing, creating, managin and maintaining databases
              in:
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
            Git, Postman, Celery, RabbitMQ, Netlify, Vercel, Twilio, DialogFlow,
            Jira, Slack, HubSpot, Zapier, Hubstaff, Bitbucket.
          </Text>
        </Box>

        <Box className={styles.heading + " " + styles.stack}>
          <Heading as="h1" size="4xl">
            Favorite stack,
            <br />
            tools and frameworks
          </Heading>
          <Text color="gray" mt="5px" mb="100px">
            Just some personal favorites... 😎️
          </Text>
        </Box>
        <Box
          className={styles.technologiesContainer + " " + styles.preferences}
        >
          <Carousel
            ref={carouselRef}
            enableAutoPlay
            autoPlaySpeed={2000}
            onChange={(currentItem) => {
              if (currentItem.index === 3) {
                const timeout = setTimeout(() => {
                  carouselRef.current.goTo(0);
                  clearTimeout(timeout);
                }, 1500);
              }
            }}
          >
            <Image
              src="/img/tools/django.jpeg"
              maxW="400px"
              margin="auto"
            ></Image>
            <Image src="/img/tools/next.png" maxW="400px" margin="auto"></Image>
            <Image
              src="/img/tools/mongodb.png"
              maxW="400px"
              margin="auto"
            ></Image>
            <Image
              src="/img/tools/chakra.png"
              maxW="400px"
              margin="auto"
            ></Image>
          </Carousel>
        </Box>
      </main>

      <footer className={styles.footer}>
        <Box className={styles.footerContainer}>
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            onClick={() => {
              window.open("https://www.facebook.com/alexandrotapiaflores/");
            }}
          ></FontAwesomeIcon>
          <FontAwesomeIcon icon={["fab", "instagram"]}></FontAwesomeIcon>
          <FontAwesomeIcon icon={["fab", "whatsapp"]}></FontAwesomeIcon>
        </Box>
        <Text color="white" fontSize="14px" textAlign="center" mt="15px">
          © Alexandro Tapia - Quito - Ecuador
        </Text>
      </footer>
    </div>
  );
}
