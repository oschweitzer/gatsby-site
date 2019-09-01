import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import moment from "moment";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import styles from "./education.module.scss";

const query = graphql`
  {
    allContentfulEducation(
      filter: { degree: { ne: null } }
      sort: { fields: endDate, order: DESC }
    ) {
      nodes {
        degree
        description {
          description
        }
        endDate
        university
        startDate
      }
    }
  }
`;

const Education = () => {
  const data = useStaticQuery(query).allContentfulEducation.nodes;
  return (
    <section>
      <h2 className="title is-2">
        <FontAwesomeIcon icon={faGraduationCap} color={"black"} />
        {" Education"}
      </h2>
      <div className="timeline is-centered">
        {data.map((education, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker is-icon">
              <FontAwesomeIcon icon={faGraduationCap} color={"#121212"} />
            </div>
            <div className="timeline-content">
              <p className="heading">
                <i>
                  {moment(education.startDate).format("LL")} -{" "}
                  {moment(education.endDate).format("LL")}
                </i>
              </p>
              <span className={[styles.university, "title is-6"].join(" ")}>
                {education.degree} - {education.university}
              </span>
              <div className={[styles.subject, "content"].join(" ")}>
                {ReactHtmlParser(education.description.description)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
