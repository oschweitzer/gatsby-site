import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "@material-ui/core/Container";
import React from "react";
import Footer from "../footer/footer";
import NavigationCards from "../navigation-cards/navigation-cards";
import styles from "./home.module.css";

export default () => (
  <React.Fragment>
    <Container maxWidth="sm">
      <h1 className={styles.mainTitle}> Olivier Schweitzer </h1>
      <blockquote className={styles.description}>
        <FontAwesomeIcon icon={faQuoteLeft} />
        <span> Computer engineer in web technologies. </span>
        <FontAwesomeIcon icon={faQuoteRight} />
      </blockquote>
    </Container>
    <Container className={styles.navigationCardsComponent}>
      <NavigationCards> </NavigationCards>
    </Container>
    <Footer> </Footer>
  </React.Fragment>
);
