import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia
} from "@material-ui/core";
import {
  faCodeBranch,
  faPlane,
  faAddressCard
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectsImage from "../../static/projects.jpeg";
import contactImage from "../../static/contact.jpeg";
import hobbiesImage from "../../static/hobbies.jpeg";
import styles from "./navigation-cards.module.css";

export default () => (
  <Grid container justify="center" spacing={2}>
    <Grid item xs={3}>
      <Card>
        <CardHeader
          className={styles.cardHeader}
          title="Projects"
          titleTypographyProps={{ variant: "h5" }}
          avatar={<FontAwesomeIcon icon={faCodeBranch} />}
        ></CardHeader>
        <CardMedia
          className={styles.image}
          image={projectsImage}
          title="Projects screenshots"
        ></CardMedia>
        <CardContent></CardContent>
      </Card>
    </Grid>

    <Grid item xs={3}>
      <Card>
        <CardHeader
          className={styles.cardHeader}
          title="Hobbies"
          titleTypographyProps={{ variant: "h5" }}
          avatar={<FontAwesomeIcon icon={faPlane} />}
        ></CardHeader>
        <CardMedia
          className={styles.image}
          image={hobbiesImage}
          title="Hobbies photos"
        ></CardMedia>
        <CardContent></CardContent>
      </Card>
    </Grid>
    <Grid item xs={3}>
      <Card>
        <CardHeader
          className={styles.cardHeader}
          title="Contact"
          titleTypographyProps={{ variant: "h5" }}
          avatar={<FontAwesomeIcon icon={faAddressCard} />}
        ></CardHeader>
        <CardMedia
          className={styles.image}
          image={contactImage}
          title="Contact form screenshot"
        ></CardMedia>
        <CardContent></CardContent>
      </Card>
    </Grid>
  </Grid>
);
