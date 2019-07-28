import Container from "@material-ui/core/Container";
import React from "react";
import styles from "./home.module.css";
import NavigationCards from "./navigation-cards";
import Footer from "./footer";
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => (
  <React.Fragment>
    <Container maxWidth="sm">
      <h1 className={styles.mainTitle}> Olivier Schweitzer </h1>
      <blockquote className={styles.description}>
        <FontAwesomeIcon icon={faQuoteLeft} />
        <span>Computer engineer in web technologies.</span>
        <FontAwesomeIcon icon={faQuoteRight} />
      </blockquote>
    </Container>
    <Container className={styles.navigationCardsComponent}>
      <NavigationCards></NavigationCards>
    </Container>
    <Footer></Footer>
  </React.Fragment>
);
