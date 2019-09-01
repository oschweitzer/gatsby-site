import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import profilePhoto from "../../../static/me.jpeg";
import styles from "./identity.module.css";

const idQuery = graphql`
  {
    allContentfulIdentity(limit: 1) {
      edges {
        node {
          description {
            description
          }
          job
          name
        }
      }
    }
  }
`;

const Identity = () => {
  const data = useStaticQuery(idQuery).allContentfulIdentity.edges[0].node;
  return (
    <React.Fragment>
      <section className={[styles.myHeader, "hero", "is-fullheight"].join(" ")}>
        <div className={"hero-body"}>
          <section className={"container"}>
            <img
              src={profilePhoto}
              alt={"My profile photo"}
              className={styles.profilePhoto}
            />
            <h1 className={styles.mainTitle}> {data.name} </h1>
            <h3 className={"title is-3"}>{data.job}</h3>
            <blockquote className={[styles.description, "content"].join(" ")}>
              <FontAwesomeIcon icon={faQuoteLeft} />
              <span> {data.description.description} </span>
              <FontAwesomeIcon icon={faQuoteRight} />
            </blockquote>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Identity;
