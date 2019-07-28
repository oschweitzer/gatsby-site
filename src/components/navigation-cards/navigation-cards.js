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
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectsImage from "../../../static/projects.jpeg";
import contactImage from "../../../static/contact.jpeg";
import hobbiesImage from "../../../static/hobbies.jpeg";
import styles from "./navigation-cards.module.css";

export default () => (
  <Grid container justify="center" spacing={2}>
    <Grid item xs={3}>
      <Link to="/projects/" style={{ textDecoration: "none" }}>
        <Card className={styles.mainCard}>
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
          <CardContent className={styles.cardContent}>
            My personal and professional projects.
          </CardContent>
        </Card>
      </Link>
    </Grid>
    <Grid item xs={3}>
      <Link to="/hobbies/" style={{ textDecoration: "none" }}>
        <Card className={styles.mainCard}>
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
          <CardContent className={styles.cardContent}>
            What I like to do when I'm not working.
          </CardContent>
        </Card>
      </Link>
    </Grid>
    <Grid item xs={3}>
      <Link to="/contact/" style={{ textDecoration: "none" }}>
        <Card className={styles.mainCard}>
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
          <CardContent className={styles.cardContent}>
            How to contact me.
          </CardContent>
        </Card>
      </Link>
    </Grid>
  </Grid>
);
