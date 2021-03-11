import styles from "../styles/Global.module.css";
import { Box, Image, Button } from "../shared/chakra";
import TimelineELement from "../components/TimelineElement";

export default function About(props) {
  const { fullScreen } = props;
  return (
    <>
      <Box
        className={styles.about + (fullScreen ? " " + styles.fullScreen : "")}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image src="/about.jpg"></Image>
        </Box>
        <Box className={styles.timelinesContainer}>
          <TimelineELement
            skills={[
              "Commitment",
              "Passion",
              "Team work",
              "Technical knowledge",
            ]}
            date="Feb 2013 - Jul 2019"
            description="Best graduated of the period 2019.1. Final score: 4.375/5"
            title="🎓 ESPE (Escuela Superior Politécnica del Ejército)"
          ></TimelineELement>

          <TimelineELement
            skills={["Ladder", "C++", "Java", "Python", "MATLAB", "Wordpress"]}
            date="Feb 2014 - Jul 2018"
            description="Software developer, specialist in mechatronics."
            title="💼 Ten Tech"
          ></TimelineELement>

          <TimelineELement
            skills={[
              "PMP",
              "Leadership",
              "Bussiness administration",
              "Teaching",
            ]}
            date="Feb 2019 - Current"
            description="CEO and developer of the company."
            title="💼 Localhost (entrepreneurship)"
          ></TimelineELement>

          <TimelineELement
            skills={[
              "Node.js",
              "Flask",
              "Firebase",
              "Linode",
              "Nginx",
              "Certbot",
              "Wordpress",
              "MongoDB",
              "Redis",
              "MQL4 - MQL5",
            ]}
            date="Jan 2020 - Current"
            description="Full stack developer, specialist in Backend and DevOps."
            title="💼 Kings of Binary"
          ></TimelineELement>

          <TimelineELement
            skills={[
              "AngularJS",
              "Angular 9",
              "Django",
              "Celery",
              "RabbitMQ",
              "AWS",
              "Firebase",
            ]}
            date="Oct 2020 - Current"
            description="Full stack developer, specialist in Backend and DevOps."
            title="💼 Devsu"
          ></TimelineELement>
        </Box>
      </Box>
    </>
  );
}
