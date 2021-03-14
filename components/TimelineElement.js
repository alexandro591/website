import styles from "../styles/Global.module.css";
import { Box, Text, Button } from "../shared/chakra";

export default function TimelineELement(props) {
  const { skills, date, title, description } = props;
  return (
    <>
      <Box
        padding="30px"
        display="flex"
        flexDir="column"
        margin="auto"
        justifyContent="center"
        alignItems="center"
        className={styles.timelineContainer}
      >
        <Box className={styles.timelineDate}>
          <span>{date}</span>
        </Box>
        <Box w="100%">
          <b>{title}</b>
          <Text>{description}</Text>
          <hr></hr>
          <Box className={styles.skillsContainer}>
            {skills.map((skill) => (
              <Box w="100%">
                <Button background="green.600">{skill}</Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
